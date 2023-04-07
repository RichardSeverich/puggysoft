import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToQuantityMonthCompReport from "./../../components-level-2/sales/ProductTableToQuantityMonthCompReport";

function ProductTableToQuantityMonthCompReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToQuantityMonthCompReport />
    </div>
  );
}

export default ProductTableToQuantityMonthCompReportPage;
