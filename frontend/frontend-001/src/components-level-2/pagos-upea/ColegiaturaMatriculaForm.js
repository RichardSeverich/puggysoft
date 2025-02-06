import React from "react";
import CuotaPagoForm from "./../mensualidad/CuotaPagoForm";
import enumSystems from "../../models/enumSystems";

function ColegiaturaMatriculaForm () {
  return (
    <CuotaPagoForm
      whatSystemIs = {enumSystems.PAGO_UPEA}
    />
  );
}

export default ColegiaturaMatriculaForm;
