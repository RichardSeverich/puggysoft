import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToRevenueComparativeReport
  from "./../../components-level-2/sales/ProductTableToRevenueComparativeReport";

function ProductTableToRevenueComparativeReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToRevenueComparativeReport />
    </div>
  );
}

export default ProductTableToRevenueComparativeReportPage;
