import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportRevenueComparativeByProduct from "./../../components-level-2/sales/SaleReportRevenueComparativeByProduct";

function SaleReportRevenueComparativeByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportRevenueComparativeByProduct />
    </div>
  );
}

export default SaleReportRevenueComparativeByProductPage;
