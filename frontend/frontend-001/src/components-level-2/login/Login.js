import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import CommonMessage from "./../../components-level-1/CommonMessage";
import { handleLoginRequest, handleGetRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths";
import CommonLoading from "../../components-level-1/CommonLoading";
import CommonModalForm from "../../components-level-1/CommonModalForm";

import "./styles.css";

function Login () {
  const history = useHistory();
  const { value: valueUsername, onChange: onChangeUsername } = useInput("");
  const { value: valuePassword, onChange: onChangePassword } = useInput("");
  const [isValidCredentials, setIsValidCredentials] = useState(false);
  const routerProps = history && history.location && history.location.state;
  // Message states.
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  const [loading, setLoading] = useState(false);

  if (routerProps && routerProps.logout) {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("roles");
    window.sessionStorage.clear();
  }

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    const body = {
      username: valueUsername,
      password: valuePassword
    };
    handleLoginRequest("login", body, (responseAuth) => {
      if (responseAuth.status === 200) {
        window.sessionStorage.setItem("token", responseAuth.data.token);
        window.sessionStorage.setItem("username", responseAuth.data.username);
        window.sessionStorage.setItem("tenant", "EMPRESA_1");
        handleGetRequest(`roles/user-username/${valueUsername}`, (roles) => {
          if (roles.length > 0) {
            window.sessionStorage.setItem("roles", JSON.stringify(roles));
            setIsValidCredentials(true);
          } else {
            setMessageTitle(i18n.errorMessages.errorTitle);
            setMessageText(i18n.errorMessages.userNoRoles);
            setIsMessageVisible(true);
          }
          setLoading(false);
        });
      } else {
        setLoading(false);
        setMessageTitle(i18n.errorMessages.errorTitle);
        if (responseAuth.status === 400 || responseAuth.status === 404) setMessageText(i18n.errorMessages.invalidCredentials);
        else setMessageText(i18n.errorMessages.unknownError);
        setIsMessageVisible(true);
      }
    });
  };

  useEffect(() => {
    if (isValidCredentials) {
      history.push(enumPaths.DASHBOARD);
    }
  }, [isValidCredentials]);

  if (loading === true) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-login-form" >
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <CommonModalForm/>
      <Card>
        <Card.Header as='h3'>{i18n.login.title}</Card.Header>
        {/* <Card.Title><img src="/logo192.png" className="app-logo" alt="logo" /></Card.Title> */}
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{i18n.login.labelUsername}</Form.Label>
              <Form.Control
                value={valueUsername}
                onChange={onChangeUsername}
                type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{i18n.login.labelPassword}</Form.Label>
              <Form.Control
                value={valuePassword}
                onChange={onChangePassword}
                type="password"
                placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button
              variant="primary"
              type="submit">{i18n.login.loginButton}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
