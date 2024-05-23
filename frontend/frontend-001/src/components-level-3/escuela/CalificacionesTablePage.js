import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import CalificacionesTable from "../../components-level-2/escuela/CalificacionesTable";

function CalificacionesTablePage () {
  return (
    <div className="table-page">
      <NavBar />
      <CalificacionesTable />
    </div>
  );
}

export default CalificacionesTablePage;
