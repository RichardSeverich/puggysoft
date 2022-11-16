import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";


function SaleReportQuantity() {

  function handleUpdateData(year, setReportData) {
    handleGetRequest(`sales-report/quantity?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportQuantityAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
    >
    </ReportGeneric>
  )
}

export default SaleReportQuantity;
