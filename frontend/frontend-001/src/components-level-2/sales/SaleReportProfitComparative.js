import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportProfitComparative () {
  function handleUpdateData (year, setReportData, onRequestFail) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleGetRequest(`sales-report/profit?year=${year}&tenant=${tenant}`, setReportData, onRequestFail);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportProfitAnnualCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_PROFIT}
    >
    </ReportGeneric>
  );
}

export default SaleReportProfitComparative;
