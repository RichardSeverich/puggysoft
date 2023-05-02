import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
  /* TENANT */ criteriaTenant, operatorTenant,
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
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NONE
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCode,
      criteriaOnchange: criteriaOnChangeCode,
      operatorValue: operatorCode,
      operatorOnchange: operatorOnChangeCode
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaName,
      criteriaOnchange: criteriaOnChangeName,
      operatorValue: operatorName,
      operatorOnchange: operatorOnChangeName
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaPurchasePrice,
      criteriaOnchange: criteriaOnChangePurchasePrice,
      operatorValue: operatorPurchasePrice,
      operatorOnchange: operatorOnChangePurchasePrice
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaSalePrice,
      criteriaOnchange: criteriaOnChangeSalePrice,
      operatorValue: operatorSalePrice,
      operatorOnchange: operatorOnChangeSalePrice
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaStock,
      criteriaOnchange: criteriaOnChangeStock,
      operatorValue: operatorStock,
      operatorOnchange: operatorOnChangeStock
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaMinimumStock,
      criteriaOnchange: criteriaOnChangeMinimumStock,
      operatorValue: operatorMinimumStock,
      operatorOnchange: operatorOnChangeMinimumStock
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaDescription,
      criteriaOnchange: criteriaOnChangeDescription,
      operatorValue: operatorDescription,
      operatorOnchange: operatorOnChangeDescription
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaLocation,
      criteriaOnchange: criteriaOnChangeLocation,
      operatorValue: operatorLocation,
      operatorOnchange: operatorOnChangeLocation
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaBarCode,
      criteriaOnchange: criteriaOnChangeBarCode,
      operatorValue: operatorBarCode,
      operatorOnchange: operatorOnChangeBarCode
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCreatedBy,
      criteriaOnchange: criteriaOnChangeCreatedBy,
      operatorValue: operatorCreatedBy,
      operatorOnchange: operatorOnChangeCreatedBy
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUpdatedBy,
      criteriaOnchange: criteriaOnChangeUpdatedBy,
      operatorValue: operatorUpdatedBy,
      operatorOnchange: operatorOnChangeUpdatedBy
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaCreatedDate,
      criteriaOnchange: criteriaOnChangeCreatedDate,
      operatorValue: operatorCreatedDate,
      operatorOnchange: operatorOnChangeCreatedDate
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaUpdatedDate,
      criteriaOnchange: criteriaOnChangeUpdatedDate,
      operatorValue: operatorUpdatedDate,
      operatorOnchange: operatorOnChangeUpdatedDate
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.TEXT_CONTAINS);
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

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetCode("");
    criteriaSetName("");
    criteriaSetPurchasePrice("");
    criteriaSetSalePrice("");
    criteriaSetStock("");
    criteriaSetMinimumStock("");
    criteriaSetDescription("");
    criteriaSetLocation("");
    criteriaSetBarCode("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const getFilterBody = () => {
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
      tenantCriteria: criteriaTenant,
      tenantOperator: operatorTenant,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues
  };
};

export default getColumnsFilterModel;
