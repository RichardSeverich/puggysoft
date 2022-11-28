import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportRevenueComparative from "./../../components-level-2/sales/SaleReportRevenueComparative";

function SaleReportRevenueCompPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportRevenueComparative></SaleReportRevenueComparative>
    </div>
  );
}

export default SaleReportRevenueCompPage;
