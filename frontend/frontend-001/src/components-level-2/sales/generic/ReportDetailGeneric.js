import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import CommonLoading from "../../../components-level-1/CommonLoading";
import ChartVerticalBar from "../../../components-level-1/ChartVerticalBar";
import ChartHorizontalBar from "../../../components-level-1/ChartHorizontalBar";
import ChartLine from "../../../components-level-1/ChartLine";
import enumChartType from "../../../models/enumChartType";
import { useDispatch } from "react-redux";
import enumBootstrapVariant from "./../../../models/enumBootstrapVariant";
import { openCommonMessage } from "./../../../redux/reducers/reducerCommonMessage";
import i18n from "../../../i18n/i18n";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import converterMonthNumToLabel from "../../../tools/converterMonthNumToLabel";
import CommonMessage from "../../../components-level-1/CommonMessage";
import reportPdf from "../../../tools/sales/pdfBuilderReportGeneric";
import dateFormat from "../../../tools/dateFormat";
import enumRoles from "./../../../models/users/enumRoles";
import { handleGetRequest } from "../../../actions/HandleManager";
import ReportDetailModals from "./ReportDetailModals";
import { filterReportDetail, enumPdfStatus } from "../../../models/sales/reportDetail";
import { validateTemplateNew, controlValidation, handleValidation } from "../../../validations/sales/HandleReportDetailValidations";

function ReportDetailGeneric({
  reportTitle,
  typeDate,
  optionHandleGetData,
}) {
  const dispatch = useDispatch();
  const [optionGetData, setOptionGetData] = useState("without");
  const [stateGenerate, setStateGenerate] = useState(enumPdfStatus.NONE);

  const [validateTemplate, setValidateTemplate] = useState({...validateTemplateNew});
  const [filterEnable, setFilterEnable] = useState(false);
  const [filterForm, setFilterForm] = useState({ ...filterReportDetail });
  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [product, setProduct] = useState({name: ""});
  const [groupProduct, setGroupProduct] = useState({name: ""});
  const [client, setClient] = useState({name: ""});

  const [tableVisible, setTableVisible] = useState(false);
  const [getOption, setgetOption] = useState("");
  const [selectSet,] = useState({
    product: setProduct,
    groupProduct: setGroupProduct,
    client: setClient
  });
  const roleName = enumRoles.SALES_CLIENT;
  const [role, setRole] = useState()

  useEffect(() => {
    handleGetRequest(`role?roleName=${roleName}`, setRole, () => {}, false);
  }, []);

  const generatePdf = async (data) => {
    const toolsToPdf = {
      typeDate,
      date,
      product,
      groupProduct,
      client,
      optionGetData,
    }
    setStateGenerate(enumPdfStatus.GENERATING);
    await reportPdf(data, setStateGenerate, toolsToPdf);
  }
  
  const resetValueOfFilters = () => {
    setProduct({name: ""});
    setGroupProduct({name: ""});
    setClient({name: ""});
  }

  const showErrorMessage = function (response, errorMessage) {
    setStateGenerate(enumPdfStatus.NONE);
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.errorMessages.errorTitle,
      messageModalBody: errorMessage,
      messageModalVariant: enumBootstrapVariant.DANGER
    }));
  };

  const showValidationMessage = function () {
    dispatch(openCommonMessage({
      isMessageModalVisible: true,
      messageModalTitle: i18n.errorMessages.validationErrorTitle,
      messageModalBody: i18n.errorMessages.validationError,
      messageModalVariant: enumBootstrapVariant.DANGER
    }));
  };

  const getBody = function () {
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      date,
      product,
      groupProduct,
      client,
      tenant,
    };
    return body;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = getBody();
    const isValid = handleValidation(validateTemplate);
    if (isValid) {
      setStateGenerate(enumPdfStatus.GET_DATA)
      optionHandleGetData(date, generatePdf, showErrorMessage, optionGetData, { product, groupProduct, client })
    } else {
      showValidationMessage();
    }
    setValidated(true);
  };
  return <>
    <Modal
      size="lg"
      show={tableVisible}
      onHide={() => setTableVisible(false)}
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <ReportDetailModals
          getOption={getOption}
          setSelect={selectSet[getOption]}
          setTableVisible={setTableVisible}
          setValidateTemplate={setValidateTemplate}
          role={role}
        />
      </Modal.Body>
    </Modal>
    <Row className="justify-content-center">
      <Row className="justify-content-center">
        <Col xs="3">
          <Form.Check
            className="position-absolute"
            type="switch"
            id="switch-filter"
            label={i18n.commonReport.filterEnabled}
            value={filterEnable}
            onChange={() => {
              if (filterEnable) {
                setFilterEnable(false);
                setOptionGetData('without');
                setFilterForm({ ...filterReportDetail});
                setValidateTemplate({...validateTemplateNew})
              } else {
                setFilterEnable(true);
                setOptionGetData('product');
                setFilterForm({ ...filterReportDetail, product: true, label: 'product'});
                setValidateTemplate({ ...validateTemplateNew, product: true })
              }
            }}
          />
        </Col>
        <Col xs="auto"><Card.Header as='h3'>{reportTitle}</Card.Header></Col>
        <Col xs="3"/>
      </Row>
      <Col xs={11} sm={9} md={7} lg={6} xl={5} xxl={4}>
        <Form
          onSubmit={handleSubmit}
          className="mt-3"
          noValidate
          validated={validated}
        >
          {typeDate === "day"
            && <Form.Group className="mt-3" controlId="date">
              <Form.Label>{i18n.commonReport.dateSelection}</Form.Label>
              <Form.Control
                value={dateFormat.optionFormDate(date, typeDate)}
                type="date"
                onChange={(event) => {
                  const [year, month, day] = event.target.value.split("-").map(Number);
                  setDate(new Date(Date.UTC(year, month - 1, day, 12, 0, 0)));
                }}
              />
            </Form.Group>
          }
          {typeDate === "month"
            &&
            <Form.Group className="mt-3" controlId="date-month">
              <Form.Label>{i18n.commonReport.monthSelection}</Form.Label>
              <Form.Select
                onChange={(event) => {
                  setMonth(event.target.value);
                  setDate(new Date(Date.UTC(date.getFullYear(), event.target.value - 1, 1, 12, 0, 0)));
                }}
                value={month} >
                <option key="1" value={1}>{i18n.commonMonths.january}</option>
                <option key="2" value={2}>{i18n.commonMonths.february}</option>
                <option key="3" value={3}>{i18n.commonMonths.march}</option>
                <option key="4" value={4}>{i18n.commonMonths.april}</option>
                <option key="5" value={5}>{i18n.commonMonths.may}</option>
                <option key="6" value={6}>{i18n.commonMonths.june}</option>
                <option key="7" value={7}>{i18n.commonMonths.july}</option>
                <option key="8" value={8}>{i18n.commonMonths.august}</option>
                <option key="9" value={9}>{i18n.commonMonths.september}</option>
                <option key="10" value={10}>{i18n.commonMonths.october}</option>
                <option key="11" value={11}>{i18n.commonMonths.november}</option>
                <option key="12" value={12}>{i18n.commonMonths.december}</option>
              </Form.Select>
            </Form.Group>
          }
          {(typeDate === "year" || typeDate === "month")
            &&
            <Form.Group className="mt-3" controlId="date-year">
              <Form.Label>{i18n.commonReport.yearSelection}</Form.Label>
              <Form.Control
                value={year}
                type="number"
                min="1900"
                max="3000"
                onChange={(event) => {
                  setYear(event.target.value);
                  setDate(new Date(Date.UTC(event.target.value, date.getMonth(), 1, 12, 0, 0)));
                }}
              />
              <Form.Control.Feedback type="invalid">
                {i18n.commonReport.yearInvalid}
              </Form.Control.Feedback>
            </Form.Group>
          }
          { filterEnable &&
            <Form.Group className="mt-3" controlId="filter">
              <Form.Label>{i18n.commonReport.filterSelection}</Form.Label>
              <Form.Select
                value={filterForm.label} 
                onChange={(event) => {
                  setOptionGetData(event.target.value);
                  setFilterForm({ ...filterReportDetail, [event.target.value]: true, label: event.target.value });
                  controlValidation(event.target.value, setValidateTemplate);
                  resetValueOfFilters();
                }}
              >
                <option key="product" value={"product"}>{i18n.saleReport.product}</option>
                <option key="groupProduct" value={"groupProduct"}>{i18n.saleReport.groupProduct}</option>
                <option key="client" value={"client"}>{i18n.saleReport.client}</option>
                <option key="clientProduct" value={"clientProduct"}>{i18n.saleReport.clientProduct}</option>
                <option key="clientGroupProduct" value={"clientGroupProduct"}>{i18n.saleReport.clientGroupProduct}</option>
              </Form.Select>
              <Form.Control.Feedback type="valid">
                {i18n.commonReport.filterSelection}
              </Form.Control.Feedback>
            </Form.Group>
          }
          {(filterForm.product || filterForm.clientProduct) &&
            <Form.Group className="mt-3" controlId="product">
              <Form.Label>{i18n.commonReport.productSelection}</Form.Label>
              <Form.Control
                readOnly
                value={product.name !== ""? product.name : 'Producto'}
                isInvalid={validateTemplate.product}
                type="text"
                onClick={() => {
                  setgetOption("product")
                  setTableVisible(true);
                }}
              />
              <Form.Control.Feedback type="invalid">
                {i18n.commonReport.productSelection}
              </Form.Control.Feedback>
            </Form.Group>
          }
          {(filterForm.groupProduct || filterForm.clientGroupProduct) &&
            <Form.Group className="mt-3" controlId="categorie">
              <Form.Label>{i18n.commonReport.groupProductSelection}</Form.Label>
              <Form.Control
                readOnly
                value={groupProduct.name !== ""? groupProduct.name : 'Categoria'}
                isInvalid={validateTemplate.groupProduct}
                type="text"
                onClick={() => {
                  setgetOption("groupProduct")
                  setTableVisible(true);
                }}
              />
              <Form.Control.Feedback type="invalid">
                {i18n.commonReport.groupProductSelection}
              </Form.Control.Feedback>
            </Form.Group>
          }
          {(filterForm.client || filterForm.clientProduct || filterForm.clientGroupProduct) &&
            <Form.Group className="mt-3" controlId="client">
              <Form.Label>{i18n.commonReport.clientSelection}</Form.Label>
              <Form.Control
                readOnly
                value={client.name !== ""? client.name : 'Cliente'}
                isInvalid={validateTemplate.client}
                type="text"
                onClick={() => {
                  setgetOption("client")
                  setTableVisible(true);
                }}
              />
              <Form.Control.Feedback type="invalid">
                {i18n.commonReport.clientSelection}
              </Form.Control.Feedback>
            </Form.Group>
          }
          <Button
            type="submit"
            className="mt-3"
            disabled={!(stateGenerate === enumPdfStatus.NONE)}
          >
            {
              (stateGenerate === enumPdfStatus.NONE  && i18n.saleReport.buttonGenerate) ||
              (stateGenerate === enumPdfStatus.GET_DATA  && i18n.saleReport.buttonGetData) ||
              (stateGenerate === enumPdfStatus.GENERATING  && i18n.saleReport.buttonGenerating)
            }
          </Button>
        </Form>
      </Col>
    </Row>
  </>
}

export default ReportDetailGeneric;