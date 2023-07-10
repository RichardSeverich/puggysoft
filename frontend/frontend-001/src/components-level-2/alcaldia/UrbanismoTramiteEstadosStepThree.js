import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import {
  handleAddRequest,
  handleEditRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleUrbanismoTramiteEstadosFormValidations";
import CommonMessage from "../../components-level-1/CommonMessage";
import "./../css/all-forms.css";

function UrbanismoTramiteForm () {
  const history = useHistory();
  const [isEdit, setIsEdit] = useState(false);
  const [classNameFormText, setClassNameFormText] =
    useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // Variables
  const { selectedEstado, selectedTramite, selectedFlujo } =
    history && history.location && history.location.state.data;

  const id = selectedFlujo ? selectedFlujo.id : "";
  const nombreCliente = selectedFlujo ? selectedFlujo.nombreCliente : "";
  const ciCliente = selectedFlujo ? selectedFlujo.ciCliente : "";

  // Use custom hook
  const {
    value: valueNombre,
    onChange: onChangeNombre,
    reset: resetNombre
  } = useInput(nombreCliente);
  const {
    value: valueCi,
    onChange: onChangeCi,
    reset: resetCi
  } = useInput(ciCliente);

  const handleReset = () => {
    resetNombre();
    resetCi();
  };

  const getBody = useCallback(
    function () {
      const username = window.sessionStorage.getItem("username");
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        tramiteNombreCorto: selectedTramite.nombreCorto,
        estadoNombreCorto: selectedEstado.nombreCorto,
        nombreCliente: valueNombre,
        ciCliente: valueCi,
        tenant,
        createdBy: username,
        updatedBy: username
      };
      return body;
    },
    [valueNombre, valueCi]
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
          "urbanismo-tramite-flujo/",
          body,
          id,
          handleAfterEdit
        );
      } else {
        handleAddRequest(
          "urbanismo-tramite-flujo/",
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
        <Card.Header as="h3">{i18n.urbanismoTramiteEstadosForm.title}</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="tramite">
              <Form.Label>{i18n.urbanismoTramiteEstadosForm.fieldTramite}</Form.Label>
              <Form.Control
                disabled
                onChange={() => {}}
                value={selectedTramite.nombre}
                type="text"
                placeholder={i18n.urbanismoTramiteEstadosForm.fieldTramite}
              />
              <Form.Text muted className={classNameFormText.nombre}>
                {i18n.urbanismoTramiteEstadosForm.fieldNombreText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="estado">
              <Form.Label>{i18n.urbanismoTramiteEstadosForm.fieldEstado}</Form.Label>
              <Form.Control
                disabled
                onChange={() => {}}
                value={selectedEstado.nombre}
                type="text"
                placeholder={i18n.urbanismoTramiteEstadosForm.fieldEstado}
              />
              <Form.Text muted className={classNameFormText.nombre}>
                {i18n.urbanismoTramiteEstadosForm.fieldNombreText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>{i18n.urbanismoTramiteEstadosForm.fieldNombre}</Form.Label>
              <Form.Control
                onChange={onChangeNombre}
                value={valueNombre}
                type="text"
                placeholder={i18n.urbanismoTramiteEstadosForm.fieldNombre}
              />
              <Form.Text muted className={classNameFormText.nombre}>
                {i18n.urbanismoTramiteEstadosForm.fieldNombreText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ci">
              <Form.Label>{i18n.urbanismoTramiteEstadosForm.fieldCi}</Form.Label>
              <Form.Control
                onChange={onChangeCi}
                value={valueCi}
                type="text"
                placeholder={i18n.urbanismoTramiteEstadosForm.fieldCi}
              />
              <Form.Text muted className={classNameFormText.nombre}>
                {i18n.urbanismoTramiteEstadosForm.fieldNombreText}
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

export default UrbanismoTramiteForm;
