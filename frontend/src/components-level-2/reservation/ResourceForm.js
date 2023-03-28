import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "./../../components-level-1/CommonLoading";
import i18n from "./../../i18n/i18n";
import useInput from "./../../hooks/useInput";
import appUrlConfig from "./../../tools/appUrlConfig";
import { handleAddRequest, handleEditRequest, handleAddFileRequest } from "../../actions/HandleManager";
import { handleValidation, classNameFormTextNew } from "./../../validations/reservation/HandleResourceFormValidations";
import CommonMessage from "./../../components-level-1/CommonMessage";

import "./../css/all-forms.css";

function ScheduleForm (props) {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // CONFIGURE IMAGE
  const fileName = "default.jpg";
  const imageUrlInit = `${appUrlConfig.PROTOCOL}//${appUrlConfig.HOSTNAME}:${appUrlConfig.PORT}/${fileName}`;
  let imageUrlInitAux = imageUrlInit;
  const entityImage =
  isEdit &&
  isEdit.data &&
  isEdit.data.image &&
  isEdit.data.image !== null
    ? isEdit.data.image
    : null;
  if (entityImage && entityImage !== null) {
    if (entityImage.includes("blob:")) {
      imageUrlInitAux = entityImage;
    } else {
      imageUrlInitAux = `data:image/jpeg;base64, ${entityImage}`;
    }
  }
  const { value: valuePictureToShow, setValue: setValuePictureToShow } = useInput(imageUrlInitAux);

  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const name = isEdit && isEdit.data.name !== null ? isEdit.data.name : "";
  const priceInterval = isEdit && isEdit.data.priceInterval !== null ? isEdit.data.priceInterval : "";
  const description = isEdit && isEdit.data.description !== null ? isEdit.data.description : "";
  const valueAux = isEdit && isEdit.data.aux !== null ? isEdit.data.aux : "";

  // Use custom hook
  const { value: valueName, onChange: onChangeName, reset: resetName } = useInput(name);
  const { value: valuePriceInterval, onChange: onChangePriceInterval, reset: resetPriceInterval } = useInput(priceInterval);
  const { value: valueDescription, onChange: onChangeDescription, reset: resetDescription } = useInput(description);
  const { value: valuePicture, setValue: setPicture } = useInput(null);
  const { value: valuePicturePath, onChange: onChangePicturePath, setValue: setPicturePath } = useInput("");

  const handleReset = () => {
    resetName();
    resetPriceInterval();
    resetDescription();
    setPicture(null);
    setPicturePath("");
    setValuePictureToShow(imageUrlInit);
  };

  const getBody = useCallback(function () {
    const username = window.sessionStorage.getItem("username");
    const body = {
      name: valueName,
      priceInterval: valuePriceInterval,
      description: valueDescription,
      aux: valueAux,
      createdBy: username,
      updatedBy: username
    };
    if (entityImage !== null) {
      body.image = entityImage;
    }
    return body;
  }, [entityImage, valueName, valuePriceInterval, valueDescription, valueAux]);

  function finishLoading () {
    setIsRequestInProgress(false);
  }

  const handleAfterAdd = function (newEntityId) {
    handleAddImage(newEntityId);
    handleReset();
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  };

  const handleAfterEdit = function () {
    handleAddImage(id);
    handleReset();
    setIsEdit(undefined);
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      setIsRequestInProgress(true);
      if (isEdit) {
        handleEditRequest("reservations-resources/", body, id, handleAfterEdit);
      } else {
        handleAddRequest("reservations-resources/", body, handleAfterAdd);
      }
    } else {
      setMessageTitle(i18n.errorMessages.validationErrorTitle);
      setMessageText(i18n.errorMessages.validationError);
      setIsMessageVisible(true);
    }
  };

  const handleUploadPicture = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangePicturePath(event);
    setValuePictureToShow(URL.createObjectURL(file));
  };

  const handleAddImage = (entityId) => {
    // const pictureFile = { ...valuePicture }
    if (valuePicture !== null) {
      handleAddFileRequest("reservation-resources/picture/",
        valuePicture,
        entityId,
        finishLoading,
        false,
        finishLoading);
    } else {
      finishLoading();
    }
  };

  useEffect(() => {
    const body = getBody();
    handleValidation(body, setClassNameFormText);
  }, [getBody]);

  if (isRequestInProgress) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-form-thirty-with" >
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as='h3'>{i18n.resourceForm.title}</Card.Header>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>{i18n.resourceForm.fieldName}</Form.Label>
              <Form.Control
                onChange={onChangeName}
                value={valueName}
                type="text"
                placeholder={i18n.resourceForm.fieldName} />
              <Form.Text muted className={classNameFormText.name}>
                {i18n.resourceForm.fieldNameText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price-Interval">
              <Form.Label>{i18n.resourceForm.fieldPriceInterval}</Form.Label>
              <Form.Control
                onChange={onChangePriceInterval}
                value={valuePriceInterval}
                type="number"
                placeholder={i18n.resourceForm.fieldPriceInterval} />
              <Form.Text muted className={classNameFormText.priceInterval}>
                {i18n.resourceForm.fieldPriceIntervalText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>{i18n.resourceForm.fieldDescription}</Form.Label>
              <Form.Control
                onChange={onChangeDescription}
                value={valueDescription}
                as="textarea" rows={3}
                placeholder={i18n.resourceForm.fieldDescription} />
              <Form.Text muted className={classNameFormText.description}>
                {i18n.resourceForm.fieldDescriptionText}
              </Form.Text>
            </Form.Group>
            <Card.Img variant="top entity-image" size="" src={valuePictureToShow} />
            <Form.Group controlId="formFile" className="mb-3 puggysoft-form-item-input-file">
              <Form.Label>{i18n.resourceForm.fieldImage}</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => handleUploadPicture(event)}
                value={valuePicturePath}
              />
              <Form.Text muted>
                {i18n.resourceForm.fieldImageText}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleAdd} variant="primary" type="button">{i18n.commonForm.saveButton}</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ScheduleForm;
