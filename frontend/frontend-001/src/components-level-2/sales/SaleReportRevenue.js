import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportRevenue () {
  function handleUpdateData (year, setReportData, onRequestFail) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleGetRequest(`sales-report/revenue?year=${year}&tenant=${tenant}`, setReportData, onRequestFail);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportRevenueAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_REVENUE_COMP}
    >
    </ReportGeneric>
  );
}

export default SaleReportRevenue;
