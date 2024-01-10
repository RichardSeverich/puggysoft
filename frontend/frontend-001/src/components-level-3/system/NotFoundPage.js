import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router";
import enumPaths from "./../../models/enumPaths";
import "./NotFoundPage.css";
import i18n from "./../../i18n/i18n";

function NotFoundPage () {
  const history = useHistory();
  return (
    <div className="not-found-page">
      <div className="not-found-page-title">{i18n.notFoundPage.title}</div>
      <div className="not-found-page-text">{i18n.notFoundPage.text}</div>
      <Button
        onClick={() => {
          history.push(enumPaths.LOGIN);
        }}
        variant="success"
        className="not-found-page-button"
      >
        {i18n.notFoundPage.button}
      </Button>
    </div>
  );
}

export default NotFoundPage;
