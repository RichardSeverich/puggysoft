import React, { useState } from "react";
import PropTypes from "prop-types";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function CommonToast ({
  isToastsVisible,
  headerLabel,
  headerSecondaryLabel,
  bodyLabel,
  variant,
  position
}) {
  const [show, setShow] = useState(isToastsVisible);
  return (
    <ToastContainer
      className="p-3"
      position={position}
    >
      <Toast
        autohid
        delay={3000}
        onClose={() => setShow(false)}
        show={show}
        bg={variant}
      >
        <Toast.Header>
          <img src="" className="rounded me-2" alt="" />
          <strong className="me-auto">{headerLabel}</strong>
          <small>{headerSecondaryLabel}</small>
        </Toast.Header>
        <Toast.Body>{bodyLabel}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CommonToast;

CommonToast.propTypes = {
  isToastsVisible: PropTypes.bool,
  headerLabel: PropTypes.string,
  headerSecondaryLabel: PropTypes.string,
  bodyLabel: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ]),
  position: PropTypes.oneOf([
    "top-start",
    "top-center",
    "top-end",
    "middle-start",
    "middle-center",
    "middle-end",
    "bottom-start",
    "bottom-center",
    "bottom-end"
  ])
};

CommonToast.defaultProps = {
  isToastsVisible: false,
  headerLabel: "",
  headerSecondaryLabel: "",
  bodyLabel: "",
  variant: "light",
  position: "top-center"
};
