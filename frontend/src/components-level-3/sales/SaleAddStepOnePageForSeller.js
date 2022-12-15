import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SaleAddStepOneClientSelectionForSeller from "./../../components-level-2/sales/SaleAddStepOneClientSelectionForSeller";

function SaleAddStepOnePageForSeller () {
  return (
    <div className="sales-registration-step-one-page">
      <NavBar></NavBar>
      <SaleAddStepOneClientSelectionForSeller></SaleAddStepOneClientSelectionForSeller>
    </div>
  );
}

export default SaleAddStepOnePageForSeller;
