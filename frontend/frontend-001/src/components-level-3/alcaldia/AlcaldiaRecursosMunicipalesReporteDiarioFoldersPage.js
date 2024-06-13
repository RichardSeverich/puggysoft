import React from "react";
import NavBar from "../../components-level-2/navbar/NavBar";
import AlcaldiaRecursosMunicipalesReporteDiarioFolders from "../../components-level-2/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioFolders";

function AlcaldiaRecursosMunicipalesReporteDiarioFoldersPage () {
  return (
    <div className="alcaldia-recursos-municipales-reporte-diario-page">
      <NavBar></NavBar>
      <AlcaldiaRecursosMunicipalesReporteDiarioFolders/>
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesReporteDiarioFoldersPage;
