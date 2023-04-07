import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CommonTablePagination from "../../components-level-1/CommonTablePagination";
import CommonLoading from "../../components-level-1/CommonLoading";

function TablePaginationFilterGeneric (props) {
  const {
    arrayDataFields,
    arrayColumns,
    handleGetData,
    handleGetSize,
    tableTitle,
    tableSubTitle,
    tableArrayCustomRowButtons,
    numberPagesToShow,
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    fixArrayData
  } = props;

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  function updateArrayData (arrayData) {
    if (fixArrayData) {
      const arrayFixed = fixArrayData(arrayData);
      setArrayData(arrayFixed);
    } else {
      setArrayData(arrayData);
    }
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
    <div className='puggysoft-center-reduced-table'>
      <CommonTablePagination
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
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
    </div>
  );
}

export default TablePaginationFilterGeneric;

TablePaginationFilterGeneric.propTypes = {
  arrayDataFields: PropTypes.array,
  arrayColumns: PropTypes.array,
  handleGetData: PropTypes.func,
  handleGetSize: PropTypes.func,
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  tableArrayCustomRowButtons: PropTypes.array,
  numberPagesToShow: PropTypes.number,
  arrayColumnsFilter: PropTypes.array,
  clearFilters: PropTypes.func,
  getFilterBody: PropTypes.func,
  fixArrayData: PropTypes.func
};

TablePaginationFilterGeneric.defaultProps = {
  arrayDataFields: [],
  arrayColumns: [],
  handleGetData: () => { },
  handleGetSize: () => { },
  tableTitle: "",
  tableSubTitle: "",
  tableArrayCustomRowButtons: [],
  numberPagesToShow: 0,
  arrayColumnsFilter: [],
  clearFilters: () => { },
  getFilterBody: () => { },
  fixArrayData: undefined
};
