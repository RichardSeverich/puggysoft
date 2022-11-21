import { useHistory } from "react-router";

import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";


function SaleReportRevenueByProduct() {

  const history = useHistory();
  const productData = history !== undefined
    && history.location !== undefined
    && history.location.state !== undefined
    && history.location.state.productData !== undefined
    ? history.location.state.productData
    : undefined;

  function handleUpdateData(year, setReportData) {
    if (productData && productData.id) {
      handleGetRequest(`sales-report/revenue-by-product?year=${year}&idProduct=${productData.id}`, setReportData);
    } else {
      alert(i18n.saleErrorMessages.productNotSelected);
    }
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportRevenueAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      productData={productData}
    >
    </ReportGeneric>
  )
}

export default SaleReportRevenueByProduct;
