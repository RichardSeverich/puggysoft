import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserTableFilterGeneric from "./../users/UserTableFilterGeneric";
import CommonLoading from "../../components-level-1/CommonLoading";
import { handleFilterRequest, handleGetRequest } from "../../actions/HandleManager";

function UserTableFilterGenericByRole (props) {
  const pageSize = 10;
  const numberPagesToShow = 10;
  const [role, setRole] = useState(null);

  // roleName should be instance of enumRoles
  const { tableArrayCustomRowButtons, roleName, tableTitle } = props;

  useEffect(() => {
    handleGetRequest(`role?roleName=${roleName}`, setRole);
  }, []);

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`users/filter/with-roles?page=${activePage - 1}&size=${pageSize}&idRole=${role.id}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`users/filter/with-roles/size?&pageSize=${pageSize}&idRole=${role.id}`, filterBody, setTotalPages);
  }

  if (role === null) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <UserTableFilterGeneric
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      pageSize={pageSize}
      numberPagesToShow={numberPagesToShow}
    >
    </UserTableFilterGeneric>
  );
}

export default UserTableFilterGenericByRole;

UserTableFilterGenericByRole.propTypes = {
  roleName: PropTypes.string,
  tableTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array
};

UserTableFilterGenericByRole.defaultProps = {
  roleName: "",
  tableTitle: "",
  tableArrayCustomRowButtons: []
};
