import { Container, Row, Col } from "react-bootstrap";
import "./StaticAbout.css";

const StaticAbout = () => {
  return (
    <Container fluid className="py-5 my-5" id="presentation">
      <Row className="my-5 justify-content-center text-center">
        <Col lg={8} className="col-11">
          <h1 className="display-4 fw-bold mb-5">Assistante maternelle</h1>
          <p className="lead mb-5">
            Je m’appelle [Nom], assistante maternelle agréée avec plus de 20 ans
            d’expérience auprès des tout-petits. Passionnée par mon métier,
            j’offre un accueil chaleureux, bienveillant et sécurisé aux enfants,
            en respectant leur rythme et leurs besoins. Maman de deux enfants,
            je comprends l'importance d'un environnement épanouissant et
            stimulant pour favoriser leur développement.
          </p>
          <p className="lead">
            Au programme : jeux, activités éducatives, sorties et moments de
            partage pour accompagner chaque enfant dans son éveil et son
            autonomie. N’hésitez pas à me contacter pour plus d’informations ou
            pour échanger sur vos attentes !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default StaticAbout;
