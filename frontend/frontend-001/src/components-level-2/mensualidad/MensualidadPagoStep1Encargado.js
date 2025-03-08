import React from "react";
import { useHistory } from "react-router";
import UserTableFilterGenericByRoleAndTenantTo from "./../generic/UserTableFilterGenericByRoleAndTenantTo";
import enumRoles from "./../../models/users/enumRoles";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SCHOOL_ESTUDIANTE;
const title = i18n.escuela.estudianteTable;
const tableSubTitle = i18n.escuela.estudianteTableTitleSub;

function EstudiantesTable () {
  const history = useHistory();

  function handleSelection (estudianteSelected) {
    history.push({
      pathname: enumPaths.MENSUALIDAD_PAGO_STEP2_ENCARGADO,
      state: {
        estudianteSelected
      }
    });
  }
  return (
    <UserTableFilterGenericByRoleAndTenantTo
      roleName={roleName}
      tableTitle={title}
      handleSelection={handleSelection}
      tableSubTitle={tableSubTitle}
    >
    </UserTableFilterGenericByRoleAndTenantTo>
  );
}

export default EstudiantesTable;
