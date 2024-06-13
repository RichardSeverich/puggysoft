import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesFoldersVentasGenericTable from "./generic/AlcaldiaRecursosMunicipalesFoldersVentasGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaRecursosMunicipalesFoldersVentasTable () {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesVentasTable.titleFolders;
  const pageSize = 20;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales-folders-ventas/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales-folders-ventas/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (data) {
    history.push({
      pathname: enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM,
      state: {
        data,
        edit: true,
        isForFolder: true
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
      /* const today = new Date(folder.creationDate);
      const valueName =
        `${today.getDate()} de ${i18n.commonMonths[today.toLocaleString("en-GB", { month: "long" }).toLowerCase()]} ${today.getFullYear()}`;
      folder.name = `${folder.name} ${valueName}`; */
      return folder;
    });
  };

  return (
    <AlcaldiaRecursosMunicipalesFoldersVentasGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
      fixArrayData={fixArrayData}
    >
    </AlcaldiaRecursosMunicipalesFoldersVentasGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesFoldersVentasTable;
