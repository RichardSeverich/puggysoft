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
import CommonMessage from "./../../components-level-1/CommonMessage";
import "./../css/all-five-divs-side-by-side.css";
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
  const [yearTwo, setYearTwo] = useState(enableTwoYears ? 2022 : null);
  const [datasets, setDatasets] = useState([]);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");
  let datasetAux = [];
  const labels = [
    i18n.commonMonths.january,
    i18n.commonMonths.february,
    i18n.commonMonths.march,
    i18n.commonMonths.april,
    i18n.commonMonths.may,
    i18n.commonMonths.june,
    i18n.commonMonths.july,
    i18n.commonMonths.august,
    i18n.commonMonths.september,
    i18n.commonMonths.october,
    i18n.commonMonths.november,
    i18n.commonMonths.december
  ];

  function updateReportOne (reportData) {
    if (reportData) {
      const newDatasets = [
        {
          label: `${i18n.commonReport.year} ${yearOne}`,
          data: getData(reportData),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
      ];
      if (enableTwoYears) {
        handleUpdateData(yearTwo, updateReportTwo, onRequestFail);
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
      const newDatasets = [
        {
          label: `${i18n.commonReport.year} ${yearTwo}`,
          data: getData(reportData),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)"
        }
      ];
      setDatasets([...datasetAux, ...newDatasets]);
    }
  }

  function getData (reportData) {
    const data = [
      reportData.january,
      reportData.february,
      reportData.march,
      reportData.april,
      reportData.may,
      reportData.june,
      reportData.july,
      reportData.august,
      reportData.september,
      reportData.october,
      reportData.november,
      reportData.december
    ];
    return data;
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
        handleUpdateData(yearOne, updateReportOne, onRequestFail);
      }
    } else {
      if (yearOne < 1900 || yearOne > 3000) {
        setMessageTitle(i18n.errorMessages.validationErrorTitle);
        setMessageText(i18n.commonReport.yearValidation);
        setIsMessageVisible(true);
      } else {
        setDatasets(null);
        handleUpdateData(yearOne, updateReportOne, onRequestFail);
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
            <div className="puggysoft-five-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.commonReport.yearSelectionOne}</Form.Label>
                </div>
                <div className={"puggysoft-form-input"}>
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
            <div className="puggysoft-five-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>{i18n.commonReport.yearSelectionTwo}</Form.Label>
                </div>
                <div className={"puggysoft-form-input"}>
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
            <div className="puggysoft-five-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>
                    {i18n.commonReport.selectChar}
                  </Form.Label>
                </div>
                <div className={"puggysoft-form-input"}><Form.Select
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
                </Form.Select></div>
              </Form.Group>
            </div>
            <div className="puggysoft-five-divs-side-by-side-child ">
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
            <div className="puggysoft-five-divs-side-by-side-child ">
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
