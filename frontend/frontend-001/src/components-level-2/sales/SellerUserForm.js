import React from "react";
import UserFormGenericByRole from "./../users/UserFormGenericByRole";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

const roleName = enumRoles.SALES_SELLER;

function SellerUserForm () {
  return (
    <UserFormGenericByRole
      title={i18n.sellerForm.title}
      roleName={roleName}
    >
    </UserFormGenericByRole>
  );
}

export default SellerUserForm;
