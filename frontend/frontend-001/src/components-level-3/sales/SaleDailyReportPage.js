import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import SaleDailyReport from "../../components-level-2/sales/SaleDailyReport";

function SaleDailyReportPage () {
  return (
    <div className="sales-report">
      <NavBar></NavBar>
      <SaleDailyReport />
    </div>
  );
}

export default SaleDailyReportPage;
