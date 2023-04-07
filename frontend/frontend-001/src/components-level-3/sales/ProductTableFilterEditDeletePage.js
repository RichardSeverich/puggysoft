import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductTableFilterEditDelete from "./../../components-level-2/sales/ProductTableFilterEditDelete";

function ProductTableFilterEditDeletePage () {
  return (
    <div className="product-table-page">
      <NavBar></NavBar>
      <ProductTableFilterEditDelete></ProductTableFilterEditDelete>
    </div>
  );
}

export default ProductTableFilterEditDeletePage;
