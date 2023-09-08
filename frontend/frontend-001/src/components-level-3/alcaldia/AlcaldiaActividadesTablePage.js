import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaActividadesTableEditDelete from "../../components-level-2/alcaldia/AlcaldiaActividadesTableEditDelete";

function AlcaldiaActividadesTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <AlcaldiaActividadesTableEditDelete/>
    </div>
  );
}

export default AlcaldiaActividadesTablePage;
