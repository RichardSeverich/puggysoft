import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import UserDetails from "./../../components-level-2/users/UserDetails";

function UserDetailsPage () {
  return (
    <div className="user-details-page">
      <NavBar></NavBar>
      <UserDetails></UserDetails>
    </div>
  );
}

export default UserDetailsPage;
