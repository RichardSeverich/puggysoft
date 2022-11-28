import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import RoleTable from "./../../components-level-2/users/RoleTable";

function RoleTablePage () {
  return (
    <div className="role-table-page">
      <NavBar></NavBar>
      <RoleTable></RoleTable>
    </div>
  );
}

export default RoleTablePage;
