import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import useInput from "../../hooks/useInput";
import {
  handleAddRequest,
  handleEditRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleUrbanismoHistorialEstadoFormValidations";
import CommonMessage from "../../components-level-1/CommonMessage";
import "./../css/all-forms.css";

function UrbanismoHistorialEstadoStepThree () {
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
  const username = selectedFlujo ? selectedFlujo.username : "";

  // Use custom hook
  const {
    value: valueNombre,
    onChange: onChangeNombre,
    reset: resetNombre
  } = useInput(username);

  const handleReset = () => {
    resetNombre();
  };

  const getBody = useCallback(
    function () {
      const username = window.sessionStorage.getItem("username");
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        idTramiteFlujo: selectedTramite.id,
        username: valueNombre,
        estadoAnterior: selectedTramite.estadoNombreCorto,
        estadoNuevo: selectedEstado.nombreCorto,
        tenant,
        createdBy: username,
        updatedBy: username
      };
      return body;
    },
    [valueNombre]
  );

  const handleAfterAdd = function (newEntityId) {
    history.push({
      pathname: enumPaths.URBANISMO_FLUJO_HISTORIAL_STEP_TWO,
      state: {
        data: selectedTramite
      }
    });
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
          "urbanismo-historial/",
          body,
          id,
          handleAfterEdit
        );
      } else {
        handleAddRequest(
          "urbanismo-historial/",
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
        <Card.Header as="h3">{i18n.urbanismoHistorialEstadoForm.title}</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="tramite">
              <Form.Label>{i18n.urbanismoHistorialEstadoForm.fieldTramite}</Form.Label>
              <Form.Control
                disabled
                onChange={() => {}}
                value={selectedTramite.tramiteNombreCorto}
                type="text"
                placeholder={i18n.urbanismoHistorialEstadoForm.fieldTramite}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="estado">
              <Form.Label>{i18n.urbanismoHistorialEstadoForm.fieldEstado}</Form.Label>
              <Form.Control
                disabled
                onChange={() => {}}
                value={selectedEstado.nombre}
                type="text"
                placeholder={i18n.urbanismoHistorialEstadoForm.fieldEstado}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>{i18n.urbanismoHistorialEstadoForm.fieldNombre}</Form.Label>
              <Form.Control
                onChange={onChangeNombre}
                value={valueNombre}
                type="text"
                placeholder={i18n.urbanismoHistorialEstadoForm.fieldNombre}
              />
              <Form.Text muted className={classNameFormText.username}>
                {i18n.urbanismoHistorialEstadoForm.fieldNombreText}
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

export default UrbanismoHistorialEstadoStepThree;
