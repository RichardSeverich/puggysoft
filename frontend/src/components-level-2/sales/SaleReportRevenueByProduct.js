import React from "react";
import { useHistory } from "react-router";

import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportRevenueByProduct () {
  const history = useHistory();
  const productData = history !== undefined &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.productData !== undefined
    ? history.location.state.productData
    : undefined;

  function handleUpdateData (year, setReportData, onRequestFail) {
    if (productData && productData.id) {
      handleGetRequest(`sales-report/revenue-by-product?year=${year}&idProduct=${productData.id}`, setReportData, onRequestFail);
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
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_REVENUE_COMP_BY_PRODUCT}
    >
    </ReportGeneric>
  );
}

export default SaleReportRevenueByProduct;