import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportProfit () {
  function handleUpdateData (year, setReportData, onRequestFail) {
    handleGetRequest(`sales-report/profit?year=${year}`, setReportData, onRequestFail);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportProfitAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_PROFIT_COMP}
    >
    </ReportGeneric>
  );
}

export default SaleReportProfit;
