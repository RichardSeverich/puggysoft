import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable from "./generic/AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaRecursosMunicipalesTimbresDescontinuadosTableEditDelete () {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTimbresDescontinuadosTable.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales-timbres-descontinuados/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales-timbres-descontinuados/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleDelete (data) {
    handleDeleteRequest(`alcaldia-recursos-municipales-timbres-descontinuados/${data.id}`, undefined, undefined, undefined, true);
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_FORM,
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

  return (
    <AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
    >
    </AlcaldiaRecursosMunicipalesTimbresDescontinuadosGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesTimbresDescontinuadosTableEditDelete;
