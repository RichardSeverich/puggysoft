import React from "react";
import UserFormGenericByRole from "./../users/UserFormGenericByRole";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SCHOOL_ESTUDIANTE;
const title = i18n.escuela.estudianteForm;

function EstudiantesForm () {
  return (
    <UserFormGenericByRole
      title={title}
      roleName={roleName}
    >
    </UserFormGenericByRole>
  );
}

export default EstudiantesForm;
