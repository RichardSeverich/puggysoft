import React from "react";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import AlcaldiaActividadesGenericTable from "./generic/AlcaldiaActividadesGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

function AlcaldiaActividadesTableEditDelete () {
  const tableTitle = i18n.alcaldiaActividadesTable.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-actividades/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-actividades/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.ALCALDIA_ACTIVIDADES_FORM,
      state: {
        data,
        edit: true
      }
    });
  }

  function handleSelect (data) {
    history.push({
      pathname: enumPaths.ALCALDIA_ACTIVIDADES_JERARQUIA,
      state: {
        data,
        edit: true
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "success",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
    {
      variant: "info",
      handleCustom: handleSelect,
      text: i18n.commonTable.selectRelationsButton
    }
  ];

  return (
    <AlcaldiaActividadesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MEDIUM}
    >
    </AlcaldiaActividadesGenericTable>
  );
}

export default AlcaldiaActividadesTableEditDelete;
