import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import enumSex from "./../../models/users/enumSex"
import { handleAddRequest, handleEditRequest } from "../../actions/HandleManager";
import { handleValidation, classNameFormTextNew } from "./../../validations/users/HandleUserFormValidations"
import enumRoles from "./../../models/users/enumRoles"

import "./user-form-styles.css"

function UserForm(props) {

  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const { userRole } = props;

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

  const handleAfterAdd = function (newUserId) {
    console.log("THIS IS THE NEW USER ID : " + newUserId);
    handleReset();
    // ******* SALE SYSTEM *******
    if (userRole && userRole === enumRoles.SALES_CLIENT) {
      // Navigate to client form.
    } else if (userRole && userRole === enumRoles.SALES_SELLER) {
      // Navigate to seller form.
      // ******* HOSPITAL SYSTEM *******
    } else if (userRole && userRole === enumRoles.HOSPITAL_DOCTOR) {
      // Navigate to doctor form.
    } else if (userRole && userRole === enumRoles.HOSPITAL_PATIENT) {
      // Navigate to patient form.
    }
  }

  const getBody = function () {
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
    return body;
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    let isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      if (isEdit) {
        handleEditRequest("users/", body, id, handleReset, setIsEdit)
      } else {
        handleAddRequest("users/", body, handleAfterAdd);
      }
    } else {
      alert(i18n.errorMessages.validationError);
    }
  }

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText)
  }, [valueUsername, valuePassword, valueDni, valueName, valueSecondName, valueLastName, valueSecondLastName, valueAge,
    valueSex, valueOccupation, valueBirthDate, valueTelephone, valueAddress, valueEmail, valueStatus]);

  const title = props && props.title ? props.title : i18n.userForm.title;

  return (
    <div className="puggysoft-user-form" >
      <Card>
        <Card.Header as='h3'>{title}</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>{i18n.userForm.fieldUsername}</Form.Label>
              <Form.Control
                onChange={onChangeUsername}
                value={valueUsername}
                type="text"
                placeholder={i18n.userForm.fieldUsername} />
              <Form.Text muted className={classNameFormText.username}>
                {i18n.userForm.formTextUsername}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>{i18n.userForm.fieldPassword}</Form.Label>
              <Form.Control
                onChange={onChangePassword}
                value={valuePassword}
                type="password"
                placeholder={i18n.userForm.fieldPassword} />
              <Form.Text muted className={classNameFormText.password}>
                {i18n.userForm.formTextPassword}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dni">
              <Form.Label>{i18n.userForm.fieldDni}</Form.Label>
              <Form.Control
                onChange={onChangeDni}
                value={valueDni}
                type="text"
                placeholder={i18n.userForm.fieldDni} />
              <Form.Text muted className={classNameFormText.dni}>
                {i18n.userForm.formTextDni}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{i18n.userForm.fieldName}</Form.Label>
              <Form.Control
                onChange={onChangeName}
                value={valueName}
                type="text"
                placeholder={i18n.userForm.fieldName} />
              <Form.Text muted className={classNameFormText.name}>
                {i18n.userForm.formTextFirstName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="second-name">
              <Form.Label>{i18n.userForm.fieldSecondName}</Form.Label>
              <Form.Control
                onChange={onChangeSecondName}
                value={valueSecondName}
                type="text"
                placeholder={i18n.userForm.fieldSecondName} />
              <Form.Text muted className={classNameFormText.secondName}>
                {i18n.userForm.formTextSecondName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>{i18n.userForm.fieldLastName}</Form.Label>
              <Form.Control
                onChange={onChangeLastName}
                value={valueLastName}
                type="text"
                placeholder={i18n.userForm.fieldLastName} />
              <Form.Text muted className={classNameFormText.lastName}>
                {i18n.userForm.formTextLastName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="second-lastname">
              <Form.Label>{i18n.userForm.fieldSecondLastName}</Form.Label>
              <Form.Control
                onChange={onChangeSecondLastName}
                value={valueSecondLastName}
                type="text"
                placeholder={i18n.userForm.fieldSecondLastName} />
              <Form.Text muted className={classNameFormText.secondLastName}>
                {i18n.userForm.formTextSecondLastName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="birthdate">
              <Form.Label>{i18n.userForm.fieldBirthDate}</Form.Label>
              <Form.Control
                onChange={onChangeBirthDate}
                value={valueBirthDate}
                type="date"
                placeholder={i18n.userForm.fieldBirthDate} />
              <Form.Text muted className={classNameFormText.birthDate}>
                {i18n.userForm.formTextBirthDate}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>{i18n.userForm.fieldAge}</Form.Label>
              <Form.Control
                onChange={onChangeAge}
                value={valueAge}
                type="number"
                placeholder={i18n.userForm.fieldAge} />
              <Form.Text muted className={classNameFormText.age}>
                {i18n.userForm.formTextAge}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="sex">
              <Form.Label>{i18n.userForm.fieldSex}</Form.Label>
              <Form.Select
                onChange={onChangeSex}
                value={valueSex} >
                <option key='option-male' value={enumSex.MALE}>{i18n.userSexText.male}</option>
                <option key='option-female' value={enumSex.FEMALE}>{i18n.userSexText.female}</option>
              </Form.Select>
              <Form.Text muted className={classNameFormText.sex}>
                {i18n.userForm.formTextSex}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="occupation">
              <Form.Label>{i18n.userForm.fieldOccupation}</Form.Label>
              <Form.Control
                onChange={onChangeOccupation}
                value={valueOccupation}
                type="text"
                placeholder={i18n.userForm.fieldOccupation} />
              <Form.Text muted className={classNameFormText.occupation}>
                {i18n.userForm.formTextOccupation}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telephone">
              <Form.Label>{i18n.userForm.fieldTelephone}</Form.Label>
              <Form.Control
                onChange={onChangeTelephone}
                value={valueTelephone}
                type="number"
                placeholder={i18n.userForm.fieldTelephone} />
              <Form.Text muted className={classNameFormText.telephone}>
                {i18n.userForm.formTextTelephone}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>{i18n.userForm.fieldAddress}</Form.Label>
              <Form.Control
                onChange={onChangeAddress}
                value={valueAddress}
                type="text"
                placeholder={i18n.userForm.fieldAddress} />
              <Form.Text muted className={classNameFormText.address}>
                {i18n.userForm.formTextAddress}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>{i18n.userForm.fieldEmail}</Form.Label>
              <Form.Control
                onChange={onChangeEmail}
                value={valueEmail}
                type="email"
                placeholder={i18n.userForm.fieldEmail} />
              <Form.Text muted className={classNameFormText.email}>
                {i18n.userForm.formTextEmail}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="active">
              <Form.Label>{i18n.userForm.fieldStatus}</Form.Label>
              <Form.Select
                onChange={onChangeStatus}
                value={valueStatus} >
                <option key='option-true' value={true}>{i18n.userStatus.active}</option>
                <option key='option-false' value={false}>{i18n.userStatus.inactive}</option>
              </Form.Select>
              <Form.Text muted className={classNameFormText.status}>
                {i18n.userForm.formTextStatus}
              </Form.Text>
            </Form.Group>
            <Button
              onClick={handleAdd}
              variant="primary"
              type="button">{i18n.userForm.buttonAdd}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div >
  )
}

export default UserForm;
