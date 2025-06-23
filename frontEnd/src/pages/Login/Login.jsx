import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const Login = () => {
  useEffect(() => {
    document.title = "Admin Connexion";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await api.post("/api/auth/login", {
        ...formData,
      });

      window.location.href = "/";
    } catch (error) {
      console.error("Connexion échouée:", {
        message: error.message,
        status: error.response?.status,
      });
      alert("Échec de la connexion. Veuillez réessayer.");
    }
  };

  return (
    // LOGIN FORM
    <div className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="bg border-0 rounded-4">
              <Card.Body className="p-4 p-md-5">
                <h1 className="text-center fw-bold mb-4">Connexion</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nom"
                      className="py-2"
                      {...register("name", { required: true })}
                      isInvalid={errors.name}
                    />
                    {errors.name && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Mot de passe"
                      className="py-2"
                      {...register("password", { required: true })}
                      isInvalid={errors.password}
                    />
                    {errors.password && (
                      <Form.Control.Feedback type="invalid">
                        Ce champ est requis
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    aria-label="Se connecter"
                    className="w-100 py-2 mb-3"
                  >
                    Se connecter
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
