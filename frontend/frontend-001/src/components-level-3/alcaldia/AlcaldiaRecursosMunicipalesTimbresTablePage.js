import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaRecursosMunicipalesTimbresTableEditDelete from "../../components-level-2/alcaldia/AlcaldiaRecursosMunicipalesTimbresTableEditDelete";

function AlcaldiaRecursosMunicipalesTimbresTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <AlcaldiaRecursosMunicipalesTimbresTableEditDelete></AlcaldiaRecursosMunicipalesTimbresTableEditDelete>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesTimbresTablePage;
