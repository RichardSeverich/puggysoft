import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";


function SaleReportRevenueComparative() {

  function handleUpdateData(year, setReportData) {
    handleGetRequest(`sales-report/revenue?year=${year}`, setReportData);
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportRevenueAnnualCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
    >
    </ReportGeneric>
  )
}

export default SaleReportRevenueComparative;
