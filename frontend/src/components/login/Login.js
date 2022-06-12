import { useHistory } from "react-router";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import { handleLoginRequest } from "../../actions/HandleManager";

import "./styles.css"

function Login() {

  const history = useHistory();
  const { value: valueUsername, onChange: onChangeUsername, reset: resetUsername } = useInput("");
  const { value: valuePassword, onChange: onChangePassword, reset: resetPassword } = useInput("");

  const handleLogin = () => {
    const body = {
      username: valueUsername,
      password: valuePassword
    }
    handleLoginRequest("login", body, (response) => {
      if (response.status == 200) {
        window.sessionStorage.setItem("token", response.data.token);
        window.sessionStorage.setItem("username", response.data.username);
        history.push("/dashboard");
      }
    });
  }

  return (
    <div className="puggysoft-login-form" >
      <Card>
        <Card.Title><img src="/logo192.png" className="app-logo" alt="logo" /></Card.Title>
        <Card.Title>{i18n.login.title}</Card.Title>
        <Card.Body>
          <Form>
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
              onClick={handleLogin}
              variant="primary"
              type="button">{i18n.login.loginButton}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login;
