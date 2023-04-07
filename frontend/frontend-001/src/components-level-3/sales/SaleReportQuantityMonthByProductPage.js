import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantityMonthByProduct from "./../../components-level-2/sales/SaleReportQuantityMonthByProduct";

function SaleReportQuantityMonthByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantityMonthByProduct />
    </div>
  );
}

export default SaleReportQuantityMonthByProductPage;
