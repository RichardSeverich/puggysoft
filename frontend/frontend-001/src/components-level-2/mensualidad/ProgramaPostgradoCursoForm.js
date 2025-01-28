import React from "react";
import CursosForm from "./../escuela/CursosForm";
import enumSystems from "../../models/enumSystems";

function ProgramaPostgradoCursoForm () {
  return (
    <CursosForm
      whatSystemIs = {enumSystems.MENSUALIDAD}
    />
  );
}

export default ProgramaPostgradoCursoForm;
