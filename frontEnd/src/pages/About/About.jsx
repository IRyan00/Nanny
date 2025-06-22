import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../../components/Profile/Profile.jsx";
import Rooms from "../../components/Rooms/Rooms.jsx";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "À propos";

    const fetchProfiles = async () => {
      try {
        const loadingToastId = toast.info(
          "Chargement des informations en cours...",
          {
            theme: "light",
            position: "bottom-left",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );

        setIsLoading(true);
        const response = await api.get(`${API_URL}/api/profile/get`);

        if (response.data && response.data.profiles) {
          setProfiles(response.data.profiles);
          toast.dismiss(loadingToastId);
        } else {
          console.error("Format de réponse invalide:", response.data);
          setProfiles([]);
          toast.dismiss(loadingToastId);
          toast.error("Erreur: Format de réponse invalide", {
            theme: "light",
            position: "bottom-left",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations:",
          error
        );
        setProfiles([]);
        toast.error(
          `Erreur lors du chargement des informations: ${error.message}`,
          {
            theme: "light",
            position: "bottom-left",
            autoClose: 5000,
          }
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <ToastContainer />
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <Spinner animation="border" role="status" className="spinner">
              <span className="visually-hidden">Chargement...</span>
            </Spinner>
          </div>
        ) : (
          <Container>
            <Row className="justify-content-center">
              {profiles.map((profile) => (
                <Col key={profile._id}>
                  <Profile profiles={profile} />
                </Col>
              ))}
            </Row>
            <hr className="col-11 mx-auto" />
            <Row className="justify-content-center">
              <Rooms />
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default Profiles;
