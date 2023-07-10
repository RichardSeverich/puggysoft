import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import UrbanismoTramiteGenericTable from "./generic/UrbanismoTramiteGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function UrbanismoTramiteEstadosStepOne () {
  const tableTitle = i18n.urbanismoTramiteTable.title;
  const tableSubTitle = i18n.urbanismoTramiteTable.subTitleSelection;
  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`urbanismo-tramite/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`urbanismo-tramite/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (selectedTramite) {
    history.push({
      pathname: enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_TWO,
      state: {
        data: selectedTramite
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
    <UrbanismoTramiteGenericTable
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
    >
    </UrbanismoTramiteGenericTable>
  );
}

export default UrbanismoTramiteEstadosStepOne;
