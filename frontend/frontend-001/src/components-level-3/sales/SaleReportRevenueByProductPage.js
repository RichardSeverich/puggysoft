import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportRevenueByProduct from "./../../components-level-2/sales/SaleReportRevenueByProduct";

function SaleReportRevenueByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportRevenueByProduct />
    </div>
  );
}

export default SaleReportRevenueByProductPage;
