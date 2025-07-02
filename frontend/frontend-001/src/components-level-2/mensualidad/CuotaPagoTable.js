import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import CuotaPagoGenericTable from "./generic/CuotaPagoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumSystems from "../../models/enumSystems";

function CuotaPagoTable (props) {
  const pageSize = 16;
  const numberPagesToShow = 10;
  const whatSystemIs = props.whatSystemIs;

  const history = useHistory();

  let tableTitle;
  let path;
  switch (whatSystemIs) {
  case enumSystems.PAGO_UPEA:
    path = enumPaths.PAGO_UPEA_COLEGIATURAS_MATRICULAS_FORM;
    tableTitle = i18n.pagoUpea.colegiaturaMatriculaTableTitle;
    break;
  default:
    path = enumPaths.MENSUALIDAD_CUOTA_PAGO_FORM;
    tableTitle = i18n.mensualidad.cuotaPagoTableTitle;
    break;
  }

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleDelete (data) {
    handleDeleteRequest(`products/${data.id}`, undefined, undefined, undefined, true);
  }

  function handleEdit (data) {
    history.push({
      pathname: path,
      state: {
        data,
        edit: true
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "warning",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  return (
    <CuotaPagoGenericTable
      tableTitle={tableTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
    />
  );
}

export default CuotaPagoTable;

CuotaPagoTable.propTypes = {
  whatSystemIs: PropTypes.oneOf([
    enumSystems.MENSUALIDAD,
    enumSystems.PAGO_UPEA
  ])
};

CuotaPagoTable.defaultProps = {
  whatSystemIs: enumSystems.MENSUALIDAD
};
