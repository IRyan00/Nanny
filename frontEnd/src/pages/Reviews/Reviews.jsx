import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ReviewModal from "../../components/ReviewModal/ReviewModal";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    document.title = "Témoignages";
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/review/get`
        );

        const sortedReviews = response.data.reviews.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setReviews(sortedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-5">Témoignages</h1>
      <p className="col-10 mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
        exercitationem quisquam consequatur accusamus eligendi dolore non. Id
        veniam aperiam harum quae, debitis quo, suscipit doloremque
        exercitationem similique voluptates molestias, eveniet totam consectetur
        quam animi cumque corporis. Praesentium, error minima. Quaerat
        temporibus mollitia quasi. Dolor quis corporis dolorem eius temporibus
        fugit.
      </p>
      <div className="d-flex justify-content-center">
        <ReviewModal />
      </div>

      <Row className="my-5 gap-5 justify-content-center">
        {reviews.map((review) => (
          <Col key={review._id} xs={9} md={9} lg={9} xl={9}>
            <Card className="mb-3 mh-100 border-0 shadow text-center rounded-3">
              <Card.Body>
                <Card.Title className="mb-3">{review.name}</Card.Title>
                <Card.Text>
                  <FaQuoteLeft className="mx-2" />
                  {review.message}
                  <FaQuoteRight className="mx-2" />
                </Card.Text>
                <hr className="col-10 mx-auto" />
                <Card.Text className="fw-lighter fst-italic">
                  {new Date(review.createdAt).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
