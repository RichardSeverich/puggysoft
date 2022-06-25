import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonTablePagination from '../../components-common/CommonTablePagination';
import CommonLoading from '../../components-common/CommonLoading';
import { handleFilterRequest, handleAddRequest, handleDeleteRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayUserDataFieldsByRole"
import arrayColumns from "../../models/users/arrayUserColumnsByRole";
import getColumnsFilterModel from "../../models/users/arrayUserColumnsFilterByRole";
import useInput from "./../../hooks/useInput";
import enumCompareOperators from "./../../models/enumCompareOperators";
import fixArrayData from "../../tools/users/fixArrayData"

import "./user-table-filter-by-role.css"

const pageSize = 10;
const numberPagesToShow = 10;

function UserTableFilterByRoles() {

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  const [arrayData2, setArrayData2] = useState(null);
  const [totalPages2, setTotalPages2] = useState(null);
  const [activePage2, setActivePage2] = useState(1);
  const [initialPage2, setInitialPage2] = useState(1);

  const history = useHistory();

  const routerProps = history && history.location && history.location.state;
  const roleSelected = routerProps.data;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaUsername, onChange: criteriaOnChangeUsername, setValue: criteriaSetUsername } = useInput('');
  const { value: criteriaDni, onChange: criteriaOnChangeDni, setValue: criteriaSetDni } = useInput('');
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput('');
  const { value: criteriaLastName, onChange: criteriaOnChangeLastName, setValue: criteriaSetLastName } = useInput('');

  const { value: criteriaUsername2, onChange: criteriaOnChangeUsername2, setValue: criteriaSetUsername2 } = useInput('');
  const { value: criteriaDni2, onChange: criteriaOnChangeDni2, setValue: criteriaSetDni2 } = useInput('');
  const { value: criteriaName2, onChange: criteriaOnChangeName2, setValue: criteriaSetName2 } = useInput('');
  const { value: criteriaLastName2, onChange: criteriaOnChangeLastName2, setValue: criteriaSetLastName2 } = useInput('');

  // FILTER OPERATORS
  const { value: operatorUsername, onChange: operatorOnChangeUsername, setValue: operatorSetUsername } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorDni, onChange: operatorOnChangeDni, setValue: operatorSetDni } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLastName, onChange: operatorOnChangeLastName, setValue: operatorSetLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);

  const { value: operatorUsername2, onChange: operatorOnChangeUsername2, setValue: operatorSetUsername2 } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorDni2, onChange: operatorOnChangeDni2, setValue: operatorSetDni2 } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName2, onChange: operatorOnChangeName2, setValue: operatorSetName2 } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLastName2, onChange: operatorOnChangeLastName2, setValue: operatorSetLastName2 } = useInput(enumCompareOperators.TEXT_CONTAINS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /*USERNAME*/ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
    /*DNI*/ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
    /*NAME*/ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /*LAST NAME*/ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName,
  );

  const columnsFilterModel = getColumnsFilterModel(
    /*USERNAME*/ criteriaUsername2, criteriaOnChangeUsername2, criteriaSetUsername2, operatorUsername2, operatorOnChangeUsername2, operatorSetUsername2,
    /*DNI*/ criteriaDni2, criteriaOnChangeDni2, criteriaSetDni2, operatorDni2, operatorOnChangeDni2, operatorSetDni2,
    /*NAME*/ criteriaName2, criteriaOnChangeName2, criteriaSetName2, operatorName2, operatorOnChangeName2, operatorSetName2,
    /*LAST NAME*/ criteriaLastName2, criteriaOnChangeLastName2, criteriaSetLastName2, operatorLastName2, operatorOnChangeLastName2, operatorSetLastName2,
  );

  function updateArrayData(arrayData) {
    let arrayFixed = fixArrayData(arrayData);
    setArrayData(arrayFixed);
  }

  function updateArrayDat2(arrayData) {
    let arrayFixed = fixArrayData(arrayData);
    setArrayData2(arrayFixed);
  }

  useEffect(() => {
    const filterBody = getFilterBody();
    handleFilterRequest(`users/filter/without-roles?page=${activePage - 1}&size=${pageSize}&idRole=${roleSelected.id}`, filterBody, updateArrayData);
    handleFilterRequest(`users/filter/without-roles/size?&pageSize=${pageSize}&idRole=${roleSelected.id}`, filterBody, setTotalPages);
  }, [activePage]);

  useEffect(() => {
    const filterBody2 = columnsFilterModel.getFilterBody();
    handleFilterRequest(`users/filter/with-roles?page=${activePage2 - 1}&size=${pageSize}&idRole=${roleSelected.id}`, filterBody2, updateArrayDat2);
    handleFilterRequest(`users/filter/with-roles/size?&pageSize=${pageSize}&idRole=${roleSelected.id}`, filterBody2, setTotalPages2);
  }, [activePage]);

  const handleFilter = () => {
    const filterBody = getFilterBody();
    setArrayData(null);
    setTotalPages(null);
    handleFilterRequest(`users/filter/without-roles?page=${activePage - 1}&size=${pageSize}&idRole=${roleSelected.id}`, filterBody, updateArrayData);
    handleFilterRequest(`users/filter/without-roles/size?&pageSize=${pageSize}&idRole=${roleSelected.id}`, filterBody, setTotalPages);
    setActivePage(1)
  }

  const handleFilter2 = () => {
    setArrayData2(null);
    setTotalPages2(null);
    const filterBody2 = columnsFilterModel.getFilterBody();
    handleFilterRequest(`users/filter/with-roles?page=${activePage2 - 1}&size=${pageSize}&idRole=${roleSelected.id}`, filterBody2, updateArrayDat2);
    handleFilterRequest(`users/filter/with-roles/size?&pageSize=${pageSize}&idRole=${roleSelected.id}`, filterBody2, setTotalPages2);
    setActivePage2(1)
  }

  function afterCreateUserRole(userRoleData) {
    window.location.reload();
  }

  const handleAddUserRole = function (userData) {
    const body = {
      idUser: userData.id,
      idRole: roleSelected.id
    }
    handleAddRequest('users-roles', body, afterCreateUserRole)
  }

  const handleRemoveUserRole = function (userData) {
    handleDeleteRequest(`users-roles?idUser=${userData.id}&idRole=${roleSelected.id}`);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "primary",
      handleCustom: handleAddUserRole,
      text: i18n.userRoleTableByRole.addButton
    }
  ]

  const tableArrayCustomRowButtons2 = [
    {
      variant: "danger",
      handleCustom: handleRemoveUserRole,
      text: i18n.userRoleTableByRole.removeButton
    }
  ]

  /* if (arrayData == null || totalPages == null) {
     return <CommonLoading></CommonLoading>;
   }*/

  return (
    <div className="puggysoft-user-table-by-role-container">
      <div className="puggysoft-user-table-by-role">
        {(arrayData == null || totalPages == null)
          ? <CommonLoading></CommonLoading>
          : <CommonTablePagination
            tableTitle={`${i18n.userRoleTableByRole.titleAddUsers} ${roleSelected.name}`}
            tableArrayData={arrayData}
            tableArrayDataFields={arrayDataFields}
            tableArrayColumns={arrayColumns}
            tableArrayCustomRowButtons={tableArrayCustomRowButtons}
            paginationTotalPages={totalPages}
            paginationNumberPagesToShow={numberPagesToShow}
            paginationInitialPage={initialPage}
            paginationActivePage={activePage}
            paginationSetArrayData={setArrayData}
            paginationSetTotalPages={setTotalPages}
            paginationSetActivePage={setActivePage}
            paginationSetInitialPage={setInitialPage}
            filterArrayColumns={arrayColumnsFilter}
            filterClear={clearFilters}
            filterHandler={handleFilter}
          ></CommonTablePagination>}
      </div>
      <div className="puggysoft-user-table-by-role">
        {(arrayData2 == null || totalPages2 == null)
          ? <CommonLoading></CommonLoading>
          : <CommonTablePagination
            tableTitle={`${i18n.userRoleTableByRole.titleRemoveUsers} ${roleSelected.name}`}
            tableArrayData={arrayData2}
            tableArrayDataFields={arrayDataFields}
            tableArrayColumns={arrayColumns}
            tableArrayCustomRowButtons={tableArrayCustomRowButtons2}
            paginationTotalPages={totalPages2}
            paginationNumberPagesToShow={numberPagesToShow}
            paginationInitialPage={initialPage2}
            paginationActivePage={activePage2}
            paginationSetArrayData={setArrayData2}
            paginationSetTotalPages={setTotalPages2}
            paginationSetActivePage={setActivePage2}
            paginationSetInitialPage={setInitialPage2}
            filterArrayColumns={columnsFilterModel.arrayColumnsFilter}
            filterClear={columnsFilterModel.clearFilters}
            filterHandler={handleFilter2}
          ></CommonTablePagination>}
      </div>
    </div>
  );
}

export default UserTableFilterByRoles;
