import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";

import "./styles.css"

function Login() {
  return (
    <div className="puggysoft-login-form" >
      <Card>
        <Card.Title><img src="/logo192.png" className="app-logo" alt="logo" /></Card.Title>
        <Card.Title>{i18n.login.title}</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{i18n.login.labelUsername}</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{i18n.login.labelPassword}</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="button">Entrar</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login;
