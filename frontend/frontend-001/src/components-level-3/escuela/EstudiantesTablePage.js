import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import EstudiantesTable from "../../components-level-2/escuela/EstudiantesTable";

function EstudiantesTablePage () {
  return (
    <div className="table-page">
      <NavBar />
      <EstudiantesTable />
    </div>
  );
}

export default EstudiantesTablePage;
