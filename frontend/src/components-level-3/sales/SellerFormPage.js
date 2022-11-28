import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SellerUserForm from "./../../components-level-2/sales/SellerUserForm";

function SellerFormPage () {
  return (
    <div className="seller-form-page">
      <NavBar></NavBar>
      <SellerUserForm></SellerUserForm>
    </div>
  );
}

export default SellerFormPage;
