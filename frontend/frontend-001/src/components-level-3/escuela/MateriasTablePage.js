import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import MateriasTable from "../../components-level-2/escuela/MateriasTable";

function MateriasTablePage () {
  return (
    <div className="table-page">
      <NavBar />
      <MateriasTable />
    </div>
  );
}

export default MateriasTablePage;
