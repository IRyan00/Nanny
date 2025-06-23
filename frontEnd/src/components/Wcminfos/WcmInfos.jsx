import { useState } from "react";
import "./WcmInfos.css";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  MousePointerClick,
  RockingChair,
  Baby,
  CalendarDays,
  Clock,
  PiggyBank,
  Activity,
  Puzzle,
  Book,
  Utensils,
  Shrub,
  Pen,
  Brush,
  Carrot,
  Landmark,
} from "lucide-react";

const WcmInfos = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleShowModal = (title, body) => {
    setModalContent({ title, body });
    setShowModal(true);
  };

  return (
    <>
      <Container className="py-3 col-12">
        <h2 className="h1 text-center my-5 pb-3">
          Informations sur <br /> l'accueil des enfants
        </h2>

        {/* CARDS */}
        <Container className="my-5 p-0 col-12 mx-auto row gap-5">
          {/* PLACES */}
          <Container
            id="info-card"
            className="zoom-hover rounded-3 p-4 col-11 col-sm-5 col-lg-4 shadow"
            onClick={() =>
              handleShowModal(
                "Places disponibles",
                `Toutes les places ont été pourvues`
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <RockingChair size={50} className="p-0 mb-2" />
                <h5 className="mb-5">Places disponibles</h5>
                <p className="mb-0">
                  Toutes les places <br /> ont été pourvues
                </p>
              </Col>
            </Row>
          </Container>

          {/* AGE */}
          <Container
            id="info-card"
            className="zoom-hover rounded-3 p-4 col-11 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal(
                "Âge des enfants accueillis",
                "J'accueille des enfants de 0 à 3 ans"
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <Baby size={50} className="p-0 mb-2" />
                <h5 className="mb-5">Âge des enfants</h5>
                <p className="mb-0">
                  De 0 <br /> à 3 ans
                </p>
              </Col>
            </Row>
          </Container>

          {/* DAYS */}
          <Container
            id="info-card"
            className="zoom-hover rounded-3 p-4 col-11 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal(
                "Jours d'accueil",
                "Je les accueille du Mardi au Vendredi"
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <CalendarDays size={50} className="p-0 mb-2" />
                <h5 className="mb-5">Jours d'accueil</h5>
                <p className=" mb-0">
                  Du Mardi <br /> au Vendredi
                </p>
              </Col>
            </Row>
          </Container>

          {/* HOURS */}
          <Container
            id="info-card"
            className="zoom-hover rounded-3 p-4 col-11 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal(
                "Horaires d'accueil",
                "Les horaires sont de 8h00 à 18h30"
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <Clock size={50} className="p-0 mb-2" />
                <h5 className="mb-5">Horaires d'acceuil</h5>
                <p className="mb-0">
                  De 8h00 <br /> à 18h30
                </p>
              </Col>
            </Row>
          </Container>

          {/* MONEY */}
          <Container
            id="info-card"
            className="zoom-hover rounded-3 p-4 col-11 col-sm-5 col-lg-3 shadow"
            onClick={() =>
              handleShowModal(
                "Tarifs & aides",
                <Row>
                  <Col>
                    <div className="mb-4">
                      <h6 className="h6">Coûts/jour</h6>
                      <p>∙ 4.50€ de l'heure</p>
                      <p>∙ 4.00€ d'indemnités d'entretien</p>
                      <p>∙ 3.00€ repas + goûter </p>
                    </div>
                    <div>
                      <h6 className="h6">Aides possibles</h6>
                      <p>∙ Aide 1</p>
                      <p>∙ Aide 2</p>
                      <p className="mb-0">∙ Aide 3 </p>
                    </div>
                  </Col>
                </Row>
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <PiggyBank size={50} className="p-0 mb-2" />
                <h5 className="mb-5">Tarifs & aides</h5>
                <p className="mb-0">
                  4.50€ de l'heure
                  <br /> 4.00€ de charges
                </p>
              </Col>
            </Row>
          </Container>

          {/* ACTIVITIES */}
          <Container
            id="info-card"
            className="zoom-hover rounded-3 p-4 col-11 col-sm-5 col-lg-4 shadow"
            onClick={() =>
              handleShowModal(
                "Activités proposées",
                <Row className="align-items-center justify-content-center text-center gap-4">
                  <Col xs={5}>
                    <Shrub size={50} className="p-0 mb-1" />
                    <h5 className="mb-3">Parc</h5>

                    <Utensils size={50} className="p-0 mb-1" />
                    <h5 className="mb-3">Pic-nic</h5>

                    <Book size={50} className="p-0 mb-1" />
                    <h5 className="mb-3">Bibliothèque</h5>

                    <Carrot size={50} className="p-0 mb-1" />
                    <h5>Jardin</h5>
                  </Col>

                  <Col xs={5}>
                    <Puzzle size={50} className="p-0 mb-1" />
                    <h5 className="mb-3">Puzzle</h5>

                    <Brush size={50} className="p-0 mb-1" />
                    <h5 className="mb-3">Peinture</h5>

                    <Pen size={50} className="p-0 mb-1" />
                    <h5 className="mb-3">Dessin</h5>

                    <Landmark size={50} className="p-0 mb-1" />
                    <h5>Musée</h5>
                  </Col>
                </Row>
              )
            }
          >
            <Row className="align-items-center">
              <Col className="text-center">
                <Activity size={50} className="p-0 mb-2" />
                <h5 className="mb-5">Activités proposées</h5>
                <p className="mb-0 row mx-auto justify-content-center align-items-center">
                  <Shrub size={50} className="col-6 p-0 mb-1" />
                  <Brush size={45} className="col-6 p-0 mb-1" />
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        <p className="text-center fst-italic fw-lighter col-11 mx-auto">
          * Cliquez sur les différents panneaux pour avoir plus d'informations{" "}
          <MousePointerClick size={20} />
        </p>
      </Container>

      {/* MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{modalContent.body}</Modal.Body>

        <Modal.Footer>
          <Button
            aria-label="Fermer l'élément"
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WcmInfos;
