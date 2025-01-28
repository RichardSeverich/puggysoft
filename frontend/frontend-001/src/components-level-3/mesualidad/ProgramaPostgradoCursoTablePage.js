import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import ProgramaPostgradoCursoTable from "../../components-level-2/mensualidad/ProgramaPostgradoCursoTable";

function ProgramaPostgradoCursoTablePage () {
  return (
    <div className="programa-postgrado-table-page">
      <NavBar />
      <ProgramaPostgradoCursoTable />
    </div>
  );
}

export default ProgramaPostgradoCursoTablePage;
