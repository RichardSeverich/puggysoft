
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CommonTablePagination from "../../components-level-1/CommonTablePagination";
import CommonLoading from "../../components-level-1/CommonLoading";
import arrayDataFields from "../../models/users/arrayUserDataFieldsSelectionReduced";
import arrayColumns from "../../models/users/arrayUserColumnsSelectionReduced";
import getColumnsFilterModel from "../../models/users/arrayUserColumnsFilterSelectionReduced";
import useInput from "./../../hooks/useInput";
import enumCompareOperators from "./../../models/enumCompareOperators";
import fixArrayData from "../../tools/users/fixArrayData";

function UserTableFilterGenericReduced (props) {
  const {
    handleGetData,
    handleGetSize,
    tableTitle,
    tableArrayCustomRowButtons,
    numberPagesToShow
  } = props;

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaUsername, onChange: criteriaOnChangeUsername, setValue: criteriaSetUsername } = useInput("");
  const { value: criteriaDni, onChange: criteriaOnChangeDni, setValue: criteriaSetDni } = useInput("");
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput("");
  const { value: criteriaSecondName, onChange: criteriaOnChangeSecondName, setValue: criteriaSetSecondName } = useInput("");
  const { value: criteriaLastName, onChange: criteriaOnChangeLastName, setValue: criteriaSetLastName } = useInput("");
  const { value: criteriaSecondLastName, onChange: criteriaOnChangeSecondLastName, setValue: criteriaSetSecondLastName } = useInput("");

  // FILTER OPERATORS
  const { value: operatorUsername, onChange: operatorOnChangeUsername, setValue: operatorSetUsername } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorDni, onChange: operatorOnChangeDni, setValue: operatorSetDni } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondName, onChange: operatorOnChangeSecondName, setValue: operatorSetSecondName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLastName, onChange: operatorOnChangeLastName, setValue: operatorSetLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSecondLastName, onChange: operatorOnChangeSecondLastName, setValue: operatorSetSecondLastName } = useInput(enumCompareOperators.TEXT_CONTAINS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /* USERNAME */ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
    /* DNI */ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
    /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /* SECOND NAME */criteriaSecondName, criteriaOnChangeSecondName, criteriaSetSecondName, operatorSecondName, operatorOnChangeSecondName, operatorSetSecondName,
    /* LAST NAME */ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName,
    /* SECOND LAST NAME */criteriaSecondLastName, criteriaOnChangeSecondLastName, criteriaSetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, operatorSetSecondLastName
  );

  function updateArrayData (arrayData) {
    const arrayFixed = fixArrayData(arrayData);
    setArrayData(arrayFixed);
  }

  useEffect(() => {
    const filterBody = getFilterBody();
    handleGetData(activePage, filterBody, updateArrayData);
  }, [activePage]);

  useEffect(() => {
    const filterBody = getFilterBody();
    handleGetSize(filterBody, setTotalPages);
  }, [activePage]);

  const handleFilter = () => {
    setActivePage(1);
    const filterBody = getFilterBody();
    setArrayData(null);
    setTotalPages(null);
    handleGetData(activePage, filterBody, updateArrayData);
    handleGetSize(filterBody, setTotalPages);
  };

  if (arrayData === null || totalPages === null) {
    return <CommonLoading></CommonLoading>;
  }

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

export default UserTableFilterGenericReduced;

UserTableFilterGenericReduced.propTypes = {
  handleGetData: PropTypes.func,
  handleGetSize: PropTypes.func,
  tableTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array,
  numberPagesToShow: PropTypes.number
};

UserTableFilterGenericReduced.defaultProps = {
  handleGetData: () => { },
  handleGetSize: () => { },
  tableTitle: "",
  tableArrayCustomRowButtons: [],
  numberPagesToShow: 0
};
