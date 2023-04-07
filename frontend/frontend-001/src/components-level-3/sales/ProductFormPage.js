import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import ProductForm from "./../../components-level-2/sales/ProductForm";

function ProductFormPage () {
  return (
    <div className="product-form-page">
      <NavBar></NavBar>
      <ProductForm></ProductForm>
    </div>
  );
}

export default ProductFormPage;
