import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import useInput from "../../hooks/useInput";
import {
  handleFilterRequest
} from "../../actions/HandleManager";
import {
  handleValidation,
  classNameFormTextNew
} from "../../validations/alcaldia/HandleAlcaldiaRecursosMunicipalesReporteInventarioValidations";
import CommonMessage from "../../components-level-1/CommonMessage";
import enumStatus from "../../models/alcaldia/enumVentaStatus";
import GeneratePdf from "../../tools/alcaldia/pdfBuilderReporteDiarioInventarioV1";

import "./../css/all-forms.css";

function AlcaldiaRecursosMunicipalesForm () {
  const history = useHistory();

  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  let timbreSelected;
  let folderSelected;
  if (history && history.location && history.location.state && history.location.state.timbreSelected) {
    timbreSelected = history.location.state.timbreSelected;
  } else if (history && history.location && history.location.state && history.location.state.folderSelected) {
    folderSelected = history.location.state.folderSelected;
  }

  // Use custom hook
  const {
    value: valueFecha,
    onChange: onChangeFecha
  } = useInput("");
  const {
    value: valueEstado,
    onChange: onChangeEstado
  } = useInput("ACTIVO");

  const getBody = useCallback(
    function () {
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        nameRecursoMunicipal: timbreSelected !== undefined ? timbreSelected.name : folderSelected.name,
        idRecursoMunipal: timbreSelected !== undefined ? timbreSelected.id : folderSelected.id,
        status: valueEstado, // ACTIVO,ANULADO
        tenant,
        yearMonthDay: valueFecha
      };
      return body;
    },
    [valueFecha, valueEstado]
  );

  const handleAfterGetData = function (data) {
    const body = getBody();
    GeneratePdf(data, body.yearMonthDay, body);
    setIsRequestInProgress(false);
  };

  const handleGetData = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      setIsRequestInProgress(true);
      handleFilterRequest("alcaldia-recursos-municipales-reporte-venta-diario", body, handleAfterGetData);
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
          {i18n.alcaldiaRecursosMunicipalesReporteDiario.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="fecha">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesReporteDiario.fieldFecha}
              </Form.Label>
              <Form.Control
                onChange={onChangeFecha}
                value={valueFecha}
                type="date"
                placeholder={i18n.alcaldiaRecursosMunicipalesReporteDiario.fieldFecha}
              />
              <Form.Text muted className={classNameFormText.fecha}>
                {i18n.alcaldiaRecursosMunicipalesReporteDiario.fieldFechaText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="estado">
              <Form.Label>{i18n.alcaldiaRecursosMunicipalesReporteDiario.fieldEstado}</Form.Label>
              <Form.Select
                onChange={onChangeEstado}
                value={valueEstado} >
                <option key="option-true" value={enumStatus.ACTIVO}>{i18n.alcaldiaVentaStatusText.activo}</option>
                <option key="option-false" value={enumStatus.ANULADO}>{i18n.alcaldiaVentaStatusText.anulado}</option>
              </Form.Select>
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesReporteDiario.fieldEstadoText}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleGetData} variant="primary" type="button">
              {i18n.alcaldiaRecursosMunicipalesReporteDiario.buttonGenerar}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesForm;
