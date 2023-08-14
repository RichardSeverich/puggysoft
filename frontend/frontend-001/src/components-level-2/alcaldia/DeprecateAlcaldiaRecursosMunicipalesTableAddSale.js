import React from "react";
import i18n from "../../i18n/i18n";
import {
  handleFilterRequest,
  handleAddRequest
} from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/alcaldia/enumTableColumnsToShow";
import enumWebElements from "../../models/enumWebElements";

import PropTypes from "prop-types";

function AlcaldiaRecursosMunicipalesTableAddSale (props) {
  const { ventasId, setUpdateTableDelete, handleChangeData } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableAdd.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `alcaldia-recursos-municipales/filter?page=${
        activePage - 1
      }&size=${pageSize}`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `alcaldia-recursos-municipales/filter/size/${pageSize}`,
      filterBody,
      setTotalPages
    );
  }

  function afterAddProductToSale (params) {
    setUpdateTableDelete(false);
  }

  function afterAddProductToSaleOnFail () {
    console.error("error in add producto to sale");
  }

  function handleAddProductToSale (data, textboxId) {
    const textboxElement = document.getElementById(textboxId);
    const saleQuantity = textboxElement.value;

    const price = Number(data.precio) * Number(saleQuantity);
    handleChangeData(price);
    setUpdateTableDelete(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    const body = {
      idRecursoMunicipal: data.id,
      idVenta: ventasId,
      precioUnidad: data.precio,
      tenant,
      cantidad: saleQuantity,
      createdBy: username,
      updatedBy: username
    };
    handleAddRequest(
      "alcaldia-recursos-municipales-ventas-detalle/",
      body,
      afterAddProductToSale,
      false,
      afterAddProductToSaleOnFail
    );
  }

  const tableArrayCustomRowButtons = [
    {
      type: enumWebElements.TEXTBOX,
      placeholder: 0,
      formType: "number"
    },
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
      columnsToShow={enumTableColumnsToShow.SALEADD}
    ></AlcaldiaRecursosMunicipalesGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesTableAddSale;

AlcaldiaRecursosMunicipalesTableAddSale.propTypes = {
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
  ventasId: 0,
  setUpdateTableDelete: () => {},
  handleChangeData: () => {},
  setValueVentaPrecioTotal: () => {},
  setValueClienteCambio: () => {},
  valueVentaPrecioTotal: 0,
  valueClienteCambio: 0,
  handleAdd: () => {}
};
