import React from "react";
import i18n from "../../i18n/i18n";
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
    handleChangeData
  } = props;
  const tableTitle = i18n.alcaldiaRecursosMunicipalesTableDelete.title;
  const pageSize = 7;
  const numberPagesToShow = 7;

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`alcaldia/filter-by-ventas-id/filter?page=${activePage - 1}&size=${pageSize}&ventasId=${ventasId}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`alcaldia/filter-by-ventas-id/filter/size?pageSize=${pageSize}&ventasId=${ventasId}`, filterBody, setTotalPages);
  }

  function afterAddProductToSale (params) {
    setUpdateTableDelete(false);
  }

  function handleDelete (data) {
    const price = -Number(data.precio) * Number(data.cantidad);
    handleChangeData(price);
    setUpdateTableDelete(true);
    handleDeleteRequest(`alcaldia-recursos-municipales-ventas-detalle/${data.id}`,
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
  handleChangeData: PropTypes.func,
  handleAdd: PropTypes.func
};

AlcaldiaRecursosMunicipalesTableDeleteSale.defaultProps = {
  ventasId: 0,
  setUpdateTableDelete: () => {},
  updateTableDelete: false,
  setValueVentaPrecioTotal: () => {},
  setValueClienteCambio: () => {},
  valueVentaPrecioTotal: 0,
  valueClienteCambio: 0,
  handleChangeData: () => {},
  handleAdd: () => {}
};
