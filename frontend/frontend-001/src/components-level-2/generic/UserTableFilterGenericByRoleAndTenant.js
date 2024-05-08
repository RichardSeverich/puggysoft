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
  const { tableArrayCustomRowButtons, roleName, tableTitle, tableSubTitle } = props;

  useEffect(() => {
    handleGetRequest(`role?roleName=${roleName}`, setRole);
  }, [roleName]);

  function handleGetData (activePage, filterBody, updateArrayData) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleFilterRequest(`users/filter/with-roles-and-tenants?page=${activePage - 1}&size=${pageSize}&idRole=${role.id}&tenant=${tenant}`,
      filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleFilterRequest(`users/filter/with-roles-and-tenants/size?&pageSize=${pageSize}&idRole=${role.id}&tenant=${tenant}`,
      filterBody, setTotalPages);
  }

  if (role === null) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <UserTableFilterGeneric
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
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
  tableSubTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array
};

UserTableFilterGenericByRole.defaultProps = {
  roleName: "",
  tableTitle: "",
  tableSubTitle: undefined,
  tableArrayCustomRowButtons: []
};
