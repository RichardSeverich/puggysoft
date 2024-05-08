import React from "react";
import UserFormGenericByRole from "./../users/UserFormGenericByRole";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SCHOOL_DOCENTE;
const title = i18n.escuela.docentesForm;

function DocentesForm () {
  return (
    <UserFormGenericByRole
      title={title}
      roleName={roleName}
    >
    </UserFormGenericByRole>
  );
}

export default DocentesForm;
