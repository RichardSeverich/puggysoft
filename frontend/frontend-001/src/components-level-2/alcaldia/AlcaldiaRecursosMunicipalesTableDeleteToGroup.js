import React from "react";
import i18n from "../../i18n/i18n";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/alcaldia/enumTableColumnsToShow";

import PropTypes from "prop-types";

function AlcaldiaRecursosMunicipalesTableDeleteToGroup (props) {
  const { idPadre, setIsRequestInProgress } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableDelete.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales-child-by-father/filter?page=${activePage - 1}&size=${pageSize}&idPadre=${idPadre}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales-child-by-father/filter/size?pageSize=${pageSize}&idPadre=${idPadre}`, filterBody, setTotalPages);
  }

  function afterAddProductToSale (params) {
    setIsRequestInProgress(false);
  }

  function handleDelete (data) {
    setIsRequestInProgress(true);
    handleDeleteRequest(`alcaldia-recursos-municipales-grupo/${data.id}`,
      afterAddProductToSale, afterAddProductToSale, afterAddProductToSale
    );
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  return (
    <AlcaldiaRecursosMunicipalesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MINIMUM}
    >
    </AlcaldiaRecursosMunicipalesGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesTableDeleteToGroup;

AlcaldiaRecursosMunicipalesTableDeleteToGroup.propTypes = {
  idPadre: PropTypes.number,
  setIsRequestInProgress: PropTypes.func
};

AlcaldiaRecursosMunicipalesTableDeleteToGroup.defaultProps = {
  idPadre: 0,
  setIsRequestInProgress: () => {}
};
