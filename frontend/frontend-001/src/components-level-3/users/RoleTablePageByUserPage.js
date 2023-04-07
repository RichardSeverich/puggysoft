import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import RoleTableFilterByUsers from "./../../components-level-2/users/RoleTableFilterByUsers";

function RoleTablePage () {
  return (
    <div className="role-table-page">
      <NavBar></NavBar>
      <RoleTableFilterByUsers></RoleTableFilterByUsers>
    </div>
  );
}

export default RoleTablePage;
