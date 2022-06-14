import CommonPagination from './CommonPagination'
import CommonTable from './CommonTable'

/**
 *  tableArrayData = [{},{},{},{}]
 *  tableArrayDataFields = ['field1', 'field2', 'field3']
 *  tableArrayColumns = ['column1', 'column2', 'column3']
 */
function CommonTablePagination(props) {

  const {
    tableArrayData,
    tableArrayDataFields,
    tableArrayColumns,
    tableTitle,
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
    filterHandler,
  } = props;

  return (
    <div className="puggysoft-common-table-pagination" >
      <CommonTable
        arrayData={tableArrayData}
        arrayDataFields={tableArrayDataFields}
        arrayColumns={tableArrayColumns}
        tableTitle={tableTitle}
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
  )
}

export default CommonTablePagination;