import React from "react";
import UserFormGenericByRole from "./../users/UserFormGenericByRole";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.HOSPITAL_PATIENT;

function PatientUserForm () {
  // userDetailsPatient
  return (
    <UserFormGenericByRole
      title={i18n.patientUserForm.title}
      roleName={roleName}
    >
    </UserFormGenericByRole>
  );
}

export default PatientUserForm;
