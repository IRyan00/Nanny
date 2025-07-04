import { useState } from "react";
import "./Footer.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import useReCaptchaV3 from "../../hooks/reCaptchaV3";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const VITE_RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const executeRecaptcha = useReCaptchaV3(VITE_RECAPTCHA_SITE_KEY);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const token = await executeRecaptcha("contactForm");

    if (token) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { ...data, "g-recaptcha-response": token },
          PUBLIC_KEY
        );
        setAlert({
          type: "success",
          message: "Message envoyé !",
        });
      } catch (error) {
        setAlert({
          type: "danger",
          message: "Échec de l'envoi du message.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setAlert({ type: "danger", message: "Veuillez valider le recaptcha." });
      setIsLoading(false);
    }
  };

  return (
    <footer id="contact-section" className="py-4">
      <Container>
        <Row>
          <Col md={9} className="mx-auto">
            <h3 className="h2 text-center my-5">Contactez-moi</h3>
            {/* CONTACT FORM */}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-2">
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="name">Nom :</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("name", { required: true })}
                      id="name"
                      placeholder="Votre nom"
                      isInvalid={!!errors.name}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="firstname">Prénom :</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("firstname", { required: true })}
                      id="firstname"
                      placeholder="Votre prénom"
                      isInvalid={!!errors.firstname}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="email_from">Email :</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email_from", { required: true })}
                      id="email_from"
                      placeholder="Votre email"
                      isInvalid={!!errors.email_from}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="phone">Numéro :</Form.Label>
                    <Form.Control
                      type="tel"
                      {...register("phone", { required: true })}
                      id="phone"
                      placeholder="Votre numéro"
                      isInvalid={!!errors.phone}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="message">Message :</Form.Label>
                <Form.Control
                  as="textarea"
                  {...register("message", { required: true })}
                  id="message"
                  rows={3}
                  placeholder="Votre message"
                  isInvalid={!!errors.message}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  aria-label="Envoyer le contenu du formulaire de contact"
                  id="submit-button"
                  type="submit"
                  disabled={isLoading}
                  className="send col-6 col-md-4 col-lg-3 col-xl-2 my-3 border-0 d-flex justify-content-center align-items-center"
                >
                  {isLoading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <span>
                      <Send size={17} className="me-1" /> Envoyer
                    </span>
                  )}
                </Button>
              </div>
              {/* ALERT */}
              {alert && (
                <Alert
                  className="text-center col-8 mx-auto"
                  variant={alert.type}
                >
                  {alert.message}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
        {/* COPYRIGHTS & BLABLA */}
        <Row className="mt-5">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Muriel - Assistante maternelle.
              Tous droits réservés |{" "}
              <a href="/mlegales" className="text-decoration-none text-black">
                Mentions Légales
              </a>{" "}
              |{" "}
              <a href="/cgu" className="text-decoration-none text-black">
                Conditions générales
              </a>{" "}
              |{" "}
              <a
                href="/confidential"
                className="text-decoration-none text-black"
              >
                Politique de confidentialité
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
