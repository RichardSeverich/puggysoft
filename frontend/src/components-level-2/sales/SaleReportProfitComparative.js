import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

function SaleReportProfitComparative () {
  function handleUpdateData (year, setReportData) {
    handleGetRequest(`sales-report/profit?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportProfitAnnualCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
    >
    </ReportGeneric>
  );
}

export default SaleReportProfitComparative;
