import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayFields from "./arrayProductDataFields";
import arrayLabels from "./arrayProductColumns";
import tableFilter from "./productTableFilter";

const tableModel = function (
  tableColumnsToShow,
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
  ) {
  let arrayDataFields = arrayFields;
  let arrayColumnsLabels = arrayLabels;
  let arrayColumnsFilter = tableFilter(
    /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
    /* CODE */ criteriaCode, criteriaOnChangeCode, operatorCode, operatorOnChangeCode,
    /* NAME */criteriaName, criteriaOnChangeName, operatorName, operatorOnChangeName,
    /* PURCHASE PRICE */criteriaPurchasePrice, criteriaOnChangePurchasePrice, operatorPurchasePrice, operatorOnChangePurchasePrice,
    /* SALE PRICE */ criteriaSalePrice, criteriaOnChangeSalePrice, operatorSalePrice, operatorOnChangeSalePrice,
    /* STOCK */criteriaStock, criteriaOnChangeStock, operatorStock, operatorOnChangeStock,
    /* MINIMUM STOCK */criteriaMinimumStock, criteriaOnChangeMinimumStock, operatorMinimumStock, operatorOnChangeMinimumStock,
    /* DESCRIPTION */criteriaDescription, criteriaOnChangeDescription, operatorDescription, operatorOnChangeDescription,
    /* LOCATION */criteriaLocation, criteriaOnChangeLocation, operatorLocation, operatorOnChangeLocation,
    /* BARCODE */criteriaBarCode, criteriaOnChangeBarCode, operatorBarCode, operatorOnChangeBarCode,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate);

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetName("");
    criteriaSetPurchasePrice("");
    criteriaSetSalePrice("");
    criteriaSetStock("");
    criteriaSetMinimumStock("");
    criteriaSetDescription("");
    criteriaSetLocation("");
    criteriaSetBarCode("");
    criteriaSetCode("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetCode(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetPurchasePrice(enumCompareOperators.NUMBER_EQUALS);
    operatorSetSalePrice(enumCompareOperators.NUMBER_EQUALS);
    operatorSetStock(enumCompareOperators.NUMBER_EQUALS);
    operatorSetMinimumStock(enumCompareOperators.NUMBER_EQUALS);
    operatorSetDescription(enumCompareOperators.TEXT_CONTAINS);
    operatorSetLocation(enumCompareOperators.TEXT_CONTAINS);
    operatorSetBarCode(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  if (isMedium) {
    arrayColumnsFilter = arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 4);
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  }
  const isMinimum = tableColumnsToShow === enumTableColumnsToShow.MINIMUM;
  if (isMinimum) {
    arrayColumnsFilter = arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 9);
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 9);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 9);
  }

  const getFilterBody = () => {
    const tenant = window.sessionStorage.getItem("tenant");
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      nameCriteria: criteriaName,
      nameOperator: operatorName,
      purchasePriceCriteria: criteriaPurchasePrice,
      purchasePriceOperator: operatorPurchasePrice,
      salePriceCriteria: criteriaSalePrice,
      salePriceOperator: operatorSalePrice,
      stockCriteria: criteriaStock,
      stockOperator: operatorStock,
      minimumStockCriteria: criteriaMinimumStock,
      minimumStockOperator: operatorMinimumStock,
      descriptionCriteria: criteriaDescription,
      descriptionOperator: operatorDescription,
      locationCriteria: criteriaLocation,
      locationOperator: operatorLocation,
      barCodeCriteria: criteriaBarCode,
      barCodeOperator: operatorBarCode,
      codeCriteria: criteriaCode,
      codeOperator: operatorCode,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate,
      tenantCriteria: tenant,
      tenantOperator: enumCompareOperators.TEXT_EQUALS
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues,
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default tableModel;
