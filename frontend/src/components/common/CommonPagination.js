import Pagination from 'react-bootstrap/Pagination'

/** 
 * activePage={13}
 * totalPages={30}
 * pagesToShow={[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
*/
function CommonPagination(props) {


  /**
   * This method 
   * @returns pages for pagination.
   */
  const pagesItems = function () {
    const pages = [];


    const {
      initialPage,
      numberPagesToShow,
      totalPages,
      changePagesBefore,
      changePagesNext
    } = props;

    if (initialPage > numberPagesToShow) {
      pages.push(<Pagination.Ellipsis onClick={changePagesBefore} key={'Pagination.Ellipsis'} />)
    }
    for (let page = initialPage; page < initialPage + numberPagesToShow && page <= totalPages; page++) {
      pages.push(
        <Pagination.Item onClick={() => props.changeActivePage(page)} key={page} active={page === props.activePage}>
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
        <Pagination.First onClick={props.firstHandler} key='Pagination.First' />
        <Pagination.Prev onClick={props.prevHandler} key='Pagination.Prev' />
        {pagesItems()}
        <Pagination.Next onClick={props.nextHandler} key='Pagination.Next' />
        <Pagination.Last onClick={props.lastHandler} key='Pagination.Last' />
      </Pagination>
    </div>
  )
}

export default CommonPagination;
