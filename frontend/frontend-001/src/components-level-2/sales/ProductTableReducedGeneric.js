import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "./../generic/TableFilterGeneric";
import arrayDataFields from "../../models/sales/arrayProductDataFieldsReduced";
import arrayColumns from "../../models/sales/arrayProductColumnsReduced";
import enumCompareOperators from "./../../models/enumCompareOperators";
import useInput from "./../../hooks/useInput";
import getColumnsFilterModel from "../../models/sales/arrayProductColumnsFilterSelectionReduced";

function ProductTableReducedGeneric (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons
  } = props;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaCode, onChange: criteriaOnChangeCode, setValue: criteriaSetCode } = useInput("");
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput("");
  const { value: criteriaPurchasePrice, onChange: criteriaOnChangePurchasePrice, setValue: criteriaSetPurchasePrice } = useInput("");
  const { value: criteriaSalePrice, onChange: criteriaOnChangeSalePrice, setValue: criteriaSetSalePrice } = useInput("");
  const { value: criteriaStock, onChange: criteriaOnChangeStock, setValue: criteriaSetStock } = useInput("");
  const { value: criteriaMinimumStock, onChange: criteriaOnChangeMinimumStock, setValue: criteriaSetMinimumStock } = useInput("");

  // FILTER OPERATORS
  const { value: operatorCode, onChange: operatorOnChangeCode, setValue: operatorSetCode } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorPurchasePrice, onChange: operatorOnChangePurchasePrice, setValue: operatorSetPurchasePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorSalePrice, onChange: operatorOnChangeSalePrice, setValue: operatorSetSalePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorStock, onChange: operatorOnChangeStock, setValue: operatorSetStock } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorMinimumStock, onChange: operatorOnChangeMinimumStock, setValue: operatorSetMinimumStock } = useInput(enumCompareOperators.NUMBER_EQUALS);

  const criteriaTenant = window.sessionStorage.getItem("tenant");
  const operatorTenant = enumCompareOperators.TEXT_EQUALS;
  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /* TENANT */ criteriaTenant, operatorTenant,
    /* CODE */ criteriaCode, criteriaOnChangeCode, criteriaSetCode, operatorCode, operatorOnChangeCode, operatorSetCode,
    /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /* PURCHASE PRICE */criteriaPurchasePrice, criteriaOnChangePurchasePrice, criteriaSetPurchasePrice, operatorPurchasePrice, operatorOnChangePurchasePrice, operatorSetPurchasePrice,
    /* SALE PRICE */ criteriaSalePrice, criteriaOnChangeSalePrice, criteriaSetSalePrice, operatorSalePrice, operatorOnChangeSalePrice, operatorSetSalePrice,
    /* STOCK */criteriaStock, criteriaOnChangeStock, criteriaSetStock, operatorStock, operatorOnChangeStock, operatorSetStock,
    /* MINIMUM STOCK */criteriaMinimumStock, criteriaOnChangeMinimumStock, criteriaSetMinimumStock, operatorMinimumStock, operatorOnChangeMinimumStock, operatorSetMinimumStock
  );

  return (
    <TableFilterGeneric
      arrayColumns={arrayColumns}
      arrayDataFields={arrayDataFields}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      numberPagesToShow={numberPagesToShow}
      arrayColumnsFilter={arrayColumnsFilter}
      clearFilters={clearFilters}
      getFilterBody={getFilterBody}
    >
    </TableFilterGeneric>
  );
}

export default ProductTableReducedGeneric;

ProductTableReducedGeneric.propTypes = {
  numberPagesToShow: PropTypes.number,
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  handleGetData: PropTypes.func,
  handleGetSize: PropTypes.func,
  tableArrayCustomRowButtons: PropTypes.array
};

ProductTableReducedGeneric.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: "",
  handleGetData: () => {},
  handleGetSize: () => {},
  tableArrayCustomRowButtons: []
};
