import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SalesTableFilterInProgress from "./../../components-level-2/sales/SalesTableFilterInProgress";

function SalesTableFilterInProgressPage () {
  return (
    <div className="sale-table-page">
      <NavBar></NavBar>
      <SalesTableFilterInProgress></SalesTableFilterInProgress>
    </div>
  );
}

export default SalesTableFilterInProgressPage;
