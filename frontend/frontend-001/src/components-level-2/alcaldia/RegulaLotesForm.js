import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import appUrlConfig from "./../../tools/appUrlConfig";
import {
  handleAddRequest,
  handleEditRequest,
  handleAddFileRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleRegulaLotesFormValidations";
import CommonMessage from "../../components-level-1/CommonMessage";

import "./../css/all-forms.css";

function RegulaLotesForm () {
  const history = useHistory();
  const isEditDefaultValue =
    history && history.location && history.location.state;
  const [isEdit, setIsEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] =
    useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // CONFIGURE IMAGE
  const fileName = "products-default.jpg";
  const imageUrlInit = `${appUrlConfig.PROTOCOL}//${appUrlConfig.HOSTNAME}:${appUrlConfig.PORT}/${fileName}`;
  let fileUrlInitAux = imageUrlInit;
  const archivo =
  isEdit &&
  isEdit.data &&
  isEdit.data.boletaPago &&
  isEdit.data.boletaPago !== null
    ? isEdit.data.boletaPago
    : null;
  if (archivo && archivo !== null) {
    if (archivo.includes("blob:")) {
      fileUrlInitAux = archivo;
    } else {
      fileUrlInitAux = `data:image/jpeg;base64, ${archivo}`;
    }
  }
  const { value: valueFileToShow, setValue: setValueFileToShow } = useInput(fileUrlInitAux);
  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const nombreCliente = isEdit && isEdit.data.nombreCliente !== null ? isEdit.data.nombreCliente : "";
  const ciCliente =
    isEdit && isEdit.data.ciCliente !== null ? isEdit.data.ciCliente : "";
  const codigoCatastral =
    isEdit && isEdit.data.codigoCatastral !== null ? isEdit.data.codigoCatastral : "";

  // Use custom hook
  const {
    value: valueNombreCliente,
    onChange: onChangeNombreCliente,
    reset: resetNombreCliente
  } = useInput(nombreCliente);
  const {
    value: valueCiCliente,
    onChange: onChangeCiCliente,
    reset: resetCiCliente
  } = useInput(ciCliente);
  const {
    value: valueCodigoCatastral,
    onChange: onChangeCodigoCatastral,
    reset: resetCodigoCatastral
  } = useInput(codigoCatastral);
  const { value: valueFile, setValue: setPicture } = useInput(null);
  const { value: valueFilePath, onChange: onChangeFilePath, setValue: setFilePath } = useInput("");

  const handleReset = () => {
    resetNombreCliente();
    resetCiCliente();
    resetCodigoCatastral();
    setPicture(null);
    setFilePath("");
    setValueFileToShow(imageUrlInit);
  };

  const getBody = useCallback(
    function () {
      const username = window.sessionStorage.getItem("username");
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        nombreCliente: valueNombreCliente,
        ciCliente: valueCiCliente,
        codigoCatastral: valueCodigoCatastral,
        tenant,
        createdBy: username,
        updatedBy: username
      };
      if (archivo !== null) {
        body.image = archivo;
      }
      return body;
    },
    [valueNombreCliente, valueCiCliente, valueCodigoCatastral]
  );

  function finishLoading () {
    setIsRequestInProgress(false);
  }

  const handleAfterAdd = function (newRegulaLotesId) {
    handleReset();
    handleAddFile(newRegulaLotesId);
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    setIsRequestInProgress(false);
  };

  const handleAfterEdit = function () {
    handleReset();
    handleAddFile(id);
    setIsEdit(undefined);
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    setIsRequestInProgress(false);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      setIsRequestInProgress(true);
      if (isEdit) {
        handleEditRequest(
          "regula-lotes/",
          body,
          id,
          handleAfterEdit
        );
      } else {
        handleAddRequest(
          "regula-lotes/",
          body,
          handleAfterAdd
        );
      }
    } else {
      setMessageTitle(i18n.errorMessages.validationErrorTitle);
      setMessageText(i18n.errorMessages.validationError);
      setIsMessageVisible(true);
    }
  };

  const handleUploadFile = (event) => {
    // file.name file.size file.type
    const file = event.target.files[0];
    // const fileTypeName = file.constructor.name
    setPicture(file);
    onChangeFilePath(event);
    setValueFileToShow(URL.createObjectURL(file));
  };

  const handleAddFile = (regulaLotesId) => {
    if (valueFile !== null) {
      handleAddFileRequest("regula-lotes/file/",
        valueFile,
        regulaLotesId,
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
    <div className="puggysoft-form-thirty-with">
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as="h3">
          {i18n.regulaLotesForm.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nombreCliente">
              <Form.Label>
                {i18n.regulaLotesForm.fieldNombreCliente}
              </Form.Label>
              <Form.Control
                onChange={onChangeNombreCliente}
                value={valueNombreCliente}
                type="text"
                placeholder={i18n.regulaLotesForm.fieldNombreCliente}
              />
              <Form.Text muted className={classNameFormText.nombreCliente}>
                {i18n.regulaLotesForm.fieldNombreClienteText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ciCliente">
              <Form.Label>
                {i18n.regulaLotesForm.fieldCiCliente}
              </Form.Label>
              <Form.Control
                onChange={onChangeCiCliente}
                value={valueCiCliente}
                type="text"
                placeholder={i18n.regulaLotesForm.fieldCiCliente}
              />
              <Form.Text muted className={classNameFormText.ciCliente}>
                {i18n.regulaLotesForm.fieldCiClienteText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="codigoCatastral">
              <Form.Label>
                {i18n.regulaLotesForm.fieldCodigoCatastral}
              </Form.Label>
              <Form.Control
                onChange={onChangeCodigoCatastral}
                value={valueCodigoCatastral}
                type="text"
                placeholder={i18n.regulaLotesForm.fieldCodigoCatastral}
              />
              <Form.Text muted className={classNameFormText.codigoCatastral}>
                {i18n.regulaLotesForm.fieldCodigoCatastralText}
              </Form.Text>
            </Form.Group>
            <Card.Img variant="top product-image" size="" src={valueFileToShow} />
            <Form.Group controlId="formFile" className="mb-3 puggysoft-form-item-input-file">
              <Form.Label>{i18n.regulaLotesForm.fieldImage}</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => handleUploadFile(event)}
                value={valueFilePath}
              />
              <Form.Text muted>
                {i18n.regulaLotesForm.formTextImage}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleAdd} variant="primary" type="button">
              {i18n.commonForm.saveButton}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegulaLotesForm;
