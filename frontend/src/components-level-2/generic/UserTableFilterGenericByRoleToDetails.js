import React, { useHistory } from "react-router";
import PropTypes from "prop-types";
import UserTableFilterGenericByRole from "./UserTableFilterGenericByRole";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";

function UserTableFilterGenericByRoleToDetails (props) {
  const history = useHistory();

  const { tableTitle, roleName } = props;

  function handleSelection (userData) {
    history.push({
      pathname: enumPaths.USERS_DETAILS,
      state: {
        data: userData
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
    <UserTableFilterGenericByRole
      roleName={roleName}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      tableTitle={tableTitle}
    >
    </UserTableFilterGenericByRole>
  );
}

export default UserTableFilterGenericByRoleToDetails;

UserTableFilterGenericByRoleToDetails.propTypes = {
  roleName: PropTypes.string,
  tableTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array
};

UserTableFilterGenericByRoleToDetails.defaultProps = {
  roleName: "",
  tableTitle: "",
  tableArrayCustomRowButtons: []
};
