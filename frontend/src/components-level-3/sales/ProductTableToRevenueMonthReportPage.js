import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToRevenueMonthReport from "./../../components-level-2/sales/ProductTableToRevenueMonthReport";

function ProductTableToRevenueMonthReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToRevenueMonthReport />
    </div>
  );
}

export default ProductTableToRevenueMonthReportPage;
