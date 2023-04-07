import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import UserTableFilterEditDelete from "./../../components-level-2/users/UserTableFilterEditDelete";

function UserTableFilterEditDeletePage () {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterEditDelete></UserTableFilterEditDelete>
    </div>
  );
}

export default UserTableFilterEditDeletePage;
