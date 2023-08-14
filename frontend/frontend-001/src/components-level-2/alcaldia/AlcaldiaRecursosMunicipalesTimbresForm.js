import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import enumTipo from "./../../models/alcaldia/enumRecursosMunicipalesTipo";
import {
  handleAddRequest,
  handleEditRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleAlcaldiaRecursosMunicipalesTimbresFormValidations";
import CommonMessage from "../../components-level-1/CommonMessage";

import "./../css/all-forms.css";

function AlcaldiaRecursosMunicipalesTimbresForm () {
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

  const tipo = enumTipo.HIJO;
  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const talonarioInicio =
    isEdit && isEdit.data.talonarioInicio !== null ? isEdit.data.talonarioInicio : "";
  const talonarioFinal =
      isEdit && isEdit.data.talonarioFinal !== null ? isEdit.data.talonarioFinal : "";
  const precio =
    isEdit && isEdit.data.precio !== null ? isEdit.data.precio : "";

  const today = new Date();
  const valueName =
    `${i18n.alcaldiaRecursosMunicipalesTimbresForm.defaultTimbre} ${today.getDate()} de ${i18n.commonMonths[today.toLocaleString("en-GB", { month: "long" }).toLowerCase()]} ${today.getFullYear()}`;

  // Use custom hook
  const {
    value: valueTalonarioInicio,
    onChange: onChangeTalonarioInicio,
    reset: resetTalonarioInicio
  } = useInput(talonarioInicio);
  const {
    value: valueTalonarioFinal,
    onChange: onChangeTalonarioFinal,
    reset: resetTalonarioFinal
  } = useInput(talonarioFinal);
  const {
    value: valuePrecio,
    onChange: onChangePrecio,
    reset: resetPrecio
  } = useInput(precio);

  const handleReset = () => {
    resetTalonarioInicio();
    resetTalonarioFinal();
    resetPrecio();
  };

  const getBody = useCallback(
    function () {
      const username = window.sessionStorage.getItem("username");
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        codigo: i18n.alcaldiaRecursosMunicipalesTimbresForm.defaultCodigo,
        codigoAuxiliar: i18n.alcaldiaRecursosMunicipalesTimbresForm.defaultCodigoAuxiliar,
        name: i18n.alcaldiaRecursosMunicipalesTimbresForm.defaultTimbre,
        talonarioMovimiento: valueTalonarioInicio,
        talonarioInicio: valueTalonarioInicio,
        talonarioFinal: valueTalonarioFinal,
        precio: valuePrecio,
        tipo,
        tenant,
        createdBy: username,
        updatedBy: username
      };
      return body;
    },
    [valueTalonarioInicio, valuePrecio]
  );

  const handleAfterAdd = function (newEntityId) {
    handleReset();
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    setIsRequestInProgress(false);
  };

  const handleAfterEdit = function () {
    handleReset();
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
          "alcaldia-recursos-municipales/",
          body,
          id,
          handleAfterEdit
        );
      } else {
        handleAddRequest(
          "alcaldia-recursos-municipales/",
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
          {i18n.alcaldiaRecursosMunicipalesTimbresForm.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldName}
              </Form.Label>
              <Form.Control
                disabled
                value={valueName}
                type="text"
                placeholder={i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldName}
              />
              <Form.Text muted className={classNameFormText.name}>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldNameText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="talonario-inicio">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldTalonarioInicio}
              </Form.Label>
              <Form.Control
                onChange={onChangeTalonarioInicio}
                value={valueTalonarioInicio}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldTalonarioInicio}
              />
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldTalonarioInicioText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="talonario-final">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldTalonarioFinal}
              </Form.Label>
              <Form.Control
                onChange={onChangeTalonarioFinal}
                value={valueTalonarioFinal}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldTalonarioFinal}
              />
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldTalonarioFinalText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldPrecio}
              </Form.Label>
              <Form.Control
                onChange={onChangePrecio}
                value={valuePrecio}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldPrecio}
              />
              <Form.Text muted className={classNameFormText.precio}>
                {i18n.alcaldiaRecursosMunicipalesTimbresForm.fieldPrecioText}
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

export default AlcaldiaRecursosMunicipalesTimbresForm;
