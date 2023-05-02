import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";
import enumPaths from "./../../models/enumPaths";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

function SaleReportQuantity () {
  function handleUpdateData (year, setReportData, onRequestFail) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleGetRequest(`sales-report/quantity?year=${year}&tenant=${tenant}`,
      setReportData, onRequestFail);
  }
  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportQuantityAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_QUANTITY_COMP}
    >
    </ReportGeneric>
  );
}

export default SaleReportQuantity;
