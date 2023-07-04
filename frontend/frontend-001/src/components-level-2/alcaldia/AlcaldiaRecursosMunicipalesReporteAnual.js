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
import GeneratePdf from "../../tools/alcaldia/pdfBuilderReporteAnual";

import "./../css/all-forms.css";

function AlcaldiaRecursosMunicipalesForm () {
  const [classNameFormText, setClassNameFormText] = useState(classNameFormTextNew);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  // Message states
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  // Use custom hook
  const {
    value: valueYear,
    onChange: onChangeYear
  } = useInput("");
  const {
    value: valueEstado,
    onChange: onChangeEstado
  } = useInput("ACTIVO");

  const getBody = useCallback(
    function () {
      const tenant = window.sessionStorage.getItem("tenant");
      const body = {
        estadoVenta: valueEstado, // ACTIVO,ANULADO
        year: valueYear,
        tenant
      };
      return body;
    },
    [valueYear, valueEstado]
  );

  const handleAfterGetData = function (data) {
    const body = getBody();
    GeneratePdf(data, body.year);
    setIsRequestInProgress(false);
  };

  const handleGetData = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(body, setClassNameFormText);
    if (isValid) {
      setIsRequestInProgress(true);
      handleFilterRequest("alcaldia-recursos-municipales-reporte-anual", body, handleAfterGetData);
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
          {i18n.alcaldiaRecursosMunicipalesReporteAnual.title}
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="year">
              <Form.Label>
                {i18n.alcaldiaRecursosMunicipalesReporteAnual.fieldFecha}
              </Form.Label>
              <Form.Control
                onChange={onChangeYear}
                value={valueYear}
                type="number"
                placeholder={i18n.alcaldiaRecursosMunicipalesReporteAnual.fieldFecha}
              />
              <Form.Text muted className={classNameFormText.year}>
                {i18n.alcaldiaRecursosMunicipalesReporteAnual.fieldFechaText}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="estado">
              <Form.Label>{i18n.alcaldiaRecursosMunicipalesReporteAnual.fieldEstado}</Form.Label>
              <Form.Select
                onChange={onChangeEstado}
                value={valueEstado} >
                <option key="option-true" value={enumStatus.ACTIVO}>{i18n.alcaldiaVentaStatusText.activo}</option>
                <option key="option-false" value={enumStatus.ANULADO}>{i18n.alcaldiaVentaStatusText.anulado}</option>
              </Form.Select>
              <Form.Text muted>
                {i18n.alcaldiaRecursosMunicipalesReporteAnual.fieldEstadoText}
              </Form.Text>
            </Form.Group>
            <Button onClick={handleGetData} variant="primary" type="button">
              {i18n.alcaldiaRecursosMunicipalesReporteAnual.buttonGenerar}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesForm;
