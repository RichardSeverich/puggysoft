import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToQuantityReport from "./../../components-level-2/sales/ProductTableToQuantityReport";

function ProductTableToQuantityReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToQuantityReport />
    </div>
  );
}

export default ProductTableToQuantityReportPage;
