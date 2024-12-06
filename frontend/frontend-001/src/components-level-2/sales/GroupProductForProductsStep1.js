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
  let pathStep2;
  switch (whatSystemIs) {
  case enumSystems.MENSUALIDAD:
    pathStep2 = enumPaths.MENSUALIDAD_ASSIGN_COLEGIATURA_MATRICULA_STEP2;
    tableTitle = i18n.mensualidad.programaPostgradoTableTitle;
    break;
  default:
    pathStep2 = enumPaths.SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP2;
    tableTitle = i18n.productGroupTable.productGroupTableTitle;
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
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      columnsToShow={enumTableColumnsToShow.FULL}
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
