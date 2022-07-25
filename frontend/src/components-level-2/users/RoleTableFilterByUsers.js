import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonTablePagination from '../../components-level-1/CommonTablePagination';
import CommonLoading from '../../components-level-1/CommonLoading';
import { handleFilterRequest, handleAddRequest, handleDeleteRequestNew } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayRoleDataFieldsByUser"
import arrayColumns from "../../models/users/arrayRoleColumnsByUser";
import getColumnsFilterModel from "../../models/users/arrayRoleColumnsFilterByUser";
import useInput from "./../../hooks/useInput";
import enumCompareOperators from "./../../models/enumCompareOperators";
import fixArrayData from "../../tools/users/fixArrayDataRoles"

import "./role-table-filter-by-user.css"

const pageSize = 10;
const numberPagesToShow = 10;

function RoleTableFilterByUsers() {

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
  const userSelected = routerProps.data;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput('');
  const { value: criteriaId2, onChange: criteriaOnChangeId2, setValue: criteriaSetId2 } = useInput('');

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorId2, onChange: operatorOnChangeId2, setValue: operatorSetId2 } = useInput(enumCompareOperators.TEXT_CONTAINS);
 
  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /*ID*/ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  );

  const columnsFilterModel = getColumnsFilterModel(
    /*ID*/ criteriaId2, criteriaOnChangeId2, criteriaSetId2, operatorId2, operatorOnChangeId2, operatorSetId2,
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
    handleFilterRequest(`roles/filter/without-users?page=${activePage - 1}&size=${pageSize}&idUser=${userSelected.id}`, filterBody, updateArrayData);
    handleFilterRequest(`roles/filter/without-users/size?&pageSize=${pageSize}&idUser=${userSelected.id}`, filterBody, setTotalPages);
  }, [activePage]);

  useEffect(() => {
    const filterBody2 = columnsFilterModel.getFilterBody();
    handleFilterRequest(`roles/filter/with-users?page=${activePage2 - 1}&size=${pageSize}&idUser=${userSelected.id}`, filterBody2, updateArrayDat2);
    handleFilterRequest(`roles/filter/with-users/size?&pageSize=${pageSize}&idUser=${userSelected.id}`, filterBody2, setTotalPages2);
  }, [activePage]);

  const handleFilter = () => {
    const filterBody = getFilterBody();
    setActivePage(1)
    setArrayData(null);
    setTotalPages(null);
    handleFilterRequest(`roles/filter/without-users?page=${activePage - 1}&size=${pageSize}&idUser=${userSelected.id}`, filterBody, updateArrayData);
    handleFilterRequest(`roles/filter/without-users/size?&pageSize=${pageSize}&idUser=${userSelected.id}`, filterBody, setTotalPages);
  }

  const handleFilter2 = () => {
    setActivePage2(1)
    setArrayData2(null);
    setTotalPages2(null);
    const filterBody2 = columnsFilterModel.getFilterBody();
    handleFilterRequest(`roles/filter/with-users?page=${activePage2 - 1}&size=${pageSize}&idUser=${userSelected.id}`, filterBody2, updateArrayDat2);
    handleFilterRequest(`roles/filter/with-users/size?&pageSize=${pageSize}&idUser=${userSelected.id}`, filterBody2, setTotalPages2);
  }

  function afterCreateUserRole() {
    handleFilter();
    handleFilter2();
  }

  function afterDeleteUserRole() {
    handleFilter();
    handleFilter2();
  }

  const handleAddUserRole = function (roleData) {
    const body = {
      idRole: roleData.id,
      idUser: userSelected.id
    }
    handleAddRequest('users-roles', body, afterCreateUserRole)
  }

  const handleRemoveUserRole = function (roleData) {
    handleDeleteRequestNew(`users-roles?idUser=${userSelected.id}&idRole=${roleData.id}`, afterDeleteUserRole);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "primary",
      handleCustom: handleAddUserRole,
      text: i18n.userRoleTableByUser.addButton
    }
  ]

  const tableArrayCustomRowButtons2 = [
    {
      variant: "danger",
      handleCustom: handleRemoveUserRole,
      text: i18n.userRoleTableByUser.removeButton
    }
  ]

  return (
    <div className="puggysoft-role-table-by-user-container">
      <div className="puggysoft-role-table-by-user">
        {(arrayData == null || totalPages == null)
          ? <CommonLoading></CommonLoading>
          : <CommonTablePagination
            tableTitle={`${i18n.userRoleTableByUser.titleAddUsers} ${userSelected.username}`}
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
      <div className="puggysoft-role-table-by-user">
        {(arrayData2 == null || totalPages2 == null)
          ? <CommonLoading></CommonLoading>
          : <CommonTablePagination
            tableTitle={`${i18n.userRoleTableByUser.titleRemoveUsers} ${userSelected.username}`}
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

export default RoleTableFilterByUsers;
