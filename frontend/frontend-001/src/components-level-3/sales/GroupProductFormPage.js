import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import ProductGroupsForm from "../../components-level-2/sales/ProductGroupsForm";

function GroupProductFormPage () {
  return (
    <div className="product-form-page">
      <NavBar></NavBar>
      <ProductGroupsForm></ProductGroupsForm>
    </div>
  );
}

export default GroupProductFormPage;
