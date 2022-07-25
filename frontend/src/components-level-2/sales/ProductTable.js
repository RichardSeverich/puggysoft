import { useState, useEffect } from "react";
import CommonTablePagination from '../../components-level-1/CommonTablePagination';
import CommonLoading from '../../components-level-1/CommonLoading';
import { handleGetRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import arrayDataFields from "../../models/sales/arrayProductDataFields";
import arrayColumns from "../../models/sales/arrayProductColumns";

const pageSize = 10;
const numberPagesToShow = 10;

function ProductTable() {

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  useEffect(() => {
    handleGetRequest(`products/pagination?page=${activePage - 1}&size=${pageSize}`, setArrayData);
  }, [activePage]);

  useEffect(() => {
    handleGetRequest(`products/pagination/size/${pageSize}`, setTotalPages);
  }, [activePage]);

  if (arrayData == null || totalPages == null) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <div className="puggysoft-product-table">
      <CommonTablePagination
        tableTitle={i18n.productTable.title}
        tableArrayData={arrayData}
        tableArrayDataFields={arrayDataFields}
        tableArrayColumns={arrayColumns}
        paginationTotalPages={totalPages}
        paginationNumberPagesToShow={numberPagesToShow}
        paginationInitialPage={initialPage}
        paginationActivePage={activePage}
        paginationSetArrayData={setArrayData}
        paginationSetTotalPages={setTotalPages}
        paginationSetActivePage={setActivePage}
        paginationSetInitialPage={setInitialPage}
      ></CommonTablePagination>
    </div>
  );
}

export default ProductTable;
