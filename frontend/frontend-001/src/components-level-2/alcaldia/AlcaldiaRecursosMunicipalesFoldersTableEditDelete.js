import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesFoldersGenericTable from "./generic/AlcaldiaRecursosMunicipalesFoldersGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaRecursosMunicipalesFoldersTableEditDelete () {
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

  function handleDelete (data) {
    handleDeleteRequest(`alcaldia-recursos-municipales/${data.id}`, undefined, undefined, undefined, true);
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_FORM,
      state: {
        data,
        edit: true
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "warning",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  const fixArrayData = data => {
    return data.map(folder => {
      const today = new Date(folder.creationDate);
      const valueName =
        `${today.getDate()} de ${i18n.commonMonths[today.toLocaleString("en-GB", { month: "long" }).toLowerCase()]} ${today.getFullYear()}`;
      folder.name = `${folder.name} ${valueName}`;
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
      columnsToShow={enumTableColumnsToShow.FULL}
      fixArrayData={fixArrayData}
    >
    </AlcaldiaRecursosMunicipalesFoldersGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesFoldersTableEditDelete;
