import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToProfitMonthCompReport
  from "./../../components-level-2/sales/ProductTableToProfitMonthCompReport";

function ProductTableToProfitMonthCompReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToProfitMonthCompReport />
    </div>
  );
}

export default ProductTableToProfitMonthCompReportPage;
