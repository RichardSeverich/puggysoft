import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import ProductGroupGenericTable from "./generic/ProductGroupGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumSystems from "../../models/enumSystems";

function GroupProductForProductsStep1 (props) {
  const pageSize = 7;
  const numberPagesToShow = 7;
  const whatSystemIs = props.whatSystemIs;

  let tableTitle;
  let tableSubTitle;
  let pathStep2;
  let columnsToShow;
  switch (whatSystemIs) {
  case enumSystems.MENSUALIDAD:
    pathStep2 = enumPaths.MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP2;
    tableTitle = i18n.escuela.cursosTableTitle;
    tableSubTitle = i18n.escuela.cursosTableTitleSub;
    columnsToShow = enumTableColumnsToShow.MINIMUM;
    break;
  case enumSystems.PAGO_UPEA:
    pathStep2 = enumPaths.PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP2;
    tableTitle = i18n.pagoUpea.programaPostgradoTableTitle;
    tableSubTitle = i18n.pagoUpea.programaPostgradoTableSubTitle;
    columnsToShow = enumTableColumnsToShow.MINIMUM;
    break;
  default:
    pathStep2 = enumPaths.SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP2;
    tableTitle = i18n.productGroupTable.productGroupTableTitle;
    tableSubTitle = i18n.productGroupTable.productGroupTableTitleSub;
    columnsToShow = enumTableColumnsToShow.MINIMUM;
    break;
  }

  const history = useHistory();

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`product-groups/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`product-groups/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleSelection (data) {
    history.push({
      pathname: pathStep2,
      state: { data }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  return (
    <ProductGroupGenericTable
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={columnsToShow}
      whatSystemIs={whatSystemIs}
    >
    </ProductGroupGenericTable>
  );
}

export default GroupProductForProductsStep1;

GroupProductForProductsStep1.propTypes = {
  whatSystemIs: PropTypes.oneOf([
    enumSystems.MENSUALIDAD,
    enumSystems.SALES
  ])
};

GroupProductForProductsStep1.defaultProps = {
  whatSystemIs: enumSystems.SALES
};
