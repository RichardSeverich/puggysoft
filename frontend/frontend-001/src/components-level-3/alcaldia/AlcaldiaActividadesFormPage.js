import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaActividadesForm from "../../components-level-2/alcaldia/AlcaldiaActividadesForm";

function AlcaldiaActividadesFormPage () {
  return (
    <div className="form-page">
      <NavBar></NavBar>
      <AlcaldiaActividadesForm/>
    </div>
  );
}

export default AlcaldiaActividadesFormPage;
