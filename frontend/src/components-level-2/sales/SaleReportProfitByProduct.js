import React from "react";
import { useHistory } from "react-router";

import ReportGeneric from "./../generic/ReportGeneric";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportProfit () {
  const history = useHistory();
  const productData = history !== undefined &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.productData !== undefined
    ? history.location.state.productData
    : undefined;

  function handleUpdateData (year, setReportData) {
    if (productData && productData.id) {
      handleGetRequest(`sales-report/profit-by-product?year=${year}&idProduct=${productData.id}`, setReportData);
    } else {
      alert(i18n.saleErrorMessages.productNotSelected);
    }
  }

  return (
    <ReportGeneric
      reportTitle={i18n.navBar.reportProfitAnnual}
      handleUpdateData={handleUpdateData}
      enableTwoYears={false}
      productData={productData}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_PROFIT_COMP_BY_PRODUCT}
    >
    </ReportGeneric>
  );
}

export default SaleReportProfit;
