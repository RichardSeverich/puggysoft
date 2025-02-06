import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import ProgramaPostgradoTable from "../../components-level-2/pagos-upea/ProgramaPostgradoTable";

function ProgramaPostgradoTablePage () {
  return (
    <div className="programa-postgrado-table-page">
      <NavBar />
      <ProgramaPostgradoTable />
    </div>
  );
}

export default ProgramaPostgradoTablePage;
