import React from "react";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest
} from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/alcaldia/enumTableColumnsToShow";
import PropTypes from "prop-types";

function AlcaldiaActividadesTableAddToGroup (props) {
  const { idActividad, setIsRequestInProgress } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableAdd.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-actividades-id-not-recursos-municipales/filter?page=${activePage - 1}&size=${pageSize}&idActividad=${idActividad}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-actividades-id-not-recursos-municipales/filter/size?pageSize=${pageSize}&idActividad=${idActividad}`, filterBody, setTotalPages);
  }

  function afterAddProductToSale (params) {
    setIsRequestInProgress(false);
  }

  function afterAddProductToSaleOnFail () {
    setIsRequestInProgress(false);
    alert("error al agregar");
  }

  function handleAddProductToSale (data) {
    setIsRequestInProgress(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      idActividades: idActividad,
      idRecursoMunicipal: data.id,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    handleAddRequest("alcaldia-recursos-municipales-actividades", body, afterAddProductToSale, false, afterAddProductToSaleOnFail);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "primary",
      handleCustom: handleAddProductToSale,
      text: "Agregar"
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
    ></AlcaldiaRecursosMunicipalesGenericTable>
  );
}

export default AlcaldiaActividadesTableAddToGroup;

AlcaldiaActividadesTableAddToGroup.propTypes = {
  idActividad: PropTypes.number,
  setIsRequestInProgress: PropTypes.func
};

AlcaldiaActividadesTableAddToGroup.defaultProps = {
  idActividad: 0,
  setIsRequestInProgress: () => {}
};
