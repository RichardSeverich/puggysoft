import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import i18n from "../../i18n/i18n";

function UserDetails (props) {
  const routerProps = {};
  const userData = routerProps.data;

  // TODO: aca se tiene que hacer el llamado a la tabla de
  // relacion de hospital-doctor
  return (
    <div className="puggysoft-doctor-details">
      <Card>
        <Card.Header as='h3'>{"Detalle de usuarios"}</Card.Header>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>(This page is in progress doctor )</Card.Title>
          <ListGroup >
            <ListGroup.Item>{i18n.userTable.columnId} {userData.id}</ListGroup.Item>
            <ListGroup.Item>{i18n.userTable.columnUsername} {userData.username}</ListGroup.Item>
            <ListGroup.Item>{i18n.userTable.columnPassword} {userData.password}</ListGroup.Item>
            <ListGroup.Item>{i18n.userTable.columnName} {userData.name}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetails;
