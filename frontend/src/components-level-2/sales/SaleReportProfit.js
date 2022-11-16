import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";


function SaleReportProfit() {

  function handleUpdateData(year, setReportData) {
    handleGetRequest(`sales-report/profit?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportProfitAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
    >
    </ReportGeneric>
  )
}

export default SaleReportProfit;
