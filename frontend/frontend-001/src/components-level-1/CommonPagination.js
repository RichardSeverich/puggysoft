import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";

/**
 * activePage={13}
 * totalPages={30}
 * pagesToShow={[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
*/
function CommonPagination (props) {
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
  };

  const changePagesBefore = function () {
    setArrayData(null);
    setTotalPages(null);
    const newInitialPage = initialPage - numberPagesToShow;
    const newActivePage = initialPage - 1;
    setInitialPage(newInitialPage);
    setActivePage(newActivePage);
  };

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
  };

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
  };

  const firstPrevHandler = function () {
    if (activePage > 1) {
      setArrayData(null);
      setTotalPages(null);
      setActivePage(1);
      setInitialPage(1);
    }
  };

  const lastHandler = function () {
    if (activePage < totalPages) {
      setArrayData(null);
      setTotalPages(null);
      const newActivePage = totalPages;
      let newInitialPage = initialPage;
      let condition = newActivePage >= initialPage + numberPagesToShow;
      // Find initial pages
      while (condition) {
        newInitialPage = newInitialPage + numberPagesToShow;
        if (newInitialPage >= totalPages - numberPagesToShow) {
          condition = false;
        }
      }
      setActivePage(totalPages);
      setInitialPage(newInitialPage);
    }
  };

  const changeActivePage = function (newPage) {
    if (newPage !== activePage) {
      setArrayData(null);
      setTotalPages(null);
      setActivePage(newPage);
    }
  };

  const pagesItems = function () {
    const pages = [];
    if (initialPage > numberPagesToShow) {
      pages.push(<Pagination.Ellipsis onClick={changePagesBefore} key={"Pagination.Ellipsis"} />);
    }
    for (let page = initialPage; page < initialPage + numberPagesToShow && page <= totalPages; page++) {
      pages.push(
        <Pagination.Item onClick={() => changeActivePage(page)} key={page} active={page === activePage}>
          {page}
        </Pagination.Item>
      );
    }
    if (totalPages >= initialPage + numberPagesToShow) {
      pages.push(<Pagination.Ellipsis onClick={changePagesNext} key={"Pagination.Ellipsis"} />);
    }
    return pages;
  };

  return (
    <div className="puggysoft-common-pagination" >
      <Pagination>
        {/* activePage > 1 && */ <Pagination.First onClick={firstPrevHandler} key="Pagination.First" />}
        {/* activePage > 1 && */ <Pagination.Prev onClick={lastPrevHandler} key="Pagination.Prev" />}
        {pagesItems()}
        {/* activePage < totalPages && */ <Pagination.Next onClick={nextHandler} key="Pagination.Next" />}
        {/* activePage < totalPages && */ <Pagination.Last onClick={lastHandler} key="Pagination.Last" />}
      </Pagination>
    </div>
  );
}

export default CommonPagination;

CommonPagination.propTypes = {
  totalPages: PropTypes.number,
  numberPagesToShow: PropTypes.number,
  initialPage: PropTypes.number,
  activePage: PropTypes.number,
  setArrayData: PropTypes.func,
  setTotalPages: PropTypes.func,
  setActivePage: PropTypes.func,
  setInitialPage: PropTypes.func
};

CommonPagination.defaultProps = {
  totalPages: 0,
  numberPagesToShow: 0,
  initialPage: 0,
  activePage: 0,
  setArrayData: () => { },
  setTotalPages: () => { },
  setActivePage: () => { },
  setInitialPage: () => { }
};
