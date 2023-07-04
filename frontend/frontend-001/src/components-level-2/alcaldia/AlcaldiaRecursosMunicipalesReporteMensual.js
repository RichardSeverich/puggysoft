import React, { useEffect, useState, useCallback } from "react";

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
} from "../../validations/alcaldia/HandleAlcaldiaRecursosMunicipalesReporteAnualValidations";
import CommonMessage from "../../components-level-1/CommonMessage";
import enumStatus from "../../models/alcaldia/enumVentaStatus";
import GeneratePdf from "../../tools/alcaldia/pdfBuilderReporteMensual";

import "./../css/all-forms.css";

function AlcaldiaRecursosMunicipalesForm () {
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // Use custom hook
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [valueFecha, setValueFecha] = useState("");
  const {
    value: valueEstado,
    onChange: onChangeEstado
  } = useInput("ACTIVO");
  const {
    value: valueOrden,
    onChange: onChangeOrden
  } = useInput("Vertical");

  const onChangeFecha = (value) => {
    setValueFecha(value);
    setYear(value.split("-")[0]);
    setMonth(value.split("-")[1]);
  };
  const getBody = useCallback(
    function () {
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        estadoVenta: valueEstado, // ACTIVO,ANULADO
        year,
        month,
        tenant
      };
      return body;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [valueFecha, valueEstado]
  );

  const handleAfterGetData = function (data) {
    GeneratePdf(data, valueFecha.replace("-", "/"), valueOrden);
    setIsRequestInProgress(false);
  };

  const handleGetData = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      setIsRequestInProgress(true);
      handleFilterRequest("alcaldia-recursos-municipales-reporte-mensual", body, handleAfterGetData);
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
          {i18n.alcaldiaRecursosMunicipalesReporteMensual.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="fecha">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldFecha}
              </Form.Label>
              <Form.Control
                onChange={e => onChangeFecha(e.target.value)}
                value={valueFecha}
                type="month"
                placeholder={i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldFecha}
              />
              <Form.Text muted className={classNameFormText.year}>
                {i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldFechaText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="estado">
              <Form.Label>{i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldEstado}</Form.Label>
              <Form.Select
                onChange={onChangeEstado}
                value={valueEstado} >
                <option key="option-true" value={enumStatus.ACTIVO}>{i18n.alcaldiaVentaStatusText.activo}</option>
                <option key="option-false" value={enumStatus.ANULADO}>{i18n.alcaldiaVentaStatusText.anulado}</option>
              </Form.Select>
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldEstadoText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="orden">
              <Form.Label>{i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldOrden}</Form.Label>
              <Form.Select
                onChange={onChangeOrden}
                value={valueOrden} >
                <option key="option-false" value={"Vertical"}>{i18n.alcaldiaRecursosMunicipalesReporteMensual.Columna}</option>
                <option key="option-true" value={"Orizontal"}>{i18n.alcaldiaRecursosMunicipalesReporteMensual.Fila}</option>
              </Form.Select>
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesReporteMensual.fieldOrdenText}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleGetData} variant="primary" type="button">
              {i18n.alcaldiaRecursosMunicipalesReporteMensual.buttonGenerar}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesForm;
