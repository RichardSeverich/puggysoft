import React from "react";
import { useHistory } from "react-router";
import UserTableFilterGenericByRoleAndTenantTo from "./../generic/UserTableFilterGenericByRoleAndTenantTo";
import enumRoles from "./../../models/users/enumRoles";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SCHOOL_DOCENTE;
const title = i18n.escuela.docentesTable;
const tableSubTitle = i18n.escuela.docenteTableTitleSub;

function EstudiantesTable () {
  const history = useHistory();
  function handleSelection (userData) {
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_CURSOS_A_DOCENTE_STEP_TWO,
      state: {
        data: userData
      }
    });
  }
  return (
    <UserTableFilterGenericByRoleAndTenantTo
      roleName={roleName}
      tableTitle={title}
      tableSubTitle={tableSubTitle}
      handleSelection={handleSelection}
    >
    </UserTableFilterGenericByRoleAndTenantTo>
  );
}

export default EstudiantesTable;
