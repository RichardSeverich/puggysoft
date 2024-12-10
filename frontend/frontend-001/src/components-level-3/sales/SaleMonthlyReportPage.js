import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import SaleMonthlyReport from "../../components-level-2/sales/SaleMonthlyReport";

function SaleMonthlyReportPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleMonthlyReport />
    </div>
  );
}

export default SaleMonthlyReportPage;
