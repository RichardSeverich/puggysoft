import React from "react";
import ProductGroupsTable from "./../sales/ProductGroupsTableFilterEditDelete";
import enumSystems from "../../models/enumSystems";

function ProgramaPostgradoTable () {
  return (
    <ProductGroupsTable
      whatSystemIs = {enumSystems.PAGO_UPEA}
    />
  );
}

export default ProgramaPostgradoTable;
