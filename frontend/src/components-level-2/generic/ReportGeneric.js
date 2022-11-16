import { useState, useEffect } from "react";

import ChartVerticalBar from "./../../components-level-1/ChartVerticalBar";
import ChartHorizontalBar from "./../../components-level-1/ChartHorizontalBar";

import enumChartType from './../../models/enumChartType'
import i18n from "../../i18n/i18n";

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import "./../css/all-four-divs-side-by-side.css"
import "./../css/all-forms-inline-block.css"

function ReportGeneric({
  handleUpdateData,
  reportTitle,
  enableTwoYears
}) {
  const [chartType, setChartType] = useState(enumChartType.CHART_VERTICAL_BAR);
  const [yearOne, setYearOne] = useState(2021);
  const [yearTwo, setYearTwo] = useState(2022);
  const [datasets, setDatasets] = useState([]);
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
  ]

  function updateReportOne(reportData) {
    if (reportData) {
      const newDatasets = [
        {
          label: i18n.commonReport.year + yearOne,
          data: getData(reportData),
          backgroundColor: 'rgba(0, 0, 255, 0.6)',
        }
      ]
      if (enableTwoYears) {
        handleUpdateData(yearTwo, updateReportTwo);
        datasetAux = newDatasets;
      } else {
        setDatasets(newDatasets);
      }
    }
  }

  function updateReportTwo(reportData) {
    if (reportData) {
      const newDatasets = [
        {
          label: i18n.commonReport.year + yearTwo,
          data: getData(reportData),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }
      ]
      setDatasets([...datasetAux, ...newDatasets]);
    }
  }

  function getData(reportData) {
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
    ]
    return data;
  }

  function handleUpdateReportData() {
    if (enableTwoYears) {
      if (yearOne < 1900
        || yearOne > 3000
        || yearTwo < 1900
        || yearTwo > 3000) {
        alert(i18n.commonReport.yearValidation)
      } else {
        handleUpdateData(yearOne, updateReportOne);
      }
    } else {
      if (yearOne < 1900 || yearOne > 3000) {
        alert(i18n.commonReport.yearValidation)
      } else {
        handleUpdateData(yearOne, updateReportOne);
      }
    }
  }

  return (
    <div>
      <Card>
        <Card.Header as='h3'>{reportTitle}</Card.Header>
        <Card.Body>
          <div className="">
            <div className="puggysoft-four-divs-side-by-side-child ">
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
                    onChange={(event) => { setYearOne(event.target.value) }}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-four-divs-side-by-side-child ">
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
                    onChange={(event) => { setYearTwo(event.target.value) }}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="puggysoft-four-divs-side-by-side-child ">
              <Form.Group>
                <div className={"puggysoft-form-label"}>
                  <Form.Label>
                    {i18n.commonReport.selectChar}
                  </Form.Label>
                </div>
                <div className={"puggysoft-form-input"}><Form.Select
                  onChange={(event) => { setChartType(event.target.value) }}
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
                </Form.Select></div>
              </Form.Group>
            </div>
            <div className="puggysoft-four-divs-side-by-side-child ">
              <Form.Group>
                <Button
                  onClick={handleUpdateReportData}
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
    </div >
  )
}

export default ReportGeneric;