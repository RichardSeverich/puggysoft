import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaRecursosMunicipalesTimbresVentasTable from "../../components-level-2/alcaldia/AlcaldiaRecursosMunicipalesTimbresVentasTableEditDelete";

function AlcaldiaRecursosMunicipalesTimbresVentasTablePage () {
  return (
    <div className="table-page">
      <NavBar></NavBar>
      <AlcaldiaRecursosMunicipalesTimbresVentasTable/>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesTimbresVentasTablePage;
