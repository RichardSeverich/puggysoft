import { useState, useEffect } from "react";
import CommonTablePagination from '../common/CommonTablePagination';
import { handleGet } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";

const arrayDataFields = [
  'image',
  'id',
  'name',
  'purchasePrice',
  'salePrice',
  'stock',
  'minimumStock',
  'description',
  'barCode',
  'location',
  'createdBy',
  'updatedBy',
  'creationDate',
  'updateDate'
];

const arrayColumns = [
  i18n.productTable.columnImage,
  i18n.productTable.columnId,
  i18n.productTable.columnName,
  i18n.productTable.columnPurchasePrice,
  i18n.productTable.columnSalePrice,
  i18n.productTable.columnStock,
  i18n.productTable.columnMinimumStock,
  i18n.productTable.columnDescription,
  i18n.productTable.columnBarCode,
  i18n.productTable.columnLocation,
  i18n.productTable.columnCreatedBy,
  i18n.productTable.columnUpdatedBy,
  i18n.productTable.columnCreationDate,
  i18n.productTable.columnUpdateDate,
];

const pageSize = 10;

function ProductTable() {

  const [arrayData, setArrayData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  useEffect(() => {
    handleGet(`products/pagination?page=${activePage - 1}&size=${pageSize}`, setArrayData);
  }, [activePage]);

  useEffect(() => {
    handleGet(`products/pagination/size/${pageSize}`, setTotalPages);
  }, [activePage]);

  if (arrayData == null || totalPages == null) {
    return "Loading";
  }

  return (
    <div className="products-table">
      <CommonTablePagination
        tableArrayData={arrayData}
        tableArrayDataFields={arrayDataFields}
        tableArrayColumns={arrayColumns}
        activePage={activePage}
        totalPages={totalPages}
        initialPage={initialPage}
        setArrayData={setArrayData}
        setTotalPages={setTotalPages}
        setActivePage={setActivePage}
        setInitialPage={setInitialPage}
        numberPagesToShow={10}
      ></CommonTablePagination>
    </div>
  );
}

export default ProductTable;
