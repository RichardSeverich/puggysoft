import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ResourceForm from "./../../components-level-2/reservation/ResourceForm";

function ResourceFormPage () {
  return (
    <div className="form-page">
      <NavBar></NavBar>
      <ResourceForm></ResourceForm>
    </div>
  );
}

export default ResourceFormPage;
