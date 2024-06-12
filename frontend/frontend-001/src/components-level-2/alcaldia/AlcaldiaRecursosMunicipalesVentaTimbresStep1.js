import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesTimbresGenericTable from "./generic/AlcaldiaRecursosMunicipalesTimbresGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaRecursosMunicipalesTimbresTable () {
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTable.titleTimbres;
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (timbreSelected) {
    history.push({
      pathname: enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM,
      state: {
        timbreSelected
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
    return data.map(timbre => {
      const today = new Date(timbre.creationDate);
      const valueName =
        `${today.getDate()} de ${i18n.commonMonths[today.toLocaleString("en-GB", { month: "long" }).toLowerCase()]} ${today.getFullYear()}`;
      timbre.name = `${timbre.name} ${valueName}`;
      timbre.disponible = Number(timbre.talonarioFinal) - Number(timbre.talonarioMovimiento);
      return timbre;
    });
  };

  return (
    <AlcaldiaRecursosMunicipalesTimbresGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
      fixArrayData={fixArrayData}
    >
    </AlcaldiaRecursosMunicipalesTimbresGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesTimbresTable;
