import React from "react";
import CursosTable from "./../escuela/CursosTable";
import enumSystems from "../../models/enumSystems";

function ProgramaPostgradoCursoTable () {
  return (
    <CursosTable
      whatSystemIs = {enumSystems.MENSUALIDAD}
    />
  );
}

export default ProgramaPostgradoCursoTable;
