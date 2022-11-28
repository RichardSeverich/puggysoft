import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import CommonTablePagination from "../../components-level-1/CommonTablePagination";
import CommonLoading from "../../components-level-1/CommonLoading";
import { handleFilterRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/users/arrayUserDataFieldsSelection";
import arrayColumns from "../../models/users/arrayUserColumnsSelection";
import getColumnsFilterModel from "../../models/users/arrayUserColumnsFilterSelection";
import useInput from "./../../hooks/useInput";
import enumCompareOperators from "./../../models/enumCompareOperators";
import fixArrayData from "../../tools/users/fixArrayData";

const pageSize = 10;
const numberPagesToShow = 10;

function UserTableFilterSelectionToDetails () {
  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);
  const history = useHistory();
  const routerProps = history && history.location && history.location.state;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaUsername, onChange: criteriaOnChangeUsername, setValue: criteriaSetUsername } = useInput("");
  const { value: criteriaDni, onChange: criteriaOnChangeDni, setValue: criteriaSetDni } = useInput("");
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput("");
  const { value: criteriaSecondName, onChange: criteriaOnChangeSecondName, setValue: criteriaSetSecondName } = useInput("");
  const { value: criteriaLastName, onChange: criteriaOnChangeLastName, setValue: criteriaSetLastName } = useInput("");
  const { value: criteriaSecondLastName, onChange: criteriaOnChangeSecondLastName, setValue: criteriaSetSecondLastName } = useInput("");
  const { value: criteriaBirthDate, onChange: criteriaOnChangeBirthDate, setValue: criteriaSetBirthDate } = useInput("");
  const { value: criteriaAge, onChange: criteriaOnChangeAge, setValue: criteriaSetAge } = useInput("");
  const { value: criteriaSex, onChange: criteriaOnChangeSex, setValue: criteriaSetSex } = useInput("");
  const { value: criteriaEmail, onChange: criteriaOnChangeEmail, setValue: criteriaSetEmail } = useInput("");
  const { value: criteriaStatus, onChange: criteriaOnChangeStatus, setValue: criteriaSetStatus } = useInput("");
  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUsername, onChange: operatorOnChangeUsername, setValue: operatorSetUsername } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorDni, onChange: operatorOnChangeDni, setValue: operatorSetDni } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondName, onChange: operatorOnChangeSecondName, setValue: operatorSetSecondName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLastName, onChange: operatorOnChangeLastName, setValue: operatorSetLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondLastName, onChange: operatorOnChangeSecondLastName, setValue: operatorSetSecondLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorBirthDate, onChange: operatorOnChangeBirthDate, setValue: operatorSetBirthDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorAge, onChange: operatorOnChangeAge, setValue: operatorSetAge } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorSex, onChange: operatorOnChangeSex, setValue: operatorSetSex } = useInput(enumCompareOperators.TEXT_EQUALS);
  const { value: operatorEmail, onChange: operatorOnChangeEmail, setValue: operatorSetEmail } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorStatus, onChange: operatorOnChangeStatus, setValue: operatorSetStatus } = useInput(enumCompareOperators.BOOLEAN_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* USERNAME */ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
    /* DNI */ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
    /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /* SECOND NAME */criteriaSecondName, criteriaOnChangeSecondName, criteriaSetSecondName, operatorSecondName, operatorOnChangeSecondName, operatorSetSecondName,
    /* LAST NAME */ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName,
    /* SECOND LAST NAME */criteriaSecondLastName, criteriaOnChangeSecondLastName, criteriaSetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, operatorSetSecondLastName,
    /* BIRTHDATE */criteriaBirthDate, criteriaOnChangeBirthDate, criteriaSetBirthDate, operatorBirthDate, operatorOnChangeBirthDate, operatorSetBirthDate,
    /* AGE */criteriaAge, criteriaOnChangeAge, criteriaSetAge, operatorAge, operatorOnChangeAge, operatorSetAge,
    /* SEX */criteriaSex, criteriaOnChangeSex, criteriaSetSex, operatorSex, operatorOnChangeSex, operatorSetSex,
    /* EMAIL */criteriaEmail, criteriaOnChangeEmail, criteriaSetEmail, operatorEmail, operatorOnChangeEmail, operatorSetEmail,
    /* STATUS */criteriaStatus, criteriaOnChangeStatus, criteriaSetStatus, operatorStatus, operatorOnChangeStatus, operatorSetStatus
  );

  function updateArrayData (arrayData) {
    const arrayFixed = fixArrayData(arrayData);
    setArrayData(arrayFixed);
  }

  useEffect(() => {
    const filterBody = getFilterBody();
    handleFilterRequest(`users/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }, [activePage]);

  useEffect(() => {
    const filterBody = getFilterBody();
    handleFilterRequest(`users/filter/size/${pageSize}`, filterBody, setTotalPages);
  }, [activePage]);

  const handleFilter = () => {
    setActivePage(1);
    const filterBody = getFilterBody();
    setArrayData(null);
    setTotalPages(null);
    handleFilterRequest(`users/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
    handleFilterRequest(`users/filter/size/${pageSize}`, filterBody, setTotalPages);
  };

  function handleSelection (userData) {
    const afterSelectRoute = routerProps.afterSelectRoute;
    history.push({
      pathname: afterSelectRoute,
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

  if (arrayData == null || totalPages == null) {
    return <CommonLoading></CommonLoading>;
  }

  const tableTitle = routerProps.tableTitle;

  return (
    <CommonTablePagination
      tableTitle={tableTitle}
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
    ></CommonTablePagination>
  );
}

export default UserTableFilterSelectionToDetails;
