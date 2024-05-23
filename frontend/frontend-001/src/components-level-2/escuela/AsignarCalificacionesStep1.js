import React from "react";
import { useHistory } from "react-router";
import UserTableFilterGenericByRoleAndTenantTo from "./../generic/UserTableFilterGenericByRoleAndTenantTo";
import enumRoles from "./../../models/users/enumRoles";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";
import PropTypes from "prop-types";

const roleName = enumRoles.SCHOOL_ESTUDIANTE;
const title = i18n.escuela.estudianteTable;
const tableSubTitle = i18n.escuela.estudianteTableTitleSub;

function EstudiantesTable ({ isMostrar }) {
  const history = useHistory();
  function handleSelection (estudianteSelected) {
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_TWO,
      state: {
        estudianteSelected,
        isMostrar
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

EstudiantesTable.propTypes = {
  isMostrar: PropTypes.bool
};

EstudiantesTable.defaultProps = {
  isMostrar: false
};

export default EstudiantesTable;
