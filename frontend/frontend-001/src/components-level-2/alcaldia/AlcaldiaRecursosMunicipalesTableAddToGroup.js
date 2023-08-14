import React from "react";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest
} from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/alcaldia/enumTableColumnsToShow";
import PropTypes from "prop-types";

function AlcaldiaRecursosMunicipalesTableAddToGroup (props) {
  const { idPadre, setIsRequestInProgress } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableAdd.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-recursos-municipales-child-not-by-father/filter?page=${activePage - 1}&size=${pageSize}&idPadre=${idPadre}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-recursos-municipales-child-not-by-father/filter/size?pageSize=${pageSize}&idPadre=${idPadre}`, filterBody, setTotalPages);
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
      idRecursoMunicipalPadre: idPadre,
      idRecursoMunicipalHijo: data.id,
      tenant,
      createdBy: username,
      updatedBy: username
    };
    handleAddRequest("alcaldia-recursos-municipales-grupo", body, afterAddProductToSale, false, afterAddProductToSaleOnFail);
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

export default AlcaldiaRecursosMunicipalesTableAddToGroup;

AlcaldiaRecursosMunicipalesTableAddToGroup.propTypes = {
  idPadre: PropTypes.number,
  setIsRequestInProgress: PropTypes.func
};

AlcaldiaRecursosMunicipalesTableAddToGroup.defaultProps = {
  idPadre: 0,
  setIsRequestInProgress: () => {}
};
