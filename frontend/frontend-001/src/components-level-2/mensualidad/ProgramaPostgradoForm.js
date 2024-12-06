import React from "react";
import ProductGroupsForm from "./../sales/ProductGroupsForm";
import enumSystems from "../../models/enumSystems";

function ProgramaPostgradoForm () {
  return (
    <ProductGroupsForm
      whatSystemIs = {enumSystems.MENSUALIDAD}
    />
  );
}

export default ProgramaPostgradoForm;
