import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportProfitMonth from "./../../components-level-2/sales/SaleReportProfitMonth";

function SaleReportProfitMonthPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportProfitMonth></SaleReportProfitMonth>
    </div>
  );
}

export default SaleReportProfitMonthPage;
