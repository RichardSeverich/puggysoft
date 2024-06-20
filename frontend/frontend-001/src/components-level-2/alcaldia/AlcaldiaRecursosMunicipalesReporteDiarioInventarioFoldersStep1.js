import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesFoldersGenericTable from "./generic/AlcaldiaRecursosMunicipalesFoldersGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaRecursosMunicipalesFoldersTable () {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTable.titleFolders;
  const pageSize = 20;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (folderSelected) {
    history.push({
      pathname: enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP2,
      state: {
        folderSelected
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  const fixArrayData = data => {
    return data.map(folder => {
      folder.disponible = Number(folder.talonarioFinal) - Number(folder.talonarioMovimiento);
      return folder;
    });
  };

  return (
    <AlcaldiaRecursosMunicipalesFoldersGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
      fixArrayData={fixArrayData}
    >
    </AlcaldiaRecursosMunicipalesFoldersGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesFoldersTable;
