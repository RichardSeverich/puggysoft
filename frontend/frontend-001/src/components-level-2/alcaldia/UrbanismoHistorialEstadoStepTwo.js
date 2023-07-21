import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import UrbanismoEstadosGenericTable from "./generic/UrbanismoEstadosGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function UrbanismoHistorialEstadoStepTwo () {
  const tableTitle = i18n.urbanismoEstadosTable.title;
  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();

  const selectedTramite = history && history.location && history.location.state.data;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`urbanismo-estados/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`urbanismo-estados/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (selectedEstado) {
    history.push({
      pathname: enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_THREE,
      state: {
        data: { selectedEstado, selectedTramite }
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

  return (
    <UrbanismoEstadosGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
    >
    </UrbanismoEstadosGenericTable>
  );
}

export default UrbanismoHistorialEstadoStepTwo;
