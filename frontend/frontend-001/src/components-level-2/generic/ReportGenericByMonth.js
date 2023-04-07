import React, { useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import CommonLoading from "../../components-level-1/CommonLoading";
import ChartVerticalBar from "./../../components-level-1/ChartVerticalBar";
import ChartHorizontalBar from "./../../components-level-1/ChartHorizontalBar";
import ChartLine from "./../../components-level-1/ChartLine";
import enumChartType from "./../../models/enumChartType";
import i18n from "../../i18n/i18n";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import converterMonthNumToLabel from "./../../tools/converterMonthNumToLabel";
import CommonMessage from "./../../components-level-1/CommonMessage";
import "./../css/all-seven-divs-side-by-side.css";
import "./report-generic-month.css";
import "./report-generic.css";

function ReportGeneric ({
  handleUpdateData,
  reportTitle,
  enableTwoYears,
  productData,
  pathNameOneOrTwoYears
}) {
  const history = useHistory();
  const [chartType, setChartType] = useState(enumChartType.CHART_VERTICAL_BAR);
  const [yearOne, setYearOne] = useState(2021);
  const [monthOne, setMonthOne] = useState(1);
  const [yearTwo, setYearTwo] = useState(enableTwoYears ? 2022 : null);
  const [monthTwo, setMonthTwo] = useState(1);
  const [datasets, setDatasets] = useState([]);
  const [labels, setLabels] = useState([]);
  let datasetAux = [];
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  function updateReportOne (reportData) {
    const aux = [];
    for (let day = 1; day <= reportData.length; day++) {
      aux.push(`${i18n.commonReport.day} ${day}`);
    }
    setLabels(aux);
    if (reportData) {
      const labelMonth = converterMonthNumToLabel(monthOne);
      const datasetLabel = `${i18n.commonReport.year} ${yearOne}, ${i18n.commonReport.month} ${labelMonth}`;
      const newDatasets = [
        {
          label: datasetLabel,
          data: reportData,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
      ];
      if (enableTwoYears) {
        handleUpdateData(yearTwo, monthTwo, updateReportTwo, onRequestFail);
        datasetAux = newDatasets;
      } else {
        setDatasets(newDatasets);
      }
    }
  }

  function onRequestFail () {
    setDatasets([]);
  }

  function updateReportTwo (reportData) {
    if (reportData) {
      const labelMonth = converterMonthNumToLabel(monthTwo);
      const datasetLabel = `${i18n.commonReport.year} ${yearTwo}, ${i18n.commonReport.month} ${labelMonth}`;
      const newDatasets = [
        {
          label: datasetLabel,
          data: reportData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)"
        }
      ];
      setDatasets([...datasetAux, ...newDatasets]);
    }
  }

  function handleUpdateReportData () {
    if (enableTwoYears) {
      if (yearOne < 1900 ||
        yearOne > 3000 ||
        yearTwo < 1900 ||
        yearTwo > 3000) {
        setMessageTitle(i18n.errorMessages.validationErrorTitle);
        setMessageText(i18n.commonReport.yearValidation);
        setIsMessageVisible(true);
      } else {
        setDatasets(null);
        handleUpdateData(yearOne, monthOne, updateReportOne, onRequestFail);
      }
    } else {
      if (yearOne < 1900 || yearOne > 3000) {
        setMessageTitle(i18n.errorMessages.validationErrorTitle);
        setMessageText(i18n.commonReport.yearValidation);
        setIsMessageVisible(true);
      } else {
        setDatasets(null);
        handleUpdateData(yearOne, monthOne, updateReportOne, onRequestFail);
      }
    }
  }

  function handleEnableDisableTwoYears () {
    const message = enableTwoYears
      ? i18n.commonReport.disableTwoYearsConfirmationMessage
      : i18n.commonReport.enableTwoYearsConfirmationMessage;
    const result = window.confirm(message);
    if (result && pathNameOneOrTwoYears && pathNameOneOrTwoYears !== "") {
      history.push({
        pathname: pathNameOneOrTwoYears,
        state: { productData: productData || undefined }
      });
    }
  }

  if (datasets === null) {
    return <CommonLoading />;
  }

  return (
    <div>
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
      <Card>
        <Card.Header as='h3'>{reportTitle}</Card.Header>
        {productData !== null && <Card.Header as='h6'>{i18n.saleReport.productName} : {productData.name}</Card.Header>}
        <Card.Body>
          <div className="">
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.commonReport.yearSelectionOne}</Form.Label>
                </div>
                <div className={"puggysoft-form-input-month"}>
                  <Form.Control
                    value={yearOne}
                    type="number"
                    min="1900"
                    max="3000"
                    onChange={(event) => {
                      setYearOne(event.target.value);
                    }}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.commonReport.monthSelectionOne}</Form.Label>
                </div>
                <div className={"puggysoft-form-select-month"}>
                  <Form.Select
                    onChange={(event) => {
                      setMonthOne(event.target.value);
                    }}
                    value={monthOne} >
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
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.commonReport.yearSelectionTwo}</Form.Label>
                </div>
                <div className={"puggysoft-form-input-month"}>
                  <Form.Control
                    disabled={!enableTwoYears}
                    value={yearTwo}
                    type="number"
                    min="1900"
                    max="3000"
                    onChange={(event) => {
                      setYearTwo(event.target.value);
                    }}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.commonReport.monthSelectionTwo}</Form.Label>
                </div>
                <div className={"puggysoft-form-select-month"}>
                  <Form.Select
                    disabled={!enableTwoYears}
                    onChange={(event) => {
                      setMonthTwo(event.target.value);
                    }}
                    value={monthTwo} >
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
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>
                    {i18n.commonReport.selectChar}
                  </Form.Label>
                </div>
                <div className={"puggysoft-form-select-chart"}>
                  <Form.Select
                    onChange={(event) => {
                      setChartType(event.target.value);
                    }}
                    value={chartType}
                  >
                    <option key='option-vertical-bar'
                      value={enumChartType.CHART_VERTICAL_BAR}>
                      {i18n.commonReport.chartVerticallBar}
                    </option>
                    <option key='option-horizontal-bar'
                      value={enumChartType.CHART_HORIZONTAL_BAR}>
                      {i18n.commonReport.chartHorizontalBar}
                    </option>
                    <option key='option-line'
                      value={enumChartType.CHART_LINE}>
                      {i18n.commonReport.chartLine}
                    </option>
                  </Form.Select>
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Label></Form.Label>
              <Form.Group>
                <Button
                  onClick={handleEnableDisableTwoYears}
                  className={"enable-disable-two-years-button"}
                  variant={enableTwoYears ? "danger" : "info"}
                  type="button">
                  {enableTwoYears ? i18n.commonReport.buttonDisableTwoYears : i18n.commonReport.buttonEnableTwoYears}
                </Button>
              </Form.Group>
            </div>
            <div className="puggysoft-seven-divs-side-by-side-child ">
              <Form.Label></Form.Label>
              <Form.Group>
                <Button
                  onClick={handleUpdateReportData}
                  className={"update-report-button"}
                  variant="primary"
                  type="button">
                  {i18n.commonReport.updateCharButton}
                </Button>
              </Form.Group>
            </div>
          </div>
        </Card.Body>
      </Card>
      {chartType === enumChartType.CHART_HORIZONTAL_BAR &&
        <ChartHorizontalBar
          title=""
          labels={labels}
          datasets={datasets}
        >
        </ChartHorizontalBar>
      }
      {chartType === enumChartType.CHART_VERTICAL_BAR &&
        <ChartVerticalBar
          title=""
          labels={labels}
          datasets={datasets}
        >
        </ChartVerticalBar>
      }

      {chartType === enumChartType.CHART_LINE &&
        <ChartLine
          title=""
          labels={labels}
          datasets={datasets}
        >
        </ChartLine>
      }
    </div >
  );
}

export default ReportGeneric;
ReportGeneric.propTypes = {
  handleUpdateData: PropTypes.func,
  reportTitle: PropTypes.string,
  enableTwoYears: PropTypes.bool,
  productData: PropTypes.object,
  pathNameOneOrTwoYears: PropTypes.string
};

ReportGeneric.defaultProps = {
  handleUpdateData: () => { },
  reportTitle: "Some title",
  enableTwoYears: false,
  productData: null,
  pathNameOneOrTwoYears: ""
};
