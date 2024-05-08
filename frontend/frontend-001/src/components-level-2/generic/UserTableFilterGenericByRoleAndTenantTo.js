import React from "react-router";
import PropTypes from "prop-types";
import UserTableFilterGenericReduced from "./UserTableFilterGenericByRoleAndTenant";
import i18n from "../../i18n/i18n";

function UserTableFilterGenericByRoleAndTenantTo (props) {
  const { tableTitle, roleName, tableSubTitle } = props;

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: props.handleSelection,
      text: i18n.roleTable.selectButton
    }
  ];

  return (
    <UserTableFilterGenericReduced
      roleName={roleName}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
    >
    </UserTableFilterGenericReduced>
  );
}

export default UserTableFilterGenericByRoleAndTenantTo;

UserTableFilterGenericByRoleAndTenantTo.propTypes = {
  roleName: PropTypes.string,
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  handleSelection: PropTypes.func,
  tableArrayCustomRowButtons: PropTypes.array
};

UserTableFilterGenericByRoleAndTenantTo.defaultProps = {
  roleName: "",
  tableTitle: "",
  tableSubTitle: undefined,
  handleSelection: () => { },
  tableArrayCustomRowButtons: []
};
