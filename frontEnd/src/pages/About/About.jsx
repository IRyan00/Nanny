import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../../components/Profile/Profile.jsx";
import Rooms from "../../components/Rooms/Rooms.jsx";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL;

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // useEffect(() => {
  //   document.title = "À propos";

  //   const fetchProfiles = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/api/profile/get`, {
  //         headers: getAuthHeaders(),
  //       });

  //       if (response.data && response.data.profiles) {
  //         setProfiles(response.data.profiles);
  //       } else {
  //         console.error("Format de réponse invalide: ", response.data);
  //         setProfiles([]);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchProfiles();
  // }, []);

  useEffect(() => {
    document.title = "À propos";

    const fetchProfiles = async () => {
      try {
        // Afficher la notif de loading
        const loadingToastId = toast.info("Loading skills in progress...", {
          theme: "light",
          position: "bottom-left",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setIsLoading(true);
        const response = await axios.get(`${API_URL}/api/profile/get`, {
          headers: getAuthHeaders(),
        });

        if (response.data && response.data.profiles) {
          setProfiles(response.data.profiles);

          // Fermer la notif de loading
          toast.dismiss(loadingToastId);
        } else {
          console.error("Invalid response format:", response.data);
          setProfiles([]);

          // Fermer la notif de loading
          toast.dismiss(loadingToastId);

          // Afficher une notif d'erreur
          toast.error("Error: Invalid response format", {
            theme: "light",
            position: "bottom-left",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Error when retrieving skills:", error);
        setProfiles([]);

        // Afficher une notif d'erreur
        toast.error(`Error loading skills: ${error.message}`, {
          theme: "light",
          position: "bottom-left",
          autoClose: 5000,
        });
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
