import React from "react";
import UserFormGenericByRole from "./../users/UserFormGenericByRole";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.HOSPITAL_DOCTOR;

function DoctorUserForm () {
  // userDetailsDoctor
  return (
    <UserFormGenericByRole
      title={i18n.doctorUserForm.title}
      roleName={roleName}
    >
    </UserFormGenericByRole>
  );
}

export default DoctorUserForm;
