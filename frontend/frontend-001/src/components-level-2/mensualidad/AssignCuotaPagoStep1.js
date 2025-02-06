import React from "react";
import GroupProductForProductsStep1 from "./../sales/GroupProductForProductsStep1";
import enumSystems from "../../models/enumSystems";

function AssignCuotaPagoStep1 () {
  return (
    <GroupProductForProductsStep1
      whatSystemIs = {enumSystems.MENSUALIDAD}
    />
  );
}

export default AssignCuotaPagoStep1;
