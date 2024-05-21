import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaRecursosMunicipalesFoldersTableEditDelete from "../../components-level-2/alcaldia/AlcaldiaRecursosMunicipalesFoldersTableEditDelete";

function AlcaldiaRecursosMunicipalesFoldersTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <AlcaldiaRecursosMunicipalesFoldersTableEditDelete></AlcaldiaRecursosMunicipalesFoldersTableEditDelete>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesFoldersTablePage;
