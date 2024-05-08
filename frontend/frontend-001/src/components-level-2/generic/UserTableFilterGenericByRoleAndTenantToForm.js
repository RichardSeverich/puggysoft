import React, { useHistory } from "react-router";
import PropTypes from "prop-types";
import UserTableFilterGenericReduced from "./UserTableFilterGenericByRoleAndTenant";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";

function UserTableFilterGenericByRoleAndTenantToDetails (props) {
  const history = useHistory();

  const { tableTitle, roleName } = props;

  function handleSelection (userData) {
    history.push({
      pathname: enumPaths.USERS_FORM,
      state: {
        data: userData,
        edit: true
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.roleTable.selectButton
    }
  ];

  return (
    <UserTableFilterGenericReduced
      roleName={roleName}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericReduced>
  );
}

export default UserTableFilterGenericByRoleAndTenantToDetails;

UserTableFilterGenericByRoleAndTenantToDetails.propTypes = {
  roleName: PropTypes.string,
  tableTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array
};

UserTableFilterGenericByRoleAndTenantToDetails.defaultProps = {
  roleName: "",
  tableTitle: "",
  tableArrayCustomRowButtons: []
};
