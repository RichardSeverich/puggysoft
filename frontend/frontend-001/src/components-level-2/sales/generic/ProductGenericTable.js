import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import useInput from "../../../hooks/useInput";
import enumCompareOperators from "../../../models/enumCompareOperators";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import tableModel from "../../../models/sales/productTableModels";

function ProductGenericTable (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons,
    columnsToShow,
    fixArrayData
  } = props;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaCode, onChange: criteriaOnChangeCode, setValue: criteriaSetCode } = useInput("");
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput("");
  const { value: criteriaPurchasePrice, onChange: criteriaOnChangePurchasePrice, setValue: criteriaSetPurchasePrice } = useInput("");
  const { value: criteriaSalePrice, onChange: criteriaOnChangeSalePrice, setValue: criteriaSetSalePrice } = useInput("");
  const { value: criteriaStock, onChange: criteriaOnChangeStock, setValue: criteriaSetStock } = useInput("");
  const { value: criteriaMinimumStock, onChange: criteriaOnChangeMinimumStock, setValue: criteriaSetMinimumStock } = useInput("");
  const { value: criteriaDescription, onChange: criteriaOnChangeDescription, setValue: criteriaSetDescription } = useInput("");
  const { value: criteriaLocation, onChange: criteriaOnChangeLocation, setValue: criteriaSetLocation } = useInput("");
  const { value: criteriaBarCode, onChange: criteriaOnChangeBarCode, setValue: criteriaSetBarCode } = useInput("");
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCode, onChange: operatorOnChangeCode, setValue: operatorSetCode } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorPurchasePrice, onChange: operatorOnChangePurchasePrice, setValue: operatorSetPurchasePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorSalePrice, onChange: operatorOnChangeSalePrice, setValue: operatorSetSalePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorStock, onChange: operatorOnChangeStock, setValue: operatorSetStock } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorMinimumStock, onChange: operatorOnChangeMinimumStock, setValue: operatorSetMinimumStock } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorDescription, onChange: operatorOnChangeDescription, setValue: operatorSetDescription } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorLocation, onChange: operatorOnChangeLocation, setValue: operatorSetLocation } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorBarCode, onChange: operatorOnChangeBarCode, setValue: operatorSetBarCode } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody, arrayColumnsLabels, arrayDataFields } = tableModel(
    columnsToShow,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* CODE */ criteriaCode, criteriaOnChangeCode, criteriaSetCode, operatorCode, operatorOnChangeCode, operatorSetCode,
    /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /* PURCHASE PRICE */criteriaPurchasePrice, criteriaOnChangePurchasePrice, criteriaSetPurchasePrice, operatorPurchasePrice, operatorOnChangePurchasePrice, operatorSetPurchasePrice,
    /* SALE PRICE */ criteriaSalePrice, criteriaOnChangeSalePrice, criteriaSetSalePrice, operatorSalePrice, operatorOnChangeSalePrice, operatorSetSalePrice,
    /* STOCK */criteriaStock, criteriaOnChangeStock, criteriaSetStock, operatorStock, operatorOnChangeStock, operatorSetStock,
    /* MINIMUM STOCK */criteriaMinimumStock, criteriaOnChangeMinimumStock, criteriaSetMinimumStock, operatorMinimumStock, operatorOnChangeMinimumStock, operatorSetMinimumStock,
    /* DESCRIPTION */criteriaDescription, criteriaOnChangeDescription, criteriaSetDescription, operatorDescription, operatorOnChangeDescription, operatorSetDescription,
    /* LOCATION */criteriaLocation, criteriaOnChangeLocation, criteriaSetLocation, operatorLocation, operatorOnChangeLocation, operatorSetLocation,
    /* BARCODE */criteriaBarCode, criteriaOnChangeBarCode, criteriaSetBarCode, operatorBarCode, operatorOnChangeBarCode, operatorSetBarCode,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
    );

  return (
    <TableFilterGeneric
      arrayColumns={arrayColumnsLabels}
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
      fixArrayData={fixArrayData}
    >
    </TableFilterGeneric>
  );
}

export default ProductGenericTable;

ProductGenericTable.propTypes = {
  numberPagesToShow: PropTypes.number,
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  handleGetData: PropTypes.func,
  handleGetSize: PropTypes.func,
  tableArrayCustomRowButtons: PropTypes.array,
  columnsToShow: PropTypes.oneOf([
    enumTableColumnsToShow.FULL,
    enumTableColumnsToShow.MEDIUM,
    enumTableColumnsToShow.MINIMUM
  ]),
  fixArrayData: PropTypes.func
};

ProductGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL,
  fixArrayData: undefined
};
