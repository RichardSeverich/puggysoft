import React from "react";
import ReportGenericByMonth from "./../generic/ReportGenericByMonth";
import enumPaths from "./../../models/enumPaths";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

function SaleReportQuantityMonthComp () {
  function handleUpdateData (year, month, setReportData, onRequestFail) {
    handleGetRequest(`sales-report/quantity-month?year=${year}&month=${month}`, setReportData, onRequestFail);
  }

  return (
    <ReportGenericByMonth
      reportTitle={i18n.navBar.reportQuantityMonthCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_QUANTITY_MONTH}
    >
    </ReportGenericByMonth>
  );
}

export default SaleReportQuantityMonthComp;
