import React from "react";
import CuotaPagoTable from "./../mensualidad/CuotaPagoTable";
import enumSystems from "../../models/enumSystems";

function ColegiaturaMatriculaTable () {
  return (
    <CuotaPagoTable
      whatSystemIs = {enumSystems.PAGO_UPEA}
    />
  );
}

export default ColegiaturaMatriculaTable;
