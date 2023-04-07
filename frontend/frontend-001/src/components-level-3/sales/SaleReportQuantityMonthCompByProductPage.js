import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantityMonthCompByProduct from "./../../components-level-2/sales/SaleReportQuantityMonthCompByProduct";

function SaleReportQuantityMonthCompByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantityMonthCompByProduct />
    </div>
  );
}

export default SaleReportQuantityMonthCompByProductPage;
