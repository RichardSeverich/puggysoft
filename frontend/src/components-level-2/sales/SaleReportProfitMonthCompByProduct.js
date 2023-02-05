import React from "react";
import { useHistory } from "react-router";

import ReportGenericByMonth from "./../generic/ReportGenericByMonth";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportProfitMonthCompByProduct () {
  const history = useHistory();
  const productData = history !== undefined &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.productData !== undefined
    ? history.location.state.productData
    : undefined;

  function handleUpdateData (year, month, setReportData, onRequestFail) {
    if (productData && productData.id) {
      handleGetRequest(`sales-report/profit-month-by-product?year=${year}&month=${month}&idProduct=${productData.id}`,
        setReportData,
        onRequestFail);
    } else {
      alert(i18n.saleErrorMessages.productNotSelected);
    }
  }

  return (
    <ReportGenericByMonth
      reportTitle={i18n.navBar.reportProfitMonthCompare}
      handleUpdateData={handleUpdateData}
      enableTwoYears={true}
      productData={productData}
      pathNameOneOrTwoYears={enumPaths.SALES_REPORT_PROFIT_MONTH_BY_PRODUCT}
    >
    </ReportGenericByMonth>
  );
}

export default SaleReportProfitMonthCompByProduct;
