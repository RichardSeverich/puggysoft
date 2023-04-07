import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportProfitComparativeByProduct from "./../../components-level-2/sales/SaleReportProfitComparativeByProduct";

function SaleReportProfitComparativeByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportProfitComparativeByProduct />
    </div>
  );
}

export default SaleReportProfitComparativeByProductPage;
