import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantityComparativeByProduct from "./../../components-level-2/sales/SaleReportQuantityComparativeByProduct";

function SaleReportQuantityComparativeByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantityComparativeByProduct />
    </div>
  );
}

export default SaleReportQuantityComparativeByProductPage;
