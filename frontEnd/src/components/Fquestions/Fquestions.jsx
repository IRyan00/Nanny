import "./Fquestions.css";
import { Accordion, Container } from "react-bootstrap";

const Fquestions = () => {
  const faqs = [
    {
      id: 1,
      question: "Êtes-vous agréée et assurée ?",
      answer:
        "Oui, je suis agréée par le Conseil Départemental, qui est actuellement en cours de renouvellement. Je dispose également d’une assurance responsabilité civile professionnelle couvrant l’ensemble de mon activité.",
    },
    {
      id: 2,
      question: "Comment se passe l’adaptation de l’enfant ?",
      answer:
        "L’adaptation se fait progressivement sur une à deux semaines. Cela permet à l’enfant, comme aux parents, de s’habituer au nouvel environnement en toute sérénité.",
    },
    {
      id: 3,
      question: "Proposez-vous des repas faits maison ?",
      answer:
        "Oui, les repas et les goûters sont préparés maison, avec des produits frais et adaptés à l’âge de chaque enfant. En cas d’allergie ou de régime particulier, un menu personnalisé est prévu.",
    },
    {
      id: 4,
      question: "Acceptez-vous les enfants en périscolaire ?",
      answer:
        "Non, je n’accepte pas les enfants en périscolaire. Mon accueil est réservé aux tout-petits uniquement, afin de respecter leur rythme et de maintenir un environnement calme et adapté à leurs besoins.",
    },
    {
      id: 5,
      question: "Cinquieme question ?",
      answer: "Cinquieme réponse.",
    },
  ];

  return (
    <Container id="back" fluid>
      <Container className="my-5 pb-5 pt-3 px-0 col-11 col-md-8 mx-auto">
        <Container className="text-center my-5">
          <h2 className="h1">F.A.Q.</h2>
        </Container>

        <Container className="px-0">
          <Accordion defaultActiveKey="0" className="border-0">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <Accordion.Item eventKey={faq.id} className="border-0">
                  <Accordion.Header className="border-0">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="border-0">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
                {index < faqs.length - 1 && <hr />}
              </div>
            ))}
          </Accordion>
        </Container>
      </Container>
    </Container>
  );
};

export default Fquestions;
