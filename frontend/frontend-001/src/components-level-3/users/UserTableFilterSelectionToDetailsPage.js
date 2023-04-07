import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import UserTableFilterSelectionToDetails from "./../../components-level-2/users/UserTableFilterSelectionToDetails";

function UserTableFilterSelectionToDetailsPage () {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterSelectionToDetails></UserTableFilterSelectionToDetails>
    </div>
  );
}

export default UserTableFilterSelectionToDetailsPage;
