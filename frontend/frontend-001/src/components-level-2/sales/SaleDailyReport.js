import React from "react";
import ReportDetailGeneric from "./generic/ReportDetailGeneric";
import enumPaths from "./../../models/enumPaths";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

function SaleDailyReport () {

  const ruteEndpoints = {
    without: (date, tenant) => {
      return `sales-report-daily?year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDate()}&tenant=${tenant}`
    },
    product: (date, tenant, filter) => {
      return `sales-report-daily?year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDate()}&tenant=${tenant}&productCriteria=${filter.product.id}`
    },
    groupProduct: (date, tenant, filter) => {
      return `sales-report-daily?year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDate()}&tenant=${tenant}&groupProductCriteria=${filter.groupProduct.id}`
    },
    client: (date, tenant, filter) => {
      return `sales-report-daily?year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDate()}&tenant=${tenant}&clientCriteriar=${filter.client.username}`
    },
    clientProduct: (date, tenant, filter) => {
      return `sales-report-daily?year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDate()}&tenant=${tenant}&productCriteria=${filter.product.id}&clientCriteriar=${filter.client.username}`
    },
    clientGroupProduct: (date, tenant, filter) => {
      return `sales-report-daily?year=${date.getFullYear()}&month=${date.getMonth() + 1}&day=${date.getDate()}&tenant=${tenant}&groupProductCriteria=${filter.groupProduct.id}&clientCriteriar=${filter.client.username}`
    },
  }

  function optionHandleGetData (date, handleData, onRequestFail, optionEndPoint, filter) {
    const tenant = window.sessionStorage.getItem("tenant");
    const endPoint = ruteEndpoints[optionEndPoint](date, tenant, filter)
    handleGetRequest(
      endPoint,
      handleData,
      onRequestFail,
      false
    )
  }

  return (
    <ReportDetailGeneric
      reportTitle={i18n.navBar.reportDailyDetail}
      typeDate={'day'}
      optionHandleGetData={optionHandleGetData}
    />
  );
}

export default SaleDailyReport;
