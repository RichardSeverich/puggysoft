import React from "react";
import i18n from "../../i18n/i18n";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/alcaldia/enumTableColumnsToShow";

import PropTypes from "prop-types";

function AlcaldiaActividadesTableDeleteToGroup (props) {
  const { idActividad, setIsRequestInProgress } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableDelete.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-actividades-id-recursos-municipales/filter?page=${activePage - 1}&size=${pageSize}&idActividad=${idActividad}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-actividades-id-recursos-municipales/filter/size?pageSize=${pageSize}&idActividad=${idActividad}`, filterBody, setTotalPages);
  }

  function afterAddProductToSale (params) {
    setIsRequestInProgress(false);
  }

  function handleDelete (data) {
    setIsRequestInProgress(true);
    handleDeleteRequest(`alcaldia-recursos-municipales-actividades/${data.id}`,
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

export default AlcaldiaActividadesTableDeleteToGroup;

AlcaldiaActividadesTableDeleteToGroup.propTypes = {
  idActividad: PropTypes.number,
  setIsRequestInProgress: PropTypes.func
};

AlcaldiaActividadesTableDeleteToGroup.defaultProps = {
  idActividad: 0,
  setIsRequestInProgress: () => {}
};
