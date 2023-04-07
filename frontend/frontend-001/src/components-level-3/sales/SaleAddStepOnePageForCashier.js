import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleAddStepOneClientSelectionForCashier from "./../../components-level-2/sales/SaleAddStepOneClientSelectionForCashier";

function SaleAddStepOnePageForCashier () {
  return (
    <div className="sales-registration-step-one-page">
      <NavBar></NavBar>
      <SaleAddStepOneClientSelectionForCashier></SaleAddStepOneClientSelectionForCashier>
    </div>
  );
}

export default SaleAddStepOnePageForCashier;
