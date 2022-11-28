import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleAddStepOneClientSelection from "./../../components-level-2/sales/SaleAddStepOneClientSelection";

function SaleAddStepOnePage () {
  return (
    <div className="sales-registration-step-one-page">
      <NavBar></NavBar>
      <SaleAddStepOneClientSelection></SaleAddStepOneClientSelection>
    </div>
  );
}

export default SaleAddStepOnePage;
