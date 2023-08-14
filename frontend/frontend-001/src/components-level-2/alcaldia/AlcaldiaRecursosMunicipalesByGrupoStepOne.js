import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import enumTipo from "./../../models/alcaldia/enumRecursosMunicipalesTipo";
import enumCompareOperators from "../../models/enumCompareOperators";
import { handleFilterRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaRecursosMunicipalesByGrupoStepOne () {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTable.titlePadre;
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    filterBody = { ...filterBody, tipoCriteria: enumTipo.PADRE, tipoOperator: enumCompareOperators.TEXT_EQUALS };
    handleFilterRequest(`alcaldia-recursos-municipales-out-timbres/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    filterBody = { ...filterBody, tipoCriteria: enumTipo.PADRE, tipoOperator: enumCompareOperators.TEXT_EQUALS };
    handleFilterRequest(`alcaldia-recursos-municipales-out-timbres/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelect (data) {
    history.push({
      pathname: enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_TWO,
      state: {
        data,
        edit: true
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelect,
      text: i18n.commonTable.selectButton
    }
  ];

  return (
    <AlcaldiaRecursosMunicipalesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
    >
    </AlcaldiaRecursosMunicipalesGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesByGrupoStepOne;
