import React, { useState } from "react";
import { useHistory } from "react-router";

import ReportGeneric from "./../generic/ReportGeneric";
import CommonMessage from "./../../components-level-1/CommonMessage";

import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";

function SaleReportProfitComparative () {
  const history = useHistory();
  const productData = history !== undefined &&
    history.location !== undefined &&
    history.location.state !== undefined &&
    history.location.state.productData !== undefined
    ? history.location.state.productData
    : undefined;

  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageText, setMessageText] = useState("");

  function handleUpdateData (year, setReportData, onRequestFail) {
    if (productData && productData.id) {
      const tenant = window.sessionStorage.getItem("tenant");
      handleGetRequest(`sales-report/profit-by-product?year=${year}&idProduct=${productData.id}&tenant=${tenant}`,
        setReportData, onRequestFail);
    } else {
      setMessageTitle(i18n.errorMessages.errorTitle);
      setMessageText(i18n.saleErrorMessages.productNotSelected);
      setIsMessageVisible(true);
    }
  }

  return (
    <>
      <ReportGeneric
        reportTitle={i18n.navBar.reportProfitAnnualCompare}
        handleUpdateData={handleUpdateData}
        enableTwoYears={true}
        productData={productData}
        pathNameOneOrTwoYears={enumPaths.SALES_REPORT_PROFIT_BY_PRODUCT}
      />
      <CommonMessage
        isVisible={isMessageVisible}
        setIsVisible={setIsMessageVisible}
        titleText={messageTitle}
        bodyText={messageText}
        variant="danger"
      />
    </>

  );
}

export default SaleReportProfitComparative;
