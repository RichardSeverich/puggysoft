import CommonPagination from './CommonPagination'
import CommonTable from './CommonTable'
import "./styles.css"

/**
 *  tableArrayData = [{},{},{},{}]
 *  tableArrayDataFields = ['field1', 'field2', 'field3']
 *  tableArrayColumns = ['column1', 'column2', 'column3']
 */
function CommonTablePagination(props) {

  const {
    setArrayData,
    setTotalPages,
    setActivePage,
    activePage,
    totalPages,
    initialPage,
    setInitialPage,
    numberPagesToShow
  } = props;

  const changePagesNext = function () {
    setArrayData(null);
    setTotalPages(null);
    const newInitialPage = initialPage + numberPagesToShow;
    setInitialPage(newInitialPage);
    setActivePage(newInitialPage);
  }

  const changePagesBefore = function () {
    setArrayData(null);
    setTotalPages(null);
    const newInitialPage = initialPage - numberPagesToShow;
    const newActivePage = initialPage - 1;
    setInitialPage(newInitialPage);
    setActivePage(newActivePage);
  }

  const paginationnNextHandler = function () {
    if (activePage < totalPages) {
      const newActivePage = activePage + 1;
      if (newActivePage >= initialPage + numberPagesToShow) {
        changePagesNext();
      } else {
        setArrayData(null);
        setTotalPages(null);
        setActivePage(newActivePage);
      }
    }
  }

  const paginationPrevHandler = function () {
    if (activePage > 1) {
      const newActivePage = activePage - 1;
      if (newActivePage < initialPage) {
        changePagesBefore();
      } else {
        setArrayData(null);
        setTotalPages(null);
        setActivePage(newActivePage);
      }
    }
  }

  const firstHandlerPrevHandler = function () {
    setArrayData(null);
    setTotalPages(null);
    setActivePage(1);
    setInitialPage(1);
  }

  const paginationLastHandler = function () {
    setArrayData(null);
    setTotalPages(null);
    setActivePage(totalPages);
    setInitialPage(totalPages);
  }

  const paginationChangeActivePage = function (newPage) {
    setArrayData(null);
    setTotalPages(null);
    setActivePage(newPage);
  }


  return (
    <div className="puggysoft-common-table-pagination" >
      <CommonTable
        arrayData={props.tableArrayData}
        arrayDataFields={props.tableArrayDataFields}
        arrayColumns={props.tableArrayColumns}
      >
      </CommonTable>
      <CommonPagination
        activePage={activePage}
        totalPages={totalPages}
        initialPage={initialPage}
        prevHandler={paginationPrevHandler}
        firstHandler={firstHandlerPrevHandler}
        nextHandler={paginationnNextHandler}
        lastHandler={paginationLastHandler}
        changePagesNext={changePagesNext}
        changePagesBefore={changePagesBefore}
        changeActivePage={paginationChangeActivePage}
        numberPagesToShow={numberPagesToShow}
      ></CommonPagination>
    </div>
  )
}

export default CommonTablePagination;