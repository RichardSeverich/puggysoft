import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToRevenueReport from "./../../components-level-2/sales/ProductTableToRevenueReport";

function ProductTableToRevenueReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToRevenueReport />
    </div>
  );
}

export default ProductTableToRevenueReportPage;
