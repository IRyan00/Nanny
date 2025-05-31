import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../../components/Profile/Profile.jsx";
import Rooms from "../../components/Rooms/Rooms.jsx";

import { Container, Row, Col } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  useEffect(() => {
    document.title = "À propos";
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/profile/get`, {
          headers: getAuthHeaders(),
        });

        if (response.data && response.data.profiles) {
          setProfiles(response.data.profiles);
        } else {
          console.error("Format de réponse invalide: ", response.data);
          setProfiles([]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {profiles.map((profiles) => (
            <Col key={profiles._id}>
              <Profile profiles={profiles} />
            </Col>
          ))}
        </Row>
        <hr className="col-11 mx-auto" />
        <Row className="justify-content-center">
          <Rooms />
        </Row>
      </Container>
    </>
  );
};

export default Profiles;
