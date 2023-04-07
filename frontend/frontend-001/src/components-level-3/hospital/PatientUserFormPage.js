import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import PatientUserForm from "./../../components-level-2/hospital/PatientUserForm";

function PatientUserFormPage () {
  return (
    <div className="patient-form-page">
      <NavBar></NavBar>
      <PatientUserForm></PatientUserForm>
    </div>
  );
}

export default PatientUserFormPage;
