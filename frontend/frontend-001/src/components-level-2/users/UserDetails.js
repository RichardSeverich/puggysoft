import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CommonTextbox from "../../components-level-1/CommonTextbox";
import i18n from "../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import { handleValidation, classNameFormTextNew } from "./../../validations/users/HandleUserFormValidations";
import { handleGetRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import enumSex from "./../../models/users/enumSex";
import enumInputType from "./../../models/enumInputType";
import appUrlConfig from "./../../tools/appUrlConfig";
import CommonLoading from "./../../components-level-1/CommonLoading";
import CommonMessage from "./../../components-level-1/CommonMessage";

import "./user-details.css";

function UserDetails (props) {
  const history = useHistory();
  const routerProps = history && history.location && history.location.state
    ? history.location.state
    : { data: {} };
  const userData = routerProps.data;

  const { children } = props;

  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  console.log(classNameFormText);
  // const [isProgressRequest, setIsProgressRequest] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // Use custom hook
  const { value: valueUsername, onChange: onChangeUsername, setValue: setValueUsername } = useInput(userData.username);
  const { value: valuePassword, onChange: onChangePassword, setValue: setValuePassword } = useInput(userData.password);
  const { value: valueDni, onChange: onChangeDni, setValue: setValueDni } = useInput(userData.dni);
  const { value: valueName, onChange: onChangeName, setValue: setValueName } = useInput(userData.name);
  const { value: valueSecondName, onChange: onChangeSecondName, setValue: setValueSecondName } = useInput(userData.secondName);
  const { value: valueLastName, onChange: onChangeLastName, setValue: setValueLastName } = useInput(userData.lastName);
  const { value: valueSecondLastName, onChange: onChangeSecondLastName, setValue: setValueSecondLastName } = useInput(userData.secondLastName);
  const { value: valueBirthDate, onChange: onChangeBirthDate, setValue: setValueBirthDate } = useInput(userData.birthDate);
  const { value: valueAge, onChange: onChangeAge, setValue: setValueAge } = useInput(userData.age);
  const userSex = userData.sex === i18n.userSexText.male ? enumSex.MALE : enumSex.FEMALE;
  const { value: valueSex, onChange: onChangeSex, setValue: setValueSex } = useInput(userSex);
  const { value: valueOccupation, onChange: onChangeOccupation, setValue: setValueOccupation } = useInput(userData.occupation);
  const { value: valueTelephone, onChange: onChangeTelephone, setValue: setValueTelephone } = useInput(userData.telephone);
  const { value: valueAddress, onChange: onChangeAddress, setValue: setValueAddress } = useInput(userData.address);
  const { value: valueEmail, onChange: onChangeEmail, setValue: setValueEmail } = useInput(userData.email);
  const isActive = userData.active === i18n.userStatus.active;
  const { value: valueStatus, onChange: onChangeStatus, setValue: setValueStatus } = useInput(isActive);
  const { value: valueCreatedBy } = useInput(userData.createdBy ? userData.createdBy : "");
  const { value: valueUpdatedBy, setValue: setValueUpdatedBy } = useInput(userData.updatedBy ? userData.updatedBy : "");
  const { value: valueCreationDate } = useInput(userData.creationDate?.substring(0, 10));
  const { value: valueUpdateDate, setValue: setValueUpdateDate } = useInput(userData.updateDate?.substring(0, 10));
  const { value: valuePicturePath, setValue: setValuePicturePath } = useInput("");
  const { value: valuePicture, setValue: setValuePicture } = useInput(null);
  const { value: valuePictureToShow, setValue: setValuePictureToShow } = useInput(userData.image);
  const valueEmailVerified = userData.emailVerified === i18n.userEmailVerified.verified;

  const resetValues = function () {
    setValueUsername(userData.username);
    setValuePassword(userData.password);
    setValueDni(userData.dni);
    setValueName(userData.name);
    setValueSecondName(userData.secondName);
    setValueLastName(userData.lastName);
    setValueSecondLastName(userData.secondLastName);
    setValueBirthDate(userData.birthDate);
    setValueAge(userData.age);
    setValueSex(userSex);
    setValueOccupation(userData.occupation);
    setValueTelephone(userData.telephone);
    setValueAddress(userData.address);
    setValueEmail(userData.email);
    setValueStatus(isActive);
    setValuePicture(null);
    setValuePicturePath("");
    setValuePictureToShow(userData.image);
    setIsRequestInProgress(false);
  };

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
      createdBy: valueCreatedBy,
      updatedBy: username,
      emailVerified: valueEmailVerified,
      image: null
    };
    if (valuePictureToShow !== null) { // means that we have image.
      body.image = valuePictureToShow;
    }
    return body;
  };

  const handleOnChangePicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setValuePicture(file);
    setValuePicturePath(event.target.value);
    // blob:http://localhost:3000/b44075bf-9255-4a62-97ef-922e3663a768
    setValuePictureToShow(URL.createObjectURL(file));
  };

  const handleAddImage = () => {
    setIsRequestInProgress(true);
    if (valuePicture !== null) {
      handleAddFileRequest(
        "users/picture/",
        valuePicture,
        userData.id,
        handleAfterUpdateOnSuccess,
        true,
        handleAfterEditOnFail);
    }
  };

  const handleAfterEditOnFail = (response) => {
    resetValues();
  };

  const handleAfterUpdateOnSuccess = function () {
    handleGetRequest(`users/${userData.id}`, updateNewValues);
  };

  const updateNewValues = function (newUserData) {
    setValueUsername(newUserData.username);
    setValuePassword(newUserData.password);
    setValueDni(newUserData.dni);
    setValueName(newUserData.name);
    setValueSecondName(newUserData.secondName);
    setValueLastName(newUserData.lastName);
    setValueSecondLastName(newUserData.secondLastName);
    setValueBirthDate(newUserData.birthDate);
    setValueAge(newUserData.age);
    setValueSex(newUserData.sex);
    setValueOccupation(newUserData.occupation);
    setValueTelephone(newUserData.telephone);
    setValueAddress(newUserData.address);
    setValueEmail(newUserData.email);
    setValueStatus(newUserData.active);
    setValueUpdateDate(newUserData.updateDate?.substring(0, 10));
    setValueUpdatedBy(newUserData.updatedBy);
    setValuePicture(null);
    setValuePicturePath("");
    setValuePictureToShow(newUserData.image);
    userData.image = newUserData.image;
    setIsRequestInProgress(false);
  };

  const handleAdd = () => {
    if (userData && userData.id) {
      setIsRequestInProgress(true);
      const body = getBody();
      const isValid = handleValidation(body, setClassNameFormText);
      if (isValid) {
        handleEditRequest("users/", body, userData.id, handleAfterUpdateOnSuccess, handleAfterEditOnFail);
      } else {
        resetValues();
        setMessageTitle(i18n.errorMessages.validationErrorTitle);
        setMessageText(i18n.errorMessages.validationError);
        setIsMessageVisible(true);
      }
    }
  };

  const selectOptionSex = [
    {
      value: enumSex.MALE,
      text: i18n.userSexText.male,
      key: "option-male"
    },
    {
      value: enumSex.FEMALE,
      text: i18n.userSexText.female,
      key: "option-female"
    }
  ];

  const selectOptionStatus = [
    {
      value: true,
      text: i18n.userStatus.active,
      key: "option-true"
    },
    {
      value: false,
      text: i18n.userStatus.inactive,
      key: "option-false"
    }
  ];

  const fileName = "user-default.jpg";
  let imageUrl = `${appUrlConfig.PROTOCOL}//${appUrlConfig.HOSTNAME}:${appUrlConfig.PORT}/${fileName}`;
  if (valuePictureToShow && valuePictureToShow !== null) {
    if (valuePictureToShow.includes("blob:")) { // means that the image was changed.
      imageUrl = valuePictureToShow;
    } else {
      imageUrl = `data:image/jpeg;base64, ${valuePictureToShow}`; // means that we have image.
    }
  }

  if (isRequestInProgress) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-user-details">
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as="h3">{i18n.userDetails.title}</Card.Header>
        <Card.Img variant="top" size="" src={imageUrl} />
        <div className="puggysoft-textbox-item">
          <CommonTextbox
            textboxLabel={i18n.userForm.fieldImage}
            textboxReadOnly={false}
            textboxType={enumInputType.FILE}
            textboxOnSave={handleAddImage}
            textboxOnchange={(event) => handleOnChangePicture(event)}
            textboxValue={valuePicturePath}
          >
          </CommonTextbox>
        </div>
        <Card.Body>
          <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleCredentials}</Card.Title> </ListGroup.Item>
          <ListGroup>
            <ListGroup.Item>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnId}
                  textboxReadOnly={true}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={userData.id}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnDni}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeDni}
                  textboxValue={valueDni}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnEmailVerified}
                  textboxReadOnly={true}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={userData.emailVerified}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnUsername}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeUsername}
                  textboxValue={valueUsername}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnPassword}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangePassword}
                  textboxValue={valuePassword}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleGeneralData}</Card.Title> </ListGroup.Item>
            <ListGroup.Item>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnName}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeName}
                  textboxValue={valueName}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnSecondName}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeSecondName}
                  textboxValue={valueSecondName}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnLastName}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeLastName}
                  textboxValue={valueLastName}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnSecondLastName}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeSecondLastName}
                  textboxValue={valueSecondLastName}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnBirthDate}
                  textboxReadOnly={false}
                  textboxType={enumInputType.DATE}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeBirthDate}
                  textboxValue={valueBirthDate}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columndAge}
                  textboxReadOnly={false}
                  textboxType={enumInputType.NUMBER}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeAge}
                  textboxValue={valueAge}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columndSex}
                  textboxReadOnly={false}
                  textboxType={enumInputType.SELECT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeSex}
                  textboxValue={valueSex}
                  textboxSelectOption={selectOptionSex}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnOccupation}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeOccupation}
                  textboxValue={valueOccupation}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleContactData}</Card.Title> </ListGroup.Item>
            <ListGroup.Item>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnTelephone}
                  textboxReadOnly={false}
                  textboxType={enumInputType.NUMBER}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeTelephone}
                  textboxValue={valueTelephone}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnAddress}
                  textboxReadOnly={false}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeAddress}
                  textboxValue={valueAddress}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnEmail}
                  textboxReadOnly={false}
                  textboxType={enumInputType.EMAIL}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeEmail}
                  textboxValue={valueEmail}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnStatus}
                  textboxReadOnly={false}
                  textboxType={enumInputType.SELECT}
                  textboxOnSave={handleAdd}
                  textboxOnchange={onChangeStatus}
                  textboxValue={valueStatus}
                  textboxSelectOption={selectOptionStatus}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
            <ListGroup.Item> <Card.Title>{i18n.userDetails.subTitleInformationData}</Card.Title> </ListGroup.Item>
            <ListGroup.Item>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnCreatedBy}
                  textboxReadOnly={true}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueCreatedBy}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnUpdatedBy}
                  textboxReadOnly={true}
                  textboxType={enumInputType.TEXT}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueUpdatedBy}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnCreationDate}
                  textboxReadOnly={true}
                  textboxType={enumInputType.DATE}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueCreationDate}
                >
                </CommonTextbox>
              </div>
              <div className="puggysoft-textbox-item">
                <CommonTextbox
                  textboxLabel={i18n.userTable.columnUpdateDate}
                  textboxReadOnly={true}
                  textboxType={enumInputType.DATE}
                  textboxOnSave={() => { }}
                  textboxOnchange={() => { }}
                  textboxValue={valueUpdateDate}
                >
                </CommonTextbox>
              </div>
            </ListGroup.Item>
          </ListGroup>
          {children}
        </Card.Body>
      </Card>
    </div >
  );
}

export default UserDetails;

UserDetails.propTypes = {
  children: PropTypes.node
};

UserDetails.defaultProps = {
  children: <></>
};
