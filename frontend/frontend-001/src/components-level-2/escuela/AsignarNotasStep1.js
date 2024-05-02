import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import MateriaGenericTable from "./generic/MateriaGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AsignarNotasStep1 () {
  const tableTitle = i18n.escuela.materiasTableTitle;
  const tableSubTitle = i18n.escuela.materiasTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-materias/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-materias/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (data) {
    history.push({
      pathname: enumPaths.ESCUELA_ASIGNAR_NOTAS_STEP_TWO,
      state: { data }
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
    <MateriaGenericTable
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
    >
    </MateriaGenericTable>
  );
}

export default AsignarNotasStep1;
