import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleReportRevenueMonthByProduct from "./../../components-level-2/sales/SaleReportRevenueMonthByProduct";

function SaleReportRevenueMonthByProductPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleReportRevenueMonthByProduct />
    </div>
  );
}

export default SaleReportRevenueMonthByProductPage;
