import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportProfitMonthCompByProduct from "./../../components-level-2/sales/SaleReportProfitMonthCompByProduct";

function SaleReportProfitMonthCompByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportProfitMonthCompByProduct />
    </div>
  );
}

export default SaleReportProfitMonthCompByProductPage;
