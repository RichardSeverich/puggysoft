import React, { useState } from "react";
import { useHistory } from "react-router";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import enumSex from "./../../models/users/enumSex"
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";

import "./user-form-styles.css"

function UserForm() {

  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
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
  let age = isEdit ? isEdit.data.age : "";
  let sex = isEdit ? isEdit.data.sex : enumSex.MALE;
  let occupation = isEdit ? isEdit.data.occupation : "";
  let telephone = isEdit ? isEdit.data.telephone : "";
  let address = isEdit ? isEdit.data.address : "";
  let email = isEdit ? isEdit.data.email : "";
  let status = isEdit ? isEdit.data.status : true;

  // Use custom hook
  const { value: valueUsername, onChange: onChangeUsername, setValue: setUsername } = useInput(username);
  const { value: valuePassword, onChange: onChangePassword, setValue: setPassword } = useInput(password);
  const { value: valueDni, onChange: onChangeDni, setValue: setDni } = useInput(dni);
  const { value: valueName, onChange: onChangeName, setValue: setName } = useInput(name);
  const { value: valueSecondName, onChange: onChangeSecondName, setValue: setSecondName } = useInput(secondName);
  const { value: valueLastName, onChange: onChangeLastName, setValue: setLastName } = useInput(lastName);
  const { value: valueSecondLastName, onChange: onChangeSecondLastName, setValue: setSecondLastName } = useInput(secondLastName);
  const { value: valueBirthDate, onChange: onChangeBirthDate, setValue: setBirthDate } = useInput(birthDate);
  const { value: valueAge, onChange: onChangeAge, setValue: setAge } = useInput(age);
  const { value: valueSex, onChange: onChangeSex, setValue: setSex } = useInput(sex);
  const { value: valueOccupation, onChange: onChangeOccupation, setValue: setOccupation } = useInput(occupation);
  const { value: valueTelephone, onChange: onChangeTelephone, setValue: setTelephone } = useInput(telephone);
  const { value: valueAddress, onChange: onChangeAddress, setValue: setAddress } = useInput(address);
  const { value: valueEmail, onChange: onChangeEmail, setValue: setEmail } = useInput(email);
  const { value: valueStatus, onChange: onChangeStatus, setValue: setStatus } = useInput(status);

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setDni('');
    setName('');
    setSecondName('');
    setLastName('');
    setSecondLastName('');
    setBirthDate('');
    setAge('');
    setSex(enumSex.MALE);
    setOccupation('');
    setTelephone('');
    setAddress('');
    setEmail('');
    setStatus(true);
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
      age: valueAge,
      sex: valueSex,
      occupation: valueOccupation,
      birthDate: valueBirthDate,
      telephone: valueTelephone,
      address: valueAddress,
      email: valueEmail,
      active: valueStatus,
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
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>{i18n.userForm.fieldAge}</Form.Label>
              <Form.Control
                onChange={onChangeAge}
                value={valueAge}
                type="number"
                placeholder={i18n.userForm.fieldAge} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sex">
              <Form.Label>{i18n.userForm.fieldSex}</Form.Label>
              <Form.Select
                onChange={onChangeSex}
                value={valueSex} >
                <option key='option-male' value={enumSex.MALE}>{i18n.userSexText.male}</option>
                <option key='option-female' value={enumSex.FEMALE}>{i18n.userSexText.female}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="occupation">
              <Form.Label>{i18n.userForm.fieldOccupation}</Form.Label>
              <Form.Control
                onChange={onChangeOccupation}
                value={valueOccupation}
                type="text"
                placeholder={i18n.userForm.fieldOccupation} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telephone">
              <Form.Label>{i18n.userForm.fieldTelephone}</Form.Label>
              <Form.Control
                onChange={onChangeTelephone}
                value={valueTelephone}
                type="number"
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
            <Form.Group className="mb-3" controlId="active">
              <Form.Label>{i18n.userForm.fieldStatus}</Form.Label>
              <Form.Select
                onChange={onChangeStatus}
                value={valueStatus} >
                <option key='option-true' value={true}>{i18n.userStatus.active}</option>
                <option key='option-false' value={false}>{i18n.userStatus.inactive}</option>
              </Form.Select>
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
