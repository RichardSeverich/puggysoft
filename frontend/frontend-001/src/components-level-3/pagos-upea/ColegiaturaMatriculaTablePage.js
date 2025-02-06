import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import ColegiaturaMatriculaTable from "../../components-level-2/pagos-upea/ColegiaturaMatriculaTable";

function ColegiaturaMatriculaTablePage () {
  return (
    <div className="colegiatura-matricula-table-page">
      <NavBar />
      <ColegiaturaMatriculaTable />
    </div>
  );
}

export default ColegiaturaMatriculaTablePage;
