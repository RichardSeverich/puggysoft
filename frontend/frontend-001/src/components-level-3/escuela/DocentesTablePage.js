import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import DocentesTable from "../../components-level-2/escuela/DocentesTable";

function DocentesTablePage () {
  return (
    <div className="table-page">
      <NavBar />
      <DocentesTable />
    </div>
  );
}

export default DocentesTablePage;
