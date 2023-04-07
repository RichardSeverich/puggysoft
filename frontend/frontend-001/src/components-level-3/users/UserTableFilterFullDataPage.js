import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import UserTableFilterFullData from "./../../components-level-2/users/UserTableFilterFullData";

function UserTableFilterFullDataPage () {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterFullData></UserTableFilterFullData>
    </div>
  );
}

export default UserTableFilterFullDataPage;
