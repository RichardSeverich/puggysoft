import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SalesTableFilterAll from "./../../components-level-2/sales/SalesTableFilterAll";

function SalesTableFilterAllPage () {
  return (
    <div className="sale-table-page">
      <NavBar></NavBar>
      <SalesTableFilterAll></SalesTableFilterAll>
    </div>
  );
}

export default SalesTableFilterAllPage;
