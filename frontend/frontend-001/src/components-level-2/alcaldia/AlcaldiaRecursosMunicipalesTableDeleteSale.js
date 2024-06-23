import React, { useRef } from "react";
import i18n from "../../i18n/i18n";
import Form from "react-bootstrap/Form";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import AlcaldiaRecursosMunicipalesGenericTable from "./generic/AlcaldiaRecursosMunicipalesGenericTable";
import enumTableColumnsToShow from "../../models/alcaldia/enumTableColumnsToShow";
import CommonLoading from "../../components-level-1/CommonLoading";

import PropTypes from "prop-types";

function AlcaldiaRecursosMunicipalesTableDeleteSale (props) {
  const {
    ventasId,
    setUpdateTableDelete,
    updateTableDelete,
    handleChangeData,
    setValueVentaPrecioTotal,
    valueVentaPrecioTotal,
    newVentaDetalle,
    isEdit
  } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableDelete.title;
  const pageSize = 1000;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia/filter-by-ventas-id/filter?page=${activePage - 1}&size=${pageSize}&ventasId=${ventasId}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia/filter-by-ventas-id/filter/size?pageSize=${pageSize}&ventasId=${ventasId}`, filterBody, setTotalPages);
  }

  function afterDeleteProductToSale () {
    setUpdateTableDelete(false);
  }

  function handleDelete (data) {
    handleChangeData(data.precioAux);
    setUpdateTableDelete(true);
    handleDeleteRequest(`alcaldia-recursos-municipales-ventas-detalle/${data.id}`,
      afterDeleteProductToSale, afterDeleteProductToSale, afterDeleteProductToSale
    );
  }

  const dataOldCopy = useRef();
  const dataNewCopy = useRef();
  const valuePrecioTotalCopy = useRef();

  const tableArrayCustomRowButtons = [
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  const onChangeArryPrecios = function (event, index, setArrayData, valuePrecioTotalCopy) {
    event.preventDefault();
    const precioOld = dataOldCopy.current[index].precio;
    const newPrecio = event.target.value;
    if (valuePrecioTotalCopy.current === undefined) {
      valuePrecioTotalCopy.current = valueVentaPrecioTotal;
    }
    valuePrecioTotalCopy.current = Number(valuePrecioTotalCopy.current) - Number(precioOld) + Number(newPrecio);
    setValueVentaPrecioTotal(valuePrecioTotalCopy.current);
    // newOldData
    const newOldData = JSON.parse(JSON.stringify(dataOldCopy.current));
    dataNewCopy.current.forEach((element, indice) => {
      newOldData[indice].precio = element.precioAux;
    });
    // Update new precio
    newOldData[index].precio = newPrecio;
    dataOldCopy.current[index].precio = newPrecio;
    newVentaDetalle.current = dataOldCopy.current;
    const newData = fixArrayData(newOldData, setArrayData, false);
    setArrayData(newData);
  };

  const fixArrayData = (data, setArrayData, isCopy = true) => {
    if (isCopy) {
      dataOldCopy.current = JSON.parse(JSON.stringify(data));
    }
    let newPrecioTotal = 0;
    const newDataAux = JSON.parse(JSON.stringify(data));
    const newData = newDataAux.map((element, index) => {
      element.cantidad = element.nameAux;
      element.precioAux = element.precio;
      element.precio = <Form.Control
        onChange={(event) => onChangeArryPrecios(event, index, setArrayData, valuePrecioTotalCopy)}
        value={element.precio}
        disabled={isEdit}
        type="number"
      />;
      newPrecioTotal = newPrecioTotal + Number(element.precioAux);
      return element;
    });
    dataNewCopy.current = newData;
    setValueVentaPrecioTotal(newPrecioTotal);
    return newData;
  };

  if (updateTableDelete) {
    return <CommonLoading></CommonLoading>;
  }

  return (
    <AlcaldiaRecursosMunicipalesGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.SALEDELETE}
      fixArrayData={fixArrayData}
    >
    </AlcaldiaRecursosMunicipalesGenericTable>
  );
}

export default AlcaldiaRecursosMunicipalesTableDeleteSale;

AlcaldiaRecursosMunicipalesTableDeleteSale.propTypes = {
  ventasId: PropTypes.number,
  setUpdateTableDelete: PropTypes.func,
  updateTableDelete: PropTypes.bool,
  setValueVentaPrecioTotal: PropTypes.func,
  setValueClienteCambio: PropTypes.func,
  valueVentaPrecioTotal: PropTypes.number,
  valueClienteCambio: PropTypes.number,
  newVentaDetalle: PropTypes.object,
  isEdit: PropTypes.bool,
  handleChangeData: PropTypes.func
};

AlcaldiaRecursosMunicipalesTableDeleteSale.defaultProps = {
  ventasId: 0,
  setUpdateTableDelete: () => { },
  updateTableDelete: false,
  setValueVentaPrecioTotal: () => { },
  setValueClienteCambio: () => { },
  valueVentaPrecioTotal: 0,
  valueClienteCambio: 0,
  newVentaDetalle: {},
  isEdit: true,
  handleChangeData: () => { }
};
