import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportQuantityComparative from "./../../components-level-2/sales/SaleReportQuantityComparative";

function SaleReportQuantityCompPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportQuantityComparative></SaleReportQuantityComparative>
    </div>
  );
}

export default SaleReportQuantityCompPage;
