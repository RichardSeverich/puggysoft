import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportProfitMonthByProduct from "./../../components-level-2/sales/SaleReportProfitMonthByProduct";

function SaleReportProfitMonthByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportProfitMonthByProduct />
    </div>
  );
}

export default SaleReportProfitMonthByProductPage;
