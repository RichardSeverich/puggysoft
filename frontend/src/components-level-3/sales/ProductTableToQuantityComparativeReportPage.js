import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToQuantityComparativeReport from "./../../components-level-2/sales/ProductTableToQuantityComparativeReport";

function ProductTableToQuantityComparativeReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToQuantityComparativeReport />
    </div>
  );
}

export default ProductTableToQuantityComparativeReportPage;
