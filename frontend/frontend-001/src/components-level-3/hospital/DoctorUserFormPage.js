import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import DoctorUserForm from "./../../components-level-2/hospital/DoctorUserForm";

function DoctorUserFormPage () {
  return (
    <div className="doctor-form-page">
      <NavBar></NavBar>
      <DoctorUserForm></DoctorUserForm>
    </div>
  );
}

export default DoctorUserFormPage;
