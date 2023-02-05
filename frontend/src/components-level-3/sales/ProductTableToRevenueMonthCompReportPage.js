import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToRevenueMonthCompReport
  from "./../../components-level-2/sales/ProductTableToRevenueMonthCompReport";

function ProductTableToRevenueMonthCompReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToRevenueMonthCompReport />
    </div>
  );
}

export default ProductTableToRevenueMonthCompReportPage;
