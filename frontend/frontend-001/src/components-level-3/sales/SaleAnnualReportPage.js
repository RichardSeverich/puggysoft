import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import SaleYearReport from "../../components-level-2/sales/SaleYearReport";

function SaleAnnualReportPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleYearReport />
    </div>
  );
}

export default SaleAnnualReportPage;
