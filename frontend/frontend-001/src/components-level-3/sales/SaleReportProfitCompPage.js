import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportProfitComparative from "./../../components-level-2/sales/SaleReportProfitComparative";

function SaleReportProfitCompPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportProfitComparative></SaleReportProfitComparative>
    </div>
  );
}

export default SaleReportProfitCompPage;
