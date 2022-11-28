import React from "react";
import UserTableFilterGenericByRoleToDetails from "./../generic/UserTableFilterGenericByRoleToDetails";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

function ClientUserTableSelectionToDetails () {
  const tableTitle = i18n.clientTable.titleSelectionToDetails;
  const roleName = enumRoles.SALES_CLIENT;

  return (
    <UserTableFilterGenericByRoleToDetails
      roleName={roleName}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericByRoleToDetails>
  );
}

export default ClientUserTableSelectionToDetails;
