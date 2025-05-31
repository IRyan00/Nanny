import React, { useState } from "react";
import { Button, Alert, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";

const API_URL = import.meta.env.VITE_API_URL;

function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", message: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addReview = async (data) => {
    const formData = new FormData();
    formData.append("name", newReview.name);
    formData.append("message", newReview.message);

    try {
      const response = await axios.post(`${API_URL}/api/review/create`, data);
      if (response.data) {
        window.location.reload();
      }
      setNewReview({
        name: "",
        message: "",
      });
      handleClose();
    } catch (error) {
      console.error("error creating new review", error);
    }
  };

  return (
    <>
      <Button className="bg-success mt-5 border-0" onClick={handleShow}>
        Ajouter un commentaire
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un commentaire</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mt-2">
          <Form onSubmit={handleSubmit(addReview)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prenom N."
                autoFocus
                {...register("name", { required: true })}
                isInvalid={!!errors.name}
              />
              <p
                className={`text-${
                  errors.name ? "danger" : "muted"
                } fst-italic mb-5`}
              >
                * Le nom est unique et doit contenir entre 2 et 20 caractères.
              </p>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("message", { required: true })}
                isInvalid={!!errors.message}
              />
              <p
                className={`text-${
                  errors.message ? "danger" : "muted"
                } fst-italic`}
              >
                * Le message doit contenir entre 10 et 500 caractères.
              </p>
            </Form.Group>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Ajouter
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Annuler
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
