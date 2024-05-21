import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import enumTipo from "./../../models/alcaldia/enumRecursosMunicipalesTipo";
import enumPaths from "../../models/enumPaths";
import {
  handleGetRequest,
  handleAddRequest,
  handleEditRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleAlcaldiaRecursosMunicipalesFoldersFormValidations";
import CommonMessage from "../../components-level-1/CommonMessage";

import "./../css/all-forms.css";

function AlcaldiaRecursosMunicipalesFoldersForm() {
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
  const [controlGet, setControlGet] = useState(true);

  const tipo = enumTipo.HIJO;
  // Put default values:
  const id = isEdit && isEdit.data.id !== null ? isEdit.data.id : "";
  const nameAux =
    isEdit && isEdit.data.nameAux !== null ? isEdit.data.nameAux : "";
  const talonarioInicio =
    isEdit && isEdit.data.talonarioInicio !== null ? isEdit.data.talonarioInicio : "";
  const talonarioFinal =
    isEdit && isEdit.data.talonarioFinal !== null ? isEdit.data.talonarioFinal : "";
  const precio =
    isEdit && isEdit.data.precio !== null ? isEdit.data.precio : "";

  const use = isEdit?.data?.creationDate;
  const timeElapsed = Date.now();

  const today = new Date(use !== undefined ? use : timeElapsed);
  const valueName =
    `${i18n.alcaldiaRecursosMunicipalesFoldersForm.defaultFolder} ${today.getDate()} de ${i18n.commonMonths[today.toLocaleString("en-GB", { month: "long" }).toLowerCase()]} ${today.getFullYear()}`;

  // Use custom hook
  const {
    value: valueNameAux,
    onChange: onChangeValueNameAux,
    setValue: setValueNameAux,
    reset: resetNameAux
  } = useInput(nameAux === "" ? valueName : nameAux);
  const {
    value: valueTalonarioInicio,
    setValue: setValueTalonarioInicio,
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
    resetNameAux();
  };

  if (controlGet && isEdit === undefined) {
    handleGetRequest("alcaldia-recursos-municipales-folders-get-for-register", (data) => {
      setValueTalonarioInicio(data + 1);
      setControlGet(false);
    });
  }

  const getBody = useCallback(
    function () {
      const username = window.sessionStorage.getItem("username");
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        codigo: i18n.alcaldiaRecursosMunicipalesFoldersForm.defaultCodigo,
        codigoAuxiliar: i18n.alcaldiaRecursosMunicipalesFoldersForm.defaultCodigoAuxiliar,
        name: i18n.alcaldiaRecursosMunicipalesFoldersForm.defaultFolder,
        nameAux: valueNameAux,
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
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_TABLE);
  };

  const handleAfterEdit = function () {
    handleReset();
    setIsEdit(undefined);
    const body = getBody();
    handleValidation(body, setClassNameFormText);
    setIsRequestInProgress(false);
    history.push(enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_TABLE);
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
          {i18n.alcaldiaRecursosMunicipalesFoldersForm.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldName}
              </Form.Label>
              <Form.Control
                disabled
                value={valueName}
                type="text"
                placeholder={i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldName}
              />
              <Form.Text muted className={classNameFormText.name}>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldNameText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="nameAux">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldName}
              </Form.Label>
              <Form.Control
                onChange={onChangeValueNameAux}
                value={valueNameAux}
                type="text"
                placeholder={i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldName}
              />
              <Form.Text muted className={classNameFormText.name}>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldNameText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="talonario-inicio">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldFoldersInicio}
              </Form.Label>
              <Form.Control
                //disabled
                value={valueTalonarioInicio}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldFoldersInicio}
              />
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldTalonarioInicioText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="talonario-final">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldFoldersFinal}
              </Form.Label>
              <Form.Control
                onChange={onChangeTalonarioFinal}
                value={valueTalonarioFinal}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldFoldersFinal}
              />
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldTalonarioFinalText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldPrecio}
              </Form.Label>
              <Form.Control
                onChange={onChangePrecio}
                value={valuePrecio}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldPrecio}
              />
              <Form.Text muted className={classNameFormText.precio}>
                {i18n.alcaldiaRecursosMunicipalesFoldersForm.fieldPrecioText}
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

export default AlcaldiaRecursosMunicipalesFoldersForm;
