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
import { SquarePen, Save, Ban } from "lucide-react";

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
    if (
      // !editProfile.name ||
      !editProfile.p1 ||
      !editProfile.p2 ||
      !editProfile.p3 ||
      !editProfile.p4 ||
      !editProfile.p5 ||
      !editProfile.p6 ||
      !editProfile.p7 ||
      !editProfile.school
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    const formData = new FormData();
    // formData.append("name", editProfile.name);
    formData.append("p1", editProfile.p1);
    formData.append("p2", editProfile.p2);
    formData.append("p3", editProfile.p3);
    formData.append("p4", editProfile.p4);
    formData.append("p5", editProfile.p5);
    formData.append("p6", editProfile.p6);
    formData.append("p7", editProfile.p7);
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
        <ListGroup variant="flush" className="my-5 rounded-3">
          {profile.map((profile) => (
            <ListGroup.Item
              key={profile._id}
              id="profile"
              className="py-3 px-0"
            >
              {editProfile && editProfile._id === profile._id ? (
                <Row className="align-items-center">
                  <Col>
                    <Form onSubmit={updateProfile}>
                      {/* <Form.Group className="mb-2 shadow">
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
                      </Form.Group> */}
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p1}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p1: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p2}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p2: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p3}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p3: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p4}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p4: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p5}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p5: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p6}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p6: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-2 shadow">
                        <Form.Control
                          as="textarea"
                          type="text"
                          id="textarea"
                          value={editProfile.p7}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              p7: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Control
                        className="mb-2 shadow"
                        value={editProfile.school}
                        onChange={(e) =>
                          setEditProfile({
                            ...editProfile,
                            school: e.target.value,
                          })
                        }
                      ></Form.Control>
                      <Form.Control
                        className="shadow"
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
                          aria-label="Enregistrer les modifications"
                          id="modif"
                          className="mt-3 d-flex justify-content-center align-items-center shadow"
                        >
                          <Save size={17} className="me-1" />
                          Enregistrer
                        </Button>
                        <Button
                          variant="secondary"
                          aria-label="Annuler les modifications"
                          className="mt-3 mx-2 d-flex justify-content-center align-items-center shadow"
                          onClick={() => setEditProfile(null)}
                        >
                          <Ban size={17} className="me-1" />
                          Annuler
                        </Button>
                      </Container>
                    </Form>
                  </Col>
                </Row>
              ) : (
                <Row className="align-items-center col-11 mx-auto ">
                  {/* <h3 className="h3 text-center my-5">{profile.name}</h3> */}
                  <Image
                    fluid
                    src={profile.image}
                    alt={profile.name}
                    className="rounded col-11 col-sm-9 col-md-7 col-lg-5 mx-auto px-0"
                  />
                  <Container className="text-justify">
                    <p className="mt-5 px-0">{profile.p1}</p>
                    <p className="px-0">{profile.p2}</p>
                    <p className="px-0">{profile.p3}</p>
                    <p className="px-0">{profile.p4}</p>
                    <p className="px-0">{profile.p5}</p>
                    <p className="px-0">{profile.p6}</p>
                    <p className="mb-5 px-0">{profile.p7}</p>
                  </Container>

                  <p className="text-center">{profile.school}</p>
                  <div className="my-5 d-flex flex-column gap-2 justify-content-center">
                    <Button
                      id="modif"
                      aria-label="Modifier le profile"
                      className="col-5 mx-auto d-flex justify-content-center align-items-center shadow col-8 col-sm-6 col-md-4 col-lg-2"
                      onClick={() => setEditProfile(profile)}
                    >
                      <SquarePen size={17} className="me-1" /> Modifier
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
