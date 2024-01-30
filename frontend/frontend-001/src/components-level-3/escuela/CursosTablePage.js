import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import CursosTable from "../../components-level-2/escuela/CursosTable";

function CursosTablePage () {
  return (
    <div className="table-page">
      <NavBar />
      <CursosTable />
    </div>
  );
}

export default CursosTablePage;
