import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import UserTableFilterByRoles from "./../../components-level-2/users/UserTableFilterByRoles";

function UserTableFilterByRolePage () {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterByRoles></UserTableFilterByRoles>
    </div>
  );
}

export default UserTableFilterByRolePage;
