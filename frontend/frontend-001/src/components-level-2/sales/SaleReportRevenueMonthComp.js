import React from "react";
import ReportGenericByMonth from "./../generic/ReportGenericByMonth";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportRevenueMonthComp () {
  function handleUpdateData (year, month, setReportData, onRequestFail) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleGetRequest(`sales-report/revenue-month?year=${year}&month=${month}&tenant=${tenant}`,
      setReportData, onRequestFail);
  }

  return (
    <ReportGenericByMonth
      reportTitle={i18n.navBar.reportRevenueMonthCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_REVENUE_MONTH}
    />
  );
}

export default SaleReportRevenueMonthComp;
