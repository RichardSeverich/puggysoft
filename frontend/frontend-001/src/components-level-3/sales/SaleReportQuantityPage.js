import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantity from "./../../components-level-2/sales/SaleReportQuantity";

function SaleReportQuantityPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantity></SaleReportQuantity>
    </div>
  );
}

export default SaleReportQuantityPage;
