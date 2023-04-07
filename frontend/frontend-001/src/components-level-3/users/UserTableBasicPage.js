import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import UserTableBasic from "./../../components-level-2/users/UserTableBasic";

function UserTableBasicPage () {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableBasic></UserTableBasic>
    </div>
  );
}

export default UserTableBasicPage;
