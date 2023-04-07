import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import RoleTableFilter from "./../../components-level-2/users/RoleTableFilter";

function RoleTableFilterPage () {
  return (
    <div className="role-table-page">
      <NavBar></NavBar>
      <RoleTableFilter></RoleTableFilter>
    </div>
  );
}

export default RoleTableFilterPage;
