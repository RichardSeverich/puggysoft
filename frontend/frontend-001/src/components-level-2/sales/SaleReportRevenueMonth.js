import React from "react";
import ReportGenericByMonth from "./../generic/ReportGenericByMonth";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportRevenueMonth () {
  function handleUpdateData (year, month, setReportData, onRequestFail) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleGetRequest(`sales-report/revenue-month?year=${year}&month=${month}&tenant=${tenant}`,
      setReportData, onRequestFail);
  }

  return (
    <ReportGenericByMonth
      reportTitle={i18n.navBar.reportRevenueMonth}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_REVENUE_MONTH_COMP}
    />
  );
}

export default SaleReportRevenueMonth;
