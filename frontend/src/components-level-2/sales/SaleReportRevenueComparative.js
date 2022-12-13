import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportRevenueComparative () {
  function handleUpdateData (year, setReportData) {
    handleGetRequest(`sales-report/revenue?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportRevenueAnnualCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_REVENUE}
    >
    </ReportGeneric>
  );
}

export default SaleReportRevenueComparative;
