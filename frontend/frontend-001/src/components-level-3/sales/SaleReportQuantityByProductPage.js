import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantityByProduct from "./../../components-level-2/sales/SaleReportQuantityByProduct";

function SaleReportQuantityByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantityByProduct />
    </div>
  );
}

export default SaleReportQuantityByProductPage;
