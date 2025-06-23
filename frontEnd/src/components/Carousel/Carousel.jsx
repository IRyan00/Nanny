import { Carousel, Container } from "react-bootstrap";
import img1 from "../../assets/carouselImg/img1.webp";
import img2 from "../../assets/carouselImg/img2.webp";
import img3 from "../../assets/carouselImg/img3.webp";

const CarouselPage = () => {
  return (
    <Container fluid className="index px-0 carousel-background">
      <Carousel fade indicators={true} className="bg-dark shadow">
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src={img1}
              alt="Première image du carousel"
              style={{
                height: "70vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src={img2}
              alt="Deuxième image du carousel"
              style={{
                height: "70vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100 carousel-image"
              src={img3}
              alt="Troisième image du carousel"
              style={{
                height: "70vh",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)",
              }}
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselPage;
