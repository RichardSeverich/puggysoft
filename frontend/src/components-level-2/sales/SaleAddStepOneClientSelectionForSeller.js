import React from "react";
import SaleAddStepOneClientSelection from "./SaleAddStepOneClientSelection";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";

function SaleAddStepOneClientSelectionForSeller () {
  return (
    <SaleAddStepOneClientSelection
      saleTableViewType={enumSaleTableViewType.FOR_SELLER}
    >
    </SaleAddStepOneClientSelection>
  );
}

export default SaleAddStepOneClientSelectionForSeller;
