import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Rooms.css";

const Rooms = () => {
  const [zoomedSrc, setZoomedSrc] = useState(null);

  const handleZoom = (src) => {
    setZoomedSrc(src);
  };

  const closeZoom = () => {
    setZoomedSrc(null);
  };

  return (
    <>
      <Container className="col-11 mx-auto">
        <Row className="mb-5">
          <h1 className="text-center my-5">Pièces de vie</h1>

          <div className="mb-5 text-center">
            <h2>Salon</h2>
            <p className="my-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              alias iste dolorum similique numquam unde...
            </p>
            <img
              className="img-fluid rounded-3 col-12 col-lg-8 mx-auto d-flex zoomable-img"
              src="https://www.sille-le-guillaume.fr/medias/2019/07/Resized_20190618_060806_5775.jpg"
              alt="Image du salon"
              onClick={() =>
                handleZoom(
                  "https://www.sille-le-guillaume.fr/medias/2019/07/Resized_20190618_060806_5775.jpg"
                )
              }
            />
          </div>

          <div className="mb-5 text-center">
            <h2>Chambre</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
            <img
              className="img-fluid rounded-3 col-12 col-lg-8 mx-auto d-flex zoomable-img"
              src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2018/09/13/node_448583/39729763/public/2018/09/13/B9716913696Z.1_20180913181512_000%2BGE5C1F5J9.1-0.jpg?itok=CEHEFqUj1536855332"
              alt="Image de la chambre consacrée aux enfants accueillis"
              onClick={() =>
                handleZoom(
                  "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2018/09/13/node_448583/39729763/public/2018/09/13/B9716913696Z.1_20180913181512_000%2BGE5C1F5J9.1-0.jpg?itok=CEHEFqUj1536855332"
                )
              }
            />
          </div>
        </Row>
      </Container>

      {/* Lightbox */}
      {zoomedSrc && (
        <div className="lightbox" onClick={closeZoom}>
          <img src={zoomedSrc} alt="Image zommée" className="lightbox-img" />
        </div>
      )}
    </>
  );
};

export default Rooms;
