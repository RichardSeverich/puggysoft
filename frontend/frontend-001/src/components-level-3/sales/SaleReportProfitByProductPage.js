import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportProfitByProduct from "./../../components-level-2/sales/SaleReportProfitByProduct";

function SaleReportProfitByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportProfitByProduct />
    </div>
  );
}

export default SaleReportProfitByProductPage;
