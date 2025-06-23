import { useEffect } from "react";
import { Container, Row, Badge } from "react-bootstrap";
import "./Profile.css";

const Profiles = ({ profiles }) => {
  const schools = Array.isArray(profiles.school)
    ? profiles.school
    : typeof profiles.school === "string"
    ? profiles.school.split(",")
    : [];

  useEffect(() => {}, [profiles]);

  return (
    <>
      <Container className="col-11 mx-auto">
        <Row>
          <>
            <h1 className="h1 text-center my-5" key={profiles.id}>
              {profiles.name}
            </h1>
            <img
              className="img-fluid col-11 col-sm-9 col-md-7 col-lg-5 mx-auto"
              src={profiles.image}
              alt={profiles.name}
            />

            <Container className="text-justify">
              <p className="mt-5" key={profiles.id}>
                {profiles.p1}
              </p>
              <p key={profiles.id}>{profiles.p2}</p>
              <p key={profiles.id}>{profiles.p3}</p>
              <p key={profiles.id}>{profiles.p4}</p>
              <p key={profiles.id}>{profiles.p5}</p>
              <p key={profiles.id}>{profiles.p6}</p>
              <p className="mb-5" key={profiles.id}>
                {profiles.p7}
              </p>
            </Container>

            <Container className="mb-5 text-center">
              {schools.map((diploma, index) => (
                <Badge key={index} className="badge-custom m-2 p-2 fs-6">
                  {diploma.trim()}
                </Badge>
              ))}
            </Container>
          </>
        </Row>
      </Container>
    </>
  );
};

export default Profiles;
