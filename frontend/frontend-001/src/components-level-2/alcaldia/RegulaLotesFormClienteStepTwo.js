import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import {
  handleFilterRequest,
  handleEditRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleRegulaLotesFormClienteStepTwoValidations";
import CommonMessage from "../../components-level-1/CommonMessage";

import "./../css/all-forms.css";

function RegulaLotesForm () {
  const history = useHistory();
  const isEditDefaultValue =
    history && history.location && history.location.state;
  const [isEdit] = useState(isEditDefaultValue);
  const [classNameFormText, setClassNameFormText] =
    useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // CONFIGURE IMAGE
  const archivo =
  isEdit &&
  isEdit.data &&
  isEdit.data.boletaPago &&
  isEdit.data.boletaPago !== null
    ? isEdit.data.boletaPago
    : null;

  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const ciCliente =
    isEdit && isEdit.data.ciCliente !== null ? isEdit.data.ciCliente : "";
  const numeroInmueble =
    isEdit && isEdit.data.numeroInmueble !== null ? isEdit.data.numeroInmueble : "";

  // Use custom hook
  const {
    value: valueId,
    onChange: onChangeId
  } = useInput(id);
  const {
    value: valueCiCliente,
    onChange: onChangeCiCliente
  } = useInput(ciCliente);
  const {
    value: valueNumeroInmueble,
    onChange: onChangeNumeroInmueble
  } = useInput(numeroInmueble);

  const getBody = useCallback(
    function () {
      const username = window.sessionStorage.getItem("username");
      const body = {
        ...isEdit.data,
        numeroInmueble: valueNumeroInmueble,
        updatedBy: username
      };
      if (archivo !== null) {
        body.image = archivo;
      }
      return body;
    },
    [valueId, valueCiCliente, valueNumeroInmueble]
  );

  const handleAfterEdit = function () {
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
        handleFilterRequest(
          `regula-lotes/filter?page=${0}&size=${10}`, body
        );
      }
    } else {
      setMessageTitle(i18n.errorMessages.validationErrorTitle);
      setMessageText(i18n.errorMessages.validationError);
      setIsMessageVisible(true);
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
          {i18n.regulaLotesFormClienteStepTwo.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="idPago">
              <Form.Label>
                {i18n.regulaLotesFormClienteStepTwo.fieldIdPago}
              </Form.Label>
              <Form.Control
                disabled
                onChange={onChangeId}
                value={valueId}
                type="text"
                placeholder={i18n.regulaLotesFormClienteStepTwo.fieldIdPago}
              />
              <Form.Text muted className={classNameFormText.idPago}>
                {i18n.regulaLotesFormClienteStepTwo.fieldIdPagoText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ciCliente">
              <Form.Label>
                {i18n.regulaLotesFormClienteStepTwo.fieldCiCliente}
              </Form.Label>
              <Form.Control
                disabled
                onChange={onChangeCiCliente}
                value={valueCiCliente}
                type="text"
                placeholder={i18n.regulaLotesFormClienteStepTwo.fieldCiCliente}
              />
              <Form.Text muted className={classNameFormText.ciCliente}>
                {i18n.regulaLotesFormClienteStepTwo.fieldCiClienteText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="numeroInmueble">
              <Form.Label>
                {i18n.regulaLotesFormClienteStepTwo.fieldNumeroInmueble}
              </Form.Label>
              <Form.Control
                onChange={onChangeNumeroInmueble}
                value={valueNumeroInmueble}
                type="text"
                placeholder={i18n.regulaLotesFormClienteStepTwo.fieldNumeroInmueble}
              />
              <Form.Text muted className={classNameFormText.numeroInmueble}>
                {i18n.regulaLotesFormClienteStepTwo.fieldNumeroInmuebleText}
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
