import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaActividadesFolders from "../../components-level-2/alcaldia/AlcaldiaActividadesFolders";

function AlcaldiaActividadesFoldersPage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <AlcaldiaActividadesFolders/>
    </div>
  );
}

export default AlcaldiaActividadesFoldersPage;
