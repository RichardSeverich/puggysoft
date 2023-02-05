import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToQuantityMonthReport from "./../../components-level-2/sales/ProductTableToQuantityMonthReport";

function ProductTableToQuantityMonthReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToQuantityMonthReport />
    </div>
  );
}

export default ProductTableToQuantityMonthReportPage;
