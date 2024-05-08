import React from "react";
import UserTableFilterGenericByRoleAndTenantToDetails from "./../generic/UserTableFilterGenericByRoleAndTenantToDetails";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SCHOOL_DOCENTE;
const title = i18n.escuela.docentesTable;

function DoctorUserTableSelectionToDetails () {
  return (
    <UserTableFilterGenericByRoleAndTenantToDetails
      roleName={roleName}
      tableTitle={title}
    >
    </UserTableFilterGenericByRoleAndTenantToDetails>
  );
}

export default DoctorUserTableSelectionToDetails;
