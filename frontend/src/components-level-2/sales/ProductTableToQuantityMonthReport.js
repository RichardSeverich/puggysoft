import React from "react";
import i18n from "../../i18n/i18n";
import enumPaths from "./../../models/enumPaths";
import ProductTableSelectionGeneric from "./ProductTableSelectionGeneric";

function ProductTableToQuantityMonthReport () {
  const tableTitle = i18n.productTable.titleProductTableSelectionToReport;
  const tableSubTitle = i18n.productTable.titleSelectionToReportQuantityMonth;
  const urlToNavigate = enumPaths.SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT;

  return (
    <ProductTableSelectionGeneric
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      urlToNavigate={urlToNavigate}
    >
    </ProductTableSelectionGeneric>
  );
}

export default ProductTableToQuantityMonthReport;
