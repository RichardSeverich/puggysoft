import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableToProfitReport from "./../../components-level-2/sales/ProductTableToProfitReport";

function ProductTableToProfitReportPage () {
  return (
    <div className="sales-product-table">
      <NavBar></NavBar>
      <ProductTableToProfitReport />
    </div>
  );
}

export default ProductTableToProfitReportPage;
