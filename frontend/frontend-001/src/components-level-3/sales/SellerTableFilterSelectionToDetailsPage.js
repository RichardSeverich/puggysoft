import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SellerUserTableSelectionToDetails from "./../../components-level-2/sales/SellerUserTableSelectionToDetails";

function SellerTableFilterSelectionToDetailsPage () {
  return (
    <div className="seller-table-page">
      <NavBar></NavBar>
      <SellerUserTableSelectionToDetails></SellerUserTableSelectionToDetails>
    </div>
  );
}

export default SellerTableFilterSelectionToDetailsPage;
