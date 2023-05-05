import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import i18n from "../i18n/i18n";
import "./common-Message.css";

function CommonMessage ({
  isVisible,
  setIsVisible,
  titleText,
  bodyText,
  variant
}) {
  const handleClose = () => setIsVisible(false);
  return (
    <>
      <Modal show={isVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommonMessage;

CommonMessage.propTypes = {
  isVisible: PropTypes.bool,
  titleText: PropTypes.string,
  bodyText: PropTypes.string,
  setIsVisible: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "info",
    "light",
    "dark",
    "danger"
  ])
};

CommonMessage.defaultProps = {
  isVisible: false,
  titleText: "",
  bodyText: "",
  setIsVisible: () => {},
  variant: "primary"
};
