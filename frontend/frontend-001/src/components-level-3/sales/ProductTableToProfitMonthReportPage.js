import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToProfitMonthReport from "./../../components-level-2/sales/ProductTableToProfitMonthReport";

function ProductTableToProfitMonthReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToProfitMonthReport />
    </div>
  );
}

export default ProductTableToProfitMonthReportPage;
