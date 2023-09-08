import React from "react";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest
} from "../../actions/HandleManager";
import AlcaldiaActividadesGenericTable from "./generic/AlcaldiaActividadesGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";

import PropTypes from "prop-types";

function AlcaldiaRecursosMunicipalesTableAddSale (props) {
  const { setValueNota, ventasId, setUpdateTableDelete, setValueVentaPrecioTotal } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableAdd.titleActivity;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia-actividades/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia-actividades/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function afterAddProductToSale (params) {
    setValueVentaPrecioTotal(params);
    setUpdateTableDelete(false);
  }

  function afterAddProductToSaleOnFail () {
    console.error("error in add producto to sale");
  }

  function handleAddProductToSale (data) {
    setUpdateTableDelete(true);
    setValueNota(data.name);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      idRecursoMunicipal: data.id,
      idVenta: ventasId,
      precioUnidad: 0,
      tenant,
      cantidad: 1,
      createdBy: username,
      updatedBy: username
    };
    handleAddRequest(
      "alcaldia-recursos-municipales-ventas-por-actividades/",
      body,
      afterAddProductToSale,
      false,
      afterAddProductToSaleOnFail
    );
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "primary",
      handleCustom: handleAddProductToSale,
      text: "Agregar"
    }
  ];

  return (
    <AlcaldiaActividadesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.MINIMUM}
    ></AlcaldiaActividadesGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesTableAddSale;

AlcaldiaRecursosMunicipalesTableAddSale.propTypes = {
  setValueNota: PropTypes.func,
  ventasId: PropTypes.number,
  setUpdateTableDelete: PropTypes.func,
  handleChangeData: PropTypes.func,
  setValueVentaPrecioTotal: PropTypes.func,
  setValueClienteCambio: PropTypes.func,
  valueVentaPrecioTotal: PropTypes.number,
  valueClienteCambio: PropTypes.number,
  handleAdd: PropTypes.func
};

AlcaldiaRecursosMunicipalesTableAddSale.defaultProps = {
  setValueNota: () => {},
  ventasId: 0,
  setUpdateTableDelete: () => {},
  handleChangeData: () => {},
  setValueVentaPrecioTotal: () => {},
  setValueClienteCambio: () => {},
  valueVentaPrecioTotal: 0,
  valueClienteCambio: 0,
  handleAdd: () => {}
};
