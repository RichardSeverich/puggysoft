import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import enumSex from "./../../models/users/enumSex";
import { handleAddRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import { handleValidation, classNameFormTextNew } from "./../../validations/users/HandleUserFormValidations";
import appUrlConfig from "./../../tools/appUrlConfig";
import CommonLoading from "./../../components-level-1/CommonLoading";
import CommonMessage from "./../../components-level-1/CommonMessage";

import "./../css/all-forms.css";
import "./user-form-styles.css";

function UserForm (props) {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const title = props && props.title ? props.title : i18n.userForm.title;
  const { beforeAdd, afterAdd, showMessageOnSuccess } = props;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");
  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const username = isEdit && isEdit.data.username !== null ? isEdit.data.username : "";
  const password = isEdit && isEdit.data.password !== null ? isEdit.data.password : "";
  const dni = isEdit && isEdit.data.dni !== null ? isEdit.data.dni : "";
  const name = isEdit && isEdit.data.name !== null ? isEdit.data.name : "";
  const secondName = isEdit && isEdit.data.secondName !== null ? isEdit.data.secondName : "";
  const lastName = isEdit && isEdit.data.lastName !== null ? isEdit.data.lastName : "";
  const secondLastName = isEdit && isEdit.data.secondLastName !== null ? isEdit.data.secondLastName : "";
  const birthDate = isEdit && isEdit.data.birthDate !== null ? isEdit.data.birthDate : "";
  const age = isEdit && isEdit.data.age !== null ? isEdit.data.age : "";
  let sex = enumSex.MALE;
  let status = true;
  let emailVerified = false;
  if (isEdit && isEdit.data && isEdit.data.sex !== null) {
    const userSex = isEdit.data.sex === i18n.userSexText.male ? enumSex.MALE : enumSex.FEMALE;
    const userStatus = isEdit.data.active === i18n.userStatus.active;
    const userEmailVerified = isEdit.data.emailVerified === i18n.userEmailVerified.verified;
    status = userStatus;
    sex = userSex;
    emailVerified = userEmailVerified;
  }
  const occupation = isEdit && isEdit.data.occupation !== null ? isEdit.data.occupation : "";
  const telephone = isEdit && isEdit.data.telephone !== null ? isEdit.data.telephone : "";
  const address = isEdit && isEdit.data.address !== null ? isEdit.data.address : "";
  const email = isEdit && isEdit.data.email !== null ? isEdit.data.email : "";

  // CONFIGURE IMAGE
  const fileName = "user-default.jpg";
  const imageUrlInit = `${appUrlConfig.PROTOCOL}//${appUrlConfig.HOSTNAME}:${appUrlConfig.PORT}/${fileName}`;
  let imageUrlInitAux = imageUrlInit;
  const userImage =
    isEdit &&
      isEdit.data &&
      isEdit.data.image &&
      isEdit.data.image !== null
      ? isEdit.data.image
      : null;
  if (userImage && userImage !== null) {
    if (userImage.includes("blob:")) {
      imageUrlInitAux = userImage;
    } else {
      imageUrlInitAux = `data:image/jpeg;base64, ${userImage}`;
    }
  }
  const { value: valuePictureToShow, setValue: setValuePictureToShow } = useInput(imageUrlInitAux);

  // Use custom hook
  const { value: valueUsername, onChange: onChangeUsername, setValue: setUsername } = useInput(username);
  const { value: valuePassword, onChange: onChangePassword, setValue: setPassword } = useInput(password);
  const { value: valuePasswordRepeat, onChange: onChangePasswordRepeat, setValue: setPasswordRepeat } = useInput(password);
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
  const { value: valuePicture, setValue: setPicture } = useInput(null);
  const { value: valuePicturePath, onChange: onChangePicturePath, setValue: setPicturePath } = useInput("");

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setPasswordRepeat("");
    setDni("");
    setName("");
    setSecondName("");
    setLastName("");
    setSecondLastName("");
    setBirthDate("");
    setAge("");
    setSex(enumSex.MALE);
    setOccupation("");
    setTelephone("");
    setAddress("");
    setEmail("");
    setPicture(null);
    setPicturePath("");
    setStatus(true);
    setValuePictureToShow(imageUrlInit);
  };

  const handleAfterAdd = function (newUserId) {
    handleAddImage(newUserId);
    handleReset();
    // afterAdd = add some role to new user.
    if (afterAdd) {
      const newUser = getBody();
      delete newUser.passwordRepead;
      newUser.id = newUserId;
      afterAdd(newUser);
    }
  };

  const handleAddImage = (userId) => {
    // const pictureFile = { ...valuePicture }
    if (valuePicture !== null) {
      handleAddFileRequest("users/picture/", valuePicture, userId, finishLoading, false, finishLoading);
    } else {
      finishLoading();
    }
  };

  const handleAfterEdit = function () {
    handleAddImage(id);
    handleReset();
    setIsEdit(undefined);
  };

  const getBody = function () {
    const username = window.sessionStorage.getItem("username");
    const body = {
      username: valueUsername,
      password: valuePassword,
      passwordRepead: valuePasswordRepeat,
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
      emailVerified,
      createdBy: username,
      updatedBy: username,
      image: null
    };
    if (userImage !== null) {
      body.image = userImage;
    }
    return body;
  };

  const isValidRepeatPassword = () => {
    return valuePassword === valuePasswordRepeat;
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    const isValidPassRepeat = isValidRepeatPassword();
    if (!isValid) {
      setMessageTitle(i18n.errorMessages.validationErrorTitle);
      setMessageText(i18n.errorMessages.validationError);
      setIsMessageVisible(true);
    } else if (!isValidPassRepeat) {
      setMessageTitle(i18n.errorMessages.validationErrorTitle);
      setMessageText(i18n.userForm.passwordRepeatErrorMessage);
      setIsMessageVisible(true);
      return;
    }
    if (isValid && isValidPassRepeat) {
      delete body.passwordRepead;
      setIsRequestInProgress(true);
      if (isEdit) {
        handleEditRequest("users/", body, id, handleAfterEdit);
      } else {
        if (beforeAdd) {
          beforeAdd();
        }
        if (showMessageOnSuccess === undefined) { // true
          handleAddRequest("users/", body, handleAfterAdd);
        } else {
          handleAddRequest("users/", body, handleAfterAdd, showMessageOnSuccess);
        }
      }
    }
  };

  function finishLoading () {
    setIsRequestInProgress(false);
  }

  const handleUploadPicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangePicturePath(event);
    setValuePictureToShow(URL.createObjectURL(file));
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  }, [valueUsername, valuePassword, valueDni, valueName, valueSecondName, valueLastName, valueSecondLastName, valueAge,
    valueSex, valueOccupation, valueBirthDate, valueTelephone, valueAddress, valueEmail, valueStatus, valuePasswordRepeat]);

  const classNameItemLabel = "puggysoft-form-item-label";
  const classNameItemInput = "puggysoft-form-item-input";

  if (isRequestInProgress) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-user-form" >
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as="h3">{title}</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldUsername}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeUsername}
                value={valueUsername}
                type="text"
                placeholder={i18n.userForm.fieldUsername} /></div>
              <Form.Text muted className={classNameFormText.username}>
                {i18n.userForm.formTextUsername}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldPassword}</Form.Label></div>
              <div className={classNameItemInput} ><Form.Control
                onChange={onChangePassword}
                value={valuePassword}
                type="password"
                placeholder={i18n.userForm.fieldPassword} /></div>
              <Form.Text muted className={classNameFormText.password}>
                {i18n.userForm.formTextPassword}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldPasswordRepeat}</Form.Label></div>
              <div className={classNameItemInput} ><Form.Control
                onChange={onChangePasswordRepeat}
                value={valuePasswordRepeat}
                type="password"
                placeholder={i18n.userForm.fieldPassword} /></div>
              <Form.Text muted className={classNameFormText.passwordRepead}>
                {i18n.userForm.formTextPassword}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dni">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldDni}</Form.Label></div>
              <div className={classNameItemInput} ><Form.Control
                onChange={onChangeDni}
                value={valueDni}
                type="text"
                placeholder={i18n.userForm.fieldDni} /></div>
              <Form.Text muted className={classNameFormText.dni}>
                {i18n.userForm.formTextDni}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldName}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeName}
                value={valueName}
                type="text"
                placeholder={i18n.userForm.fieldName} /></div>
              <Form.Text muted className={classNameFormText.name}>
                {i18n.userForm.formTextFirstName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="second-name">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldSecondName}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeSecondName}
                value={valueSecondName}
                type="text"
                placeholder={i18n.userForm.fieldSecondName} /></div>
              <Form.Text muted className={classNameFormText.secondName}>
                {i18n.userForm.formTextSecondName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldLastName}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeLastName}
                value={valueLastName}
                type="text"
                placeholder={i18n.userForm.fieldLastName} /></div>
              <Form.Text muted className={classNameFormText.lastName}>
                {i18n.userForm.formTextLastName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="second-lastname">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldSecondLastName}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeSecondLastName}
                value={valueSecondLastName}
                type="text"
                placeholder={i18n.userForm.fieldSecondLastName} /></div>
              <Form.Text muted className={classNameFormText.secondLastName}>
                {i18n.userForm.formTextSecondLastName}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 puggysoft-form-item-input-date" controlId="birthdate">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldBirthDate}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeBirthDate}
                value={valueBirthDate}
                type="date"
                placeholder={i18n.userForm.fieldBirthDate} /></div>
              <Form.Text muted className={classNameFormText.birthDate}>
                {i18n.userForm.formTextBirthDate}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldAge}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeAge}
                value={valueAge}
                type="number"
                placeholder={i18n.userForm.fieldAge} /></div>
              <Form.Text muted className={classNameFormText.age}>
                {i18n.userForm.formTextAge}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 puggysoft-form-item-input-select" controlId="sex">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldSex}</Form.Label></div>
              <div className={classNameItemInput}><Form.Select
                onChange={onChangeSex}
                value={valueSex} >
                <option key="option-male" value={enumSex.MALE}>{i18n.userSexText.male}</option>
                <option key="option-female" value={enumSex.FEMALE}>{i18n.userSexText.female}</option>
              </Form.Select></div>
              <Form.Text muted className={classNameFormText.sex}>
                {i18n.userForm.formTextSex}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="occupation">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldOccupation}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeOccupation}
                value={valueOccupation}
                type="text"
                placeholder={i18n.userForm.fieldOccupation} /></div>
              <Form.Text muted className={classNameFormText.occupation}>
                {i18n.userForm.formTextOccupation}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="telephone">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldTelephone}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeTelephone}
                value={valueTelephone}
                type="number"
                placeholder={i18n.userForm.fieldTelephone} /></div>
              <Form.Text muted className={classNameFormText.telephone}>
                {i18n.userForm.formTextTelephone}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldAddress}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                onChange={onChangeAddress}
                value={valueAddress}
                type="text"
                placeholder={i18n.userForm.fieldAddress} /></div>
              <Form.Text muted className={classNameFormText.address}>
                {i18n.userForm.formTextAddress}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldEmail}</Form.Label></div>
              <div className={classNameItemInput}> <Form.Control
                onChange={onChangeEmail}
                value={valueEmail}
                type="email"
                placeholder={i18n.userForm.fieldEmail} /></div>
              <Form.Text muted className={classNameFormText.email}>
                {i18n.userForm.formTextEmail}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 puggysoft-form-item-input-select" controlId="active">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldStatus}</Form.Label></div>
              <div className={classNameItemInput}><Form.Select
                onChange={onChangeStatus}
                value={valueStatus} >
                <option key="option-true" value={true}>{i18n.userStatus.active}</option>
                <option key="option-false" value={false}>{i18n.userStatus.inactive}</option>
              </Form.Select></div>
              <Form.Text muted className={classNameFormText.status}>
                {i18n.userForm.formTextStatus}
              </Form.Text>
            </Form.Group>
            <Card.Img variant="top user-image" size="" src={valuePictureToShow} />
            <Form.Group controlId="formFile" className="mb-3 puggysoft-form-item-input-file">
              <div className={classNameItemLabel}><Form.Label>{i18n.userForm.fieldImage}</Form.Label></div>
              <div className={classNameItemInput}><Form.Control
                type="file"
                onChange={(event) => handleUploadPicture(event)}
                value={valuePicturePath}
              />
              </div>
              <Form.Text muted>
                {i18n.userForm.formTextImage}
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
  );
}

export default UserForm;

UserForm.propTypes = {
  title: PropTypes.string,
  beforeAdd: PropTypes.func,
  afterAdd: PropTypes.func,
  showMessageOnSuccess: PropTypes.bool
};

UserForm.defaultProps = {
  title: "",
  beforeAdd: () => { },
  afterAdd: () => { },
  showMessageOnSuccess: undefined
};
