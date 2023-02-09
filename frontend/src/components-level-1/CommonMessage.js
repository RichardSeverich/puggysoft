import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import i18n from "./../i18n/i18n";
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
    <Modal
      dialogClassName={"puggysoft-message-" + variant}
      show={isVisible}
      onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{titleText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
      <Modal.Footer>
        <Button variant={variant} onClick={handleClose}>
          {i18n.errorMessages.okButton}
        </Button>
      </Modal.Footer>
    </Modal>

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
