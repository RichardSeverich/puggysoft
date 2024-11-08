import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductGroupsTableFilterEditDelete from "./../../components-level-2/sales/ProductGroupsTableFilterEditDelete";

function ProductGroupsTableFilterEditDeletePage () {
  return (
    <div className="product-table-page">
      <NavBar></NavBar>
      <ProductGroupsTableFilterEditDelete></ProductGroupsTableFilterEditDelete>
    </div>
  );
}

export default ProductGroupsTableFilterEditDeletePage;
