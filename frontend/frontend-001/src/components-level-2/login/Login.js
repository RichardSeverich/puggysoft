import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import CommonMessage from "./../../components-level-1/CommonMessage";
import { handleLoginRequest, handleGetRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths";
import CommonLoading from "../../components-level-1/CommonLoading";
import CommonModal from "../../components-level-1/CommonModal";

import "./styles.css";

function Login () {
  const history = useHistory();
  const { value: valueUsername, onChange: onChangeUsername } = useInput("");
  const { value: valuePassword, onChange: onChangePassword } = useInput("");

  const params = useParams();
  const tenantParam = params.tenant ? params.tenant : null;

  const [tenantSelected, setTenantSelected] = useState(null);
  const [roleSelected, setRoleSelected] = useState(null);

  const [isModalTenantAndRoleVisible, setIsModalTenantAndRoleVisible] = useState(false);

  const [listOfTenants, setListOfTenants] = useState([]);
  const [listOfRoles, setlistOfRoles] = useState([]);

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
    setTenantSelected(null);
    setRoleSelected(null);
    const body = {
      username: valueUsername,
      password: valuePassword
    };
    handleLoginRequest("login", body, (responseAuth) => {
      if (responseAuth.status === 200) {
        window.sessionStorage.setItem("token", responseAuth.data.token);
        window.sessionStorage.setItem("username", responseAuth.data.username);
        setIsModalTenantAndRoleVisible(true);
        setLoading(false);
        handleGetRequest(`tenants-by-user?username=${valueUsername}`, (tenants) => {
          if (tenants.length > 0) {
            tenants.forEach(function (tenant) {
              if (tenant.shortName === tenantParam) setTenantSelected(tenantParam);
            });
            setListOfTenants(tenants);
          } else {
            setMessageTitle(i18n.errorMessages.errorTitle);
            setMessageText(i18n.errorMessages.userNoTenants);
            setIsMessageVisible(true);
          }
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
    if (tenantSelected) {
      setlistOfRoles([]);
      handleGetRequest(`roles/username-and-tenant?username=${valueUsername}&tenant=${tenantSelected}`, (roles) => {
        if (roles.length > 0) {
          setlistOfRoles(roles);
        } else {
          setlistOfRoles([]);
          // setMessageTitle(i18n.errorMessages.errorTitle);
          // setMessageText(i18n.errorMessages.userNoRoles);
          // setIsMessageVisible(true);
        }
      });
    }
  }, [tenantSelected, valueUsername]);

  const handleContinueLogin = () => {
    if (tenantSelected) {
      window.sessionStorage.setItem("tenant", tenantSelected);
      window.sessionStorage.setItem("role", roleSelected);
      history.push(enumPaths.DASHBOARD);
    }
  };

  if (loading === true) {
    return <CommonLoading />;
  }

  const bodyContent = <>
    <Form>
      {tenantParam === null &&
      <Form.Group className="mb-3" controlId="select-tenant">
        <Form.Label>{i18n.login.labelTenant}</Form.Label>
        <Form.Select
          onChange={(event) => {
            event.preventDefault();
            setTenantSelected(event.target.value);
          }}
          value={tenantSelected}
        >
          <option disabled={!!tenantSelected} value={null} key={"tenant" + -1}>{i18n.login.placeholderTenant}</option>
          {
            listOfTenants.map((tenantItem, index) => {
              return <option key={"tenant" + index} value={tenantItem.shortName}>{tenantItem.name}</option>;
            })
          }
        </Form.Select>
      </Form.Group>
      }
      <Form.Group className="mb-3" controlId="select-role">
        <Form.Label>{i18n.login.labelRol}</Form.Label>
        <Form.Select
          disabled={!tenantSelected}
          onChange={(event) => {
            event.preventDefault();
            setRoleSelected(event.target.value);
          }}
          value={roleSelected}
        >
          <option disabled={!!roleSelected} value={null} key={"role" + -1}>{i18n.login.placeholderRole}</option>
          {
            listOfRoles.map((roleItem, index) => {
              return <option key={"role-" + index} value={roleItem.name}>{roleItem.name}</option>;
            })
          }
        </Form.Select>
      </Form.Group>
    </Form>
  </>;

  const footerContent = <Button
    variant="primary"
    onClick={handleContinueLogin}
    disabled={!tenantSelected || !roleSelected}
  >
    {i18n.login.logiContinueButton}
  </Button>;

  return (
    <div className="puggysoft-login-form" >
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <CommonModal
        isVisible={isModalTenantAndRoleVisible}
        bodyContent={listOfTenants ? bodyContent : <CommonLoading />}
        footerContent={listOfTenants ? footerContent : ""}
        titleText={i18n.login.title}
        size="sm"
      />
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
