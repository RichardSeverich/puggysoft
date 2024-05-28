import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaRecursosMunicipalesFoldersVentasTable from "../../components-level-2/alcaldia/AlcaldiaRecursosMunicipalesFoldersVentasTableEditDelete";

function AlcaldiaRecursosMunicipalesFoldersVentasTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <AlcaldiaRecursosMunicipalesFoldersVentasTable/>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesFoldersVentasTablePage;
