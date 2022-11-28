import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

function SaleReportRevenue () {
  function handleUpdateData (year, setReportData) {
    handleGetRequest(`sales-report/revenue?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportRevenueAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
    >
    </ReportGeneric>
  );
}

export default SaleReportRevenue;
