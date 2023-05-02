import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
  /* TENANT */ criteriaTenant, operatorTenant,
  /* CODE */ criteriaCode, criteriaOnChangeCode, criteriaSetCode, operatorCode, operatorOnChangeCode, operatorSetCode,
  /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* PURCHASE PRICE */criteriaPurchasePrice, criteriaOnChangePurchasePrice, criteriaSetPurchasePrice, operatorPurchasePrice, operatorOnChangePurchasePrice, operatorSetPurchasePrice,
  /* SALE PRICE */ criteriaSalePrice, criteriaOnChangeSalePrice, criteriaSetSalePrice, operatorSalePrice, operatorOnChangeSalePrice, operatorSetSalePrice,
  /* STOCK */criteriaStock, criteriaOnChangeStock, criteriaSetStock, operatorStock, operatorOnChangeStock, operatorSetStock,
  /* MINIMUM STOCK */criteriaMinimumStock, criteriaOnChangeMinimumStock, criteriaSetMinimumStock, operatorMinimumStock, operatorOnChangeMinimumStock, operatorSetMinimumStock
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NONE
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
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetCode(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetPurchasePrice(enumCompareOperators.NUMBER_EQUALS);
    operatorSetSalePrice(enumCompareOperators.NUMBER_EQUALS);
    operatorSetStock(enumCompareOperators.NUMBER_EQUALS);
    operatorSetMinimumStock(enumCompareOperators.NUMBER_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetCode("");
    criteriaSetName("");
    criteriaSetPurchasePrice("");
    criteriaSetSalePrice("");
    criteriaSetStock("");
    criteriaSetMinimumStock("");
    setOperatorsDefaultValues();
  };

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: "",
      idOperator: enumCompareOperators.NONE,
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
      descriptionCriteria: "",
      descriptionOperator: enumCompareOperators.NONE,
      locationCriteria: "",
      locationOperator: enumCompareOperators.NONE,
      barCodeCriteria: "",
      barCodeOperator: enumCompareOperators.NONE,
      codeCriteria: "",
      codeOperator: enumCompareOperators.NONE,
      tenantCriteria: criteriaTenant,
      tenantOperator: operatorTenant,
      createdByCriteria: "",
      createdByOperator: enumCompareOperators.NONE,
      updatedByCriteria: "",
      updatedByOperator: enumCompareOperators.NONE,
      creationDateCriteria: "",
      creationDateOperator: enumCompareOperators.NONE,
      updateDateCriteria: "",
      updateDateOperator: enumCompareOperators.NONE
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
