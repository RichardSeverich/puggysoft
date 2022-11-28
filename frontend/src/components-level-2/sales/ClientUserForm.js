import React from "react";
import UserFormGenericByRole from "./../users/UserFormGenericByRole";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SALES_CLIENT;

function ClientUserForm () {
  return (
    <UserFormGenericByRole
      title={i18n.clientForm.title}
      roleName={roleName}
    >
    </UserFormGenericByRole>
  );
}

export default ClientUserForm;
