import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import i18n from "../../i18n/i18n";

function UserDetails(props) {

  const history = useHistory();
  const routerProps = history && history.location && history.location.state;
  const userData = routerProps.data;
  // TODO:
  return (
    <div className="puggysoft-user-details">
      <Card>
        <Card.Header as='h3'>{"Detalle de usuarios"}</Card.Header>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>(This page is in progress)</Card.Title>
          <ListGroup >
            <ListGroup.Item>{i18n.userTable.columnId} {userData.id}</ListGroup.Item>
            <ListGroup.Item>{i18n.userTable.columnUsername} {userData.username}</ListGroup.Item>
            <ListGroup.Item>{i18n.userTable.columnPassword} {userData.password}</ListGroup.Item>
            <ListGroup.Item>{i18n.userTable.columnName} {userData.name}</ListGroup.Item>
          </ListGroup>
          {props.children}
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetails;
