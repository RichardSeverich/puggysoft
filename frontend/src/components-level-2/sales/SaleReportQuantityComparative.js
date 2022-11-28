import React from "react";
import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

function SaleReportQuantityComparative () {
  function handleUpdateData (year, setReportData) {
    handleGetRequest(`sales-report/quantity?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportQuantityAnnualCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
    >
    </ReportGeneric>
  );
}

export default SaleReportQuantityComparative;
