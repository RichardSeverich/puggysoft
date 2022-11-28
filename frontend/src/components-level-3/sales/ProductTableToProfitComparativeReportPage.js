import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToProfitComparativeReport
  from "./../../components-level-2/sales/ProductTableToProfitComparativeReport";

function ProductTableToProfitComparativeReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToProfitComparativeReport />
    </div>
  );
}

export default ProductTableToProfitComparativeReportPage;
