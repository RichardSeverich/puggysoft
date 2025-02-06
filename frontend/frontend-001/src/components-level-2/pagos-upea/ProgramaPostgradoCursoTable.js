import React from "react";
import CursosTable from "./../escuela/CursosTable";
import enumSystems from "../../models/enumSystems";

function ProgramaPostgradoCursoTable () {
  return (
    <CursosTable
      whatSystemIs = {enumSystems.PAGO_UPEA}
    />
  );
}

export default ProgramaPostgradoCursoTable;
