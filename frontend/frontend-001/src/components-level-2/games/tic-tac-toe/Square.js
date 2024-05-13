import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/esm/Button";
import "./Square.css";

function Square ({ value, onSquareClick }) {
  let variant = "info";
  if (value === "X") {
    variant = "danger";
  } else if (value === "O") {
    variant = "success";
  } else {
    value = "--";
  }

  return (
    <Button className="square" size="lg" variant={variant} onClick={onSquareClick}>
      {value}
    </Button>
  );
}

export default Square;

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func
};

Square.defaultProps = {
  value: "",
  onSquareClick: () => { }
};
