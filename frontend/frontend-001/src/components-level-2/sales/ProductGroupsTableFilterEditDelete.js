import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import ProductGroupGenericTable from "./generic/ProductGroupGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumSystems from "../../models/enumSystems";

function ProductGroupsTableFilterEditDelete (props) {
  const pageSize = 10;
  const numberPagesToShow = 10;
  const whatSystemIs = props.whatSystemIs;

  const history = useHistory();

  let tableTitle;
  switch (whatSystemIs) {
  case enumSystems.MENSUALIDAD:
    tableTitle = i18n.mensualidad.programaPostgradoTableTitle;
    break;
  default:
    tableTitle = i18n.productGroupTable.productGroupTableTitle;
    break;
  }

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`product-groups/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`product-groups/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleDelete (data) {
    handleDeleteRequest(`product-groups/${data.id}`, undefined, undefined, undefined, true);
  }

  function handleEdit (data) {
    history.push({
      pathname: enumPaths.SALES_GROUP_PRODUCTS_FORM,
      state: { data, whatSystemIs }
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

export default ProductGroupsTableFilterEditDelete;

ProductGroupsTableFilterEditDelete.propTypes = {
  whatSystemIs: PropTypes.oneOf([
    enumSystems.MENSUALIDAD,
    enumSystems.SALES
  ])
};

ProductGroupsTableFilterEditDelete.defaultProps = {
  whatSystemIs: enumSystems.SALES
};
