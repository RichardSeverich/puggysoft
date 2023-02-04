import React from "react";
import ReportGenericByMonth from "./../generic/ReportGenericByMonth";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportProfitMonth () {
  function handleUpdateData (year, month, setReportData, onRequestFail) {
    handleGetRequest(`sales-report/profit-month?year=${year}&month=${month}`, setReportData, onRequestFail);
  }

  return (
    <ReportGenericByMonth
      reportTitle={i18n.navBar.reportProfitMonth}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_PROFIT_MONTH_COMP}
    >
    </ReportGenericByMonth>
  );
}

export default SaleReportProfitMonth;
