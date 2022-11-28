import React from "react";
import UserTableFilterGenericByRoleToDetails from "./../generic/UserTableFilterGenericByRoleToDetails";
import enumRoles from "./../../models/users/enumRoles";
import i18n from "../../i18n/i18n";

function SellerUserTableSelectionToDetails () {
  const tableTitle = i18n.sellerTable.titleSelectionToDetails;
  const roleName = enumRoles.SALES_SELLER;

  return (
    <UserTableFilterGenericByRoleToDetails
      roleName={roleName}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericByRoleToDetails>
  );
}

export default SellerUserTableSelectionToDetails;
