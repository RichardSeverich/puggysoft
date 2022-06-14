import Pagination from 'react-bootstrap/Pagination'

/** 
 * activePage={13}
 * totalPages={30}
 * pagesToShow={[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
*/
function CommonPagination(props) {

  const {
    totalPages,
    numberPagesToShow,
    initialPage,
    activePage,
    setArrayData,
    setTotalPages,
    setActivePage,
    setInitialPage
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

  const nextHandler = function () {
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

  const lastPrevHandler = function () {
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

  const firstPrevHandler = function () {
    setArrayData(null);
    setTotalPages(null);
    setActivePage(1);
    setInitialPage(1);
  }

  const lastHandler = function () {
    setArrayData(null);
    setTotalPages(null);
    let newActivePage = totalPages;
    let newInitialPage = initialPage;
    let condition = newActivePage >= initialPage + numberPagesToShow;
    // Find initial pages
    while (condition) {
      newInitialPage = newInitialPage + numberPagesToShow;//11
      if (newInitialPage >= totalPages - numberPagesToShow) {
        condition = false;
      }
    }
    setActivePage(totalPages);
    setInitialPage(newInitialPage);
  }

  const changeActivePage = function (newPage) {
    if (newPage !== activePage) {
      setArrayData(null);
      setTotalPages(null);
      setActivePage(newPage);
    }
  }

  const pagesItems = function () {
    const pages = [];
    if (initialPage > numberPagesToShow) {
      pages.push(<Pagination.Ellipsis onClick={changePagesBefore} key={'Pagination.Ellipsis'} />)
    }
    for (let page = initialPage; page < initialPage + numberPagesToShow && page <= totalPages; page++) {
      pages.push(
        <Pagination.Item onClick={() => changeActivePage(page)} key={page} active={page === activePage}>
          {page}
        </Pagination.Item>
      );
    }
    if (totalPages >= initialPage + numberPagesToShow) {
      pages.push(<Pagination.Ellipsis onClick={changePagesNext} key={'Pagination.Ellipsis'} />)
    }
    return pages;
  }

  return (
    <div className="puggysoft-common-pagination" >
      <Pagination>
        {totalPages > 1 && <Pagination.First disable onClick={firstPrevHandler} key='Pagination.First' />}
        <Pagination.Prev onClick={lastPrevHandler} key='Pagination.Prev' />
        {pagesItems()}
        <Pagination.Next onClick={nextHandler} key='Pagination.Next' />
        {totalPages > 1 && <Pagination.Last onClick={lastHandler} key='Pagination.Last' />}
      </Pagination>
    </div>
  )
}

export default CommonPagination;
