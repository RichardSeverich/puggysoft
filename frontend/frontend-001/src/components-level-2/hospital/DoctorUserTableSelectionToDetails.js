import React from "react";
import UserTableFilterGenericByRoleToDetails from "./../generic/UserTableFilterGenericByRoleToDetails";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

function DoctorUserTableSelectionToDetails () {
  const tableTitle = i18n.doctorTable.titleSelectionToDetails;
  const roleName = enumRoles.HOSPITAL_DOCTOR;

  return (
    <UserTableFilterGenericByRoleToDetails
      roleName={roleName}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericByRoleToDetails>
  );
}

export default DoctorUserTableSelectionToDetails;
