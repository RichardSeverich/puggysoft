import React from "react";
import SaleAddStepOneClientSelection from "./SaleAddStepOneClientSelection";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";

function SaleAddStepOneClientSelectionForCashier () {
  return (
    <SaleAddStepOneClientSelection
      saleTableViewType={enumSaleTableViewType.FOR_CASHIER}
    >
    </SaleAddStepOneClientSelection>
  );
}

export default SaleAddStepOneClientSelectionForCashier;
