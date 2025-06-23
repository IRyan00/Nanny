import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Rooms.css";

import salon from "../../assets/rooms/salon.webp";
import chambre1 from "../../assets/rooms/chambre1.webp";
import chambre2 from "../../assets/rooms/chambre2.webp";
import chambreM from "../../assets/rooms/chambreM.webp";

function Rooms() {
  const [zoomedSrc, setZoomedSrc] = useState(null);

  const handleZoom = (src) => {
    setZoomedSrc(src);
  };

  const closeZoom = () => {
    setZoomedSrc(null);
  };

  const gallery = [
    { src: chambre1, alt: "Image de la chambre 1" },
    { src: chambre2, alt: "Image de la chambre 2" },
    { src: chambreM, alt: "Image de la chambre principale" },
  ];

  return (
    <>
      <Container className="col-11 mx-auto">
        <Row className="mb-5">
          <h1 className="text-center my-5">Les pièces de vie</h1>

          <div className="mb-5 text-center">
            <h2 className="h2">
              Un salon chaleureux et adapté aux tout-petits
            </h2>
            <p className="text-justify my-5">
              Le salon est un espace central, pensé pour le bien-être et l’éveil
              des enfants. Lumineux, sécurisé et aménagé avec soin, il accueille
              petits jeux, coins lecture, tapis d’éveil et moments de détente.
              Les enfants y évoluent librement dans un cadre rassurant et
              convivial, propice aux échanges, aux rires et aux découvertes.
              C’est un lieu de vie où chaque jour se construit dans la douceur
              et la bienveillance.
            </p>
            <img
              className="img-fluid rounded-3 col-12 col-lg-8 mx-auto d-flex zoomable-img"
              src={salon}
              alt="Image du salon"
              onClick={() => handleZoom(salon)}
            />
          </div>

          <div className="my-5 text-center">
            <h2>Une chambre douce et reposante pour les petits</h2>
            <p className="text-justify my-5">
              La chambre réservée aux enfants accueillis est un cocon calme et
              apaisant, spécialement aménagé pour favoriser le sommeil et le
              repos. Chaque enfant y dispose de son propre lit, dans un
              environnement sécurisé, propre et confortable. Les couleurs
              douces, la lumière tamisée et le silence respecté en font un lieu
              idéal pour les siestes et les temps calmes. Tout est pensé pour
              que les enfants s’y sentent en confiance, comme à la maison.
            </p>
            <Row className="gy-4 justify-content-center">
              {gallery.map((image, index) => (
                <Col
                  key={index}
                  xs={11}
                  md={6}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded-3 zoomable-img d-flex"
                    onClick={() => handleZoom(image.src)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>

      {/* ZOOMBOX */}
      {zoomedSrc && (
        <div className="lightbox" onClick={closeZoom}>
          <img src={zoomedSrc} alt="Image zoomée" className="lightbox-img" />
        </div>
      )}
    </>
  );
}

export default Rooms;
