import React from "react";
import GroupProductForProductsStep2 from "./../sales/GroupProductForProductsStep2";
import enumSystems from "../../models/enumSystems";

function AssignColegiaturaToProgramaPostgradoStep2 () {
  return (
    <GroupProductForProductsStep2
      whatSystemIs = {enumSystems.PAGO_UPEA}
    />
  );
}

export default AssignColegiaturaToProgramaPostgradoStep2;
