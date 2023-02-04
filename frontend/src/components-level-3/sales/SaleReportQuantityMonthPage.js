import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantityMonth from "./../../components-level-2/sales/SaleReportQuantityMonth";

function SaleReportQuantityMonthPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantityMonth></SaleReportQuantityMonth>
    </div>
  );
}

export default SaleReportQuantityMonthPage;
