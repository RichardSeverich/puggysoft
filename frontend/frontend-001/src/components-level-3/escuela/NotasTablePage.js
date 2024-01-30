import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import NotasTable from "../../components-level-2/escuela/NotasTable";

function NotasTablePage () {
  return (
    <div className="table-page">
      <NavBar />
      <NotasTable />
    </div>
  );
}

export default NotasTablePage;
