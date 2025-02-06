import React from "react";
import CursosForm from "./../escuela/CursosForm";
import enumSystems from "../../models/enumSystems";

function ProgramaPostgradoCursoForm () {
  return (
    <CursosForm
      whatSystemIs = {enumSystems.PAGO_UPEA}
    />
  );
}

export default ProgramaPostgradoCursoForm;
