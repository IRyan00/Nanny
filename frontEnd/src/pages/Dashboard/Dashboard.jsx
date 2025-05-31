import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Image,
} from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [profile, setProfile] = useState([]);
  const [editProfile, setEditProfile] = useState(null);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
  };

  useEffect(() => {
    document.title = "Dashboard";

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/profile/get`, {
          headers: getAuthHeaders(),
        });

        if (response.data && response.data.profiles) {
          setProfile(response.data.profiles);
        } else {
          console.error("Format de réponse invalide: ", response.data);
          setProfile([]);
        }
      } catch (err) {
        console.error("Detailed error:", {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
        });
        setProfile([]);
      }
    };

    fetchProfile();
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();
    if (!editProfile.name || !editProfile.desc || !editProfile.school) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    const formData = new FormData();
    formData.append("name", editProfile.name);
    formData.append("desc", editProfile.desc);
    formData.append("school", editProfile.school);

    if (editProfile.imageFile) {
      formData.append("imageFile", editProfile.imageFile);
    }

    if (editProfile.public_id) {
      formData.append("public_id", editProfile.public_id);
    }

    try {
      const response = await axios.put(
        `${API_URL}/api/profile/update/${editProfile._id}`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
          },
        }
      );

      const updatedProfile = profile.map((profile) =>
        profile._id === response.data.profile._id
          ? response.data.profile
          : profile
      );
      setProfile(updatedProfile);
      setEditProfile(null);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-center py-5">Administration</h1>
        <h2 className="text-center h4 mb-4">Modifier mon profil</h2>
        <ListGroup variant="flush" className="my-5 shadow rounded-3">
          {profile.map((profile) => (
            <ListGroup.Item key={profile._id} id="profile" className="p-3">
              {editProfile && editProfile._id === profile._id ? (
                <Row className="align-items-center">
                  <Col>
                    <Form onSubmit={updateProfile}>
                      <Form.Group className="mb-2">
                        <Form.Control
                          type="text"
                          value={editProfile.name}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              name: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.desc}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              desc: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Control
                        className="mb-2"
                        value={editProfile.school}
                        onChange={(e) =>
                          setEditProfile({
                            ...editProfile,
                            school: e.target.value,
                          })
                        }
                      ></Form.Control>
                      <Form.Control
                        type="file"
                        onChange={(e) =>
                          setEditProfile({
                            ...editProfile,
                            imageFile: e.target.files[0],
                          })
                        }
                      />
                      <Container className="d-flex justify-content-end">
                        <Button
                          type="submit"
                          variant="success"
                          className="mt-3"
                        >
                          Enregistrer
                        </Button>
                        <Button
                          variant="secondary"
                          className="mt-3 mx-2"
                          onClick={() => setEditProfile(null)}
                        >
                          Annuler
                        </Button>
                      </Container>
                    </Form>
                  </Col>
                </Row>
              ) : (
                <Row className="align-items-center col-11 mx-auto ">
                  <h3 className="h3 text-center my-5">{profile.name}</h3>
                  <Image
                    fluid
                    src={profile.image}
                    alt={profile.name}
                    className="rounded col-11 col-sm-9 col-md-7 col-lg-5 mx-auto"
                  />
                  <p className="text-center my-5">{profile.desc}</p>

                  <p>Diplômes et formations : {profile.school}</p>
                  <div className="my-5 d-flex flex-column gap-2 justify-content-center">
                    <Button
                      id="modif"
                      className="col-5 mx-auto"
                      onClick={() => setEditProfile(profile)}
                    >
                      Modifier
                    </Button>
                  </div>
                </Row>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default Dashboard;
