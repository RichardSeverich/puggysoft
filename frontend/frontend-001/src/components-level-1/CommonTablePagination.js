import React from "react";
import PropTypes from "prop-types";
import CommonPagination from "./CommonPagination";
import CommonTable from "./CommonTable";

/**
 *  tableArrayData = [{},{},{},{}]
 *  tableArrayDataFields = ["field1", "field2", "field3"]
 *  tableArrayColumns = ["column1", "column2", "column3"]
 */
function CommonTablePagination (props) {
  const {
    tableTitle,
    tableSubTitle,
    tableArrayData,
    tableArrayDataFields,
    tableArrayColumns,
    tableHandleEdit,
    tableHandleDelete,
    tableArrayCustomRowButtons,
    tableHandleExportExcel,
    tableHandleExportPdf,
    paginationTotalPages,
    paginationNumberPagesToShow,
    paginationInitialPage,
    paginationActivePage,
    paginationSetArrayData,
    paginationSetTotalPages,
    paginationSetActivePage,
    paginationSetInitialPage,
    filterArrayColumns,
    filterClear,
    filterHandler
  } = props;
  return (
    <div className="puggysoft-common-table-pagination" >
      <CommonTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        arrayData={tableArrayData}
        arrayDataFields={tableArrayDataFields}
        arrayColumns={tableArrayColumns}
        arrayCustomRowButtons={tableArrayCustomRowButtons}
        handleEdit={tableHandleEdit}
        handleDelete={tableHandleDelete}
        handleExportExcel={tableHandleExportExcel}
        handleExportPdf={tableHandleExportPdf}
        filterArrayColumns={filterArrayColumns}
        filterClear={filterClear}
        filterHandler={filterHandler}
      >
      </CommonTable>
      <CommonPagination
        totalPages={paginationTotalPages}
        numberPagesToShow={paginationNumberPagesToShow}
        initialPage={paginationInitialPage}
        activePage={paginationActivePage}
        setArrayData={paginationSetArrayData}
        setTotalPages={paginationSetTotalPages}
        setActivePage={paginationSetActivePage}
        setInitialPage={paginationSetInitialPage}
      ></CommonPagination>
    </div>
  );
}

export default CommonTablePagination;

CommonTablePagination.propTypes = {
  // Table
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  tableArrayData: PropTypes.array,
  tableArrayDataFields: PropTypes.array,
  tableArrayColumns: PropTypes.array,
  tableArrayCustomRowButtons: PropTypes.array,
  tableHandleEdit: PropTypes.func,
  tableHandleDelete: PropTypes.func,
  tableHandleExportExcel: PropTypes.func,
  tableHandleExportPdf: PropTypes.func,
  // Pagination
  paginationTotalPages: PropTypes.number,
  paginationNumberPagesToShow: PropTypes.number,
  paginationInitialPage: PropTypes.number,
  paginationActivePage: PropTypes.number,
  paginationSetArrayData: PropTypes.func,
  paginationSetTotalPages: PropTypes.func,
  paginationSetActivePage: PropTypes.func,
  paginationSetInitialPage: PropTypes.func,
  // Filter
  filterArrayColumns: PropTypes.array,
  filterClear: PropTypes.func,
  filterHandler: PropTypes.func
};

CommonTablePagination.defaultProps = {
  tableTitle: "Common pagination table title",
  tableSubTitle: undefined,
  tableArrayData: [],
  tableArrayDataFields: [],
  tableArrayColumns: [],
  tableArrayCustomRowButtons: [],
  tableHandleEdit: undefined,
  tableHandleDelete: undefined,
  tableHandleExportExcel: undefined,
  tableHandleExportPdf: undefined,
  // Pagination
  paginationTotalPages: 10,
  paginationNumberPagesToShow: 10,
  paginationInitialPage: 1,
  paginationActivePage: 1,
  paginationSetArrayData: () => { },
  paginationSetTotalPages: () => { },
  paginationSetActivePage: () => { },
  paginationSetInitialPage: () => { },
  // Filter
  filterArrayColumns: [],
  filterClear: () => { },
  filterHandler: () => { }
};
