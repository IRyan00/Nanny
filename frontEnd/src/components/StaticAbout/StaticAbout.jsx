import { Container, Row, Col } from "react-bootstrap";
import "./StaticAbout.css";

const StaticAbout = () => {
  return (
    <Container fluid className="py-5 my-5" id="presentation">
      <Row className="my-5 justify-content-center text-center">
        <Col lg={8} className="col-11">
          <h1 className="display-4 fw-bold mb-5">Bonjour !</h1>
          <p className="lead mb-5">
            Je m'appelle Muriel, mais ici, enfants et parents m'appellent «
            Nounou » ou simplement Muriel. J’ai 50 ans, je suis maman de grands
            garçons qui vivent encore avec moi. <br /> Je suis assistante
            maternelle depuis 2005, après avoir été aide familiale à domicile et
            baby-sitter dès mes 13 ans. On m’a très tôt confié des enfants de
            tous âges. Je suis fille et filleule d’assistantes maternelles :
            c’est un métier de famille, fait avec cœur.
          </p>
          <p className="lead">
            J’ai exercé à Bordeaux, ma ville natale, puis à Cambo et Bayonne
            depuis 2016. <br /> J’offre un accueil familial, simple et serein,
            où chacun trouve sa place. Les enfants jouent, explorent,
            participent à des sorties, des ateliers, et pratiquent des activités
            variées en intérieur comme en extérieur, selon leur rythme. Il y a
            aussi des temps calmes, de la lecture, et des moments de repos.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default StaticAbout;
