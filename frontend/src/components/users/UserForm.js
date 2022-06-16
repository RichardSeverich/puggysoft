import React, { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";

import "./user-form-styles.css"

function UserForm(props) {

  //const [isEdit, setIsEdit] = useState(props.location.state);
  const isEditDefaultValue = props && props.location && props.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);

  // Put default values:
  let id = isEdit ? isEdit.data.id : "";
  let username = isEdit ? isEdit.data.username : "";
  let password = isEdit ? isEdit.data.password : "";
  let dni = isEdit ? isEdit.data.dni : "";
  let name = isEdit ? isEdit.data.name : "";
  let secondName = isEdit ? isEdit.data.secondName : "";
  let lastName = isEdit ? isEdit.data.lastName : "";
  let secondLastName = isEdit ? isEdit.data.secondLastName : "";
  let birthDate = isEdit ? isEdit.data.birthDate : "";
  let telephone = isEdit ? isEdit.data.telephone : "";
  let address = isEdit ? isEdit.data.address : "";
  let email = isEdit ? isEdit.data.email : "";

  // Use custom hook
  const { value: valueUsername, onChange: onChangeUsername, reset: resetUsername } = useInput(username);
  const { value: valuePassword, onChange: onChangePassword, reset: resetPassword } = useInput(password);
  const { value: valueDni, onChange: onChangeDni, reset: resetDni } = useInput(dni);
  const { value: valueName, onChange: onChangeName, reset: resetName } = useInput(name);
  const { value: valueSecondName, onChange: onChangeSecondName, reset: resetSecondName } = useInput(secondName);
  const { value: valueLastName, onChange: onChangeLastName, reset: resetLastName } = useInput(lastName);
  const { value: valueSecondLastName, onChange: onChangeSecondLastName, reset: resetSecondLastName } = useInput(secondLastName);
  const { value: valueBirthDate, onChange: onChangeBirthDate, reset: resetBirthDate } = useInput(birthDate);
  const { value: valueTelephone, onChange: onChangeTelephone, reset: resetTelephone } = useInput(telephone);
  const { value: valueAddress, onChange: onChangeAddress, reset: resetAddress } = useInput(address);
  const { value: valueEmail, onChange: onChangeEmail, reset: resetEmail } = useInput(email);

  const handleReset = () => {
    resetUsername();
    resetPassword();
    resetName();
    resetSecondName();
    resetLastName();
    resetSecondLastName();
    resetBirthDate();
    resetTelephone();
    resetAddress();
    resetEmail();
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const username = window.sessionStorage.getItem("username");
    const body = {
      username: valueUsername,
      password: valuePassword,
      dni: valueDni,
      name: valueName,
      secondName: valueSecondName,
      lastName: valueLastName,
      secondLastName: valueSecondLastName,
      birthDate: valueBirthDate,
      telephone: valueTelephone,
      address: valueAddress,
      email: valueEmail,
      createdBy: username,
      updatedBy: username,
    }
    handleReset()
    if (isEdit) {
      handleEditRequest("users/", body, id, handleReset, setIsEdit)
    } else {
      handleAddRequest("users/", body, handleReset);
    }
  }

  return (
    <div className="puggysoft-user-form" >
      <Card>
        <Card.Title>{i18n.userForm.title}</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>{i18n.userForm.fieldUsername}</Form.Label>
              <Form.Control
                onChange={onChangeUsername}
                value={valueUsername}
                type="text"
                placeholder={i18n.userForm.fieldUsername} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>{i18n.userForm.fieldPassword}</Form.Label>
              <Form.Control
                onChange={onChangePassword}
                value={valuePassword}
                type="password"
                placeholder={i18n.userForm.fieldPassword} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dni">
              <Form.Label>{i18n.userForm.fieldDni}</Form.Label>
              <Form.Control
                onChange={onChangeDni}
                value={valueDni}
                type="text"
                placeholder={i18n.userForm.fieldDni} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{i18n.userForm.fieldName}</Form.Label>
              <Form.Control
                onChange={onChangeName}
                value={valueName}
                type="text"
                placeholder={i18n.userForm.fieldName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="second-name">
              <Form.Label>{i18n.userForm.fieldSecondName}</Form.Label>
              <Form.Control
                onChange={onChangeSecondName}
                value={valueSecondName}
                type="text"
                placeholder={i18n.userForm.fieldSecondName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>{i18n.userForm.fieldLastName}</Form.Label>
              <Form.Control
                onChange={onChangeLastName}
                value={valueLastName}
                type="text"
                placeholder={i18n.userForm.fieldLastName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="second-lastname">
              <Form.Label>{i18n.userForm.fieldSecondLastName}</Form.Label>
              <Form.Control
                onChange={onChangeSecondLastName}
                value={valueSecondLastName}
                type="text"
                placeholder={i18n.userForm.fieldSecondLastName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="birthdate">
              <Form.Label>{i18n.userForm.fieldBirthDate}</Form.Label>
              <Form.Control
                onChange={onChangeBirthDate}
                value={valueBirthDate}
                type="date"
                placeholder={i18n.userForm.fieldBirthDate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telephone">
              <Form.Label>{i18n.userForm.fieldTelephone}</Form.Label>
              <Form.Control
                onChange={onChangeTelephone}
                value={valueTelephone}
                type="date"
                placeholder={i18n.userForm.fieldTelephone} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>{i18n.userForm.fieldAddress}</Form.Label>
              <Form.Control
                onChange={onChangeAddress}
                value={valueAddress}
                type="text"
                placeholder={i18n.userForm.fieldAddress} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>{i18n.userForm.fieldEmail}</Form.Label>
              <Form.Control
                onChange={onChangeEmail}
                value={valueEmail}
                type="email"
                placeholder={i18n.userForm.fieldEmail} />
            </Form.Group>
            <Button
              onClick={handleAdd}
              variant="primary"
              type="button">{i18n.userForm.buttonAdd}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserForm;
