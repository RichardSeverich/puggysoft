import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
  /* TENANT */ criteriaTenant, operatorTenant,
  /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* SALE PRICE */ criteriaSalePrice, criteriaOnChangeSalePrice, criteriaSetSalePrice, operatorSalePrice, operatorOnChangeSalePrice, operatorSetSalePrice,
  /* STOCK */criteriaStock, criteriaOnChangeStock, criteriaSetStock, operatorStock, operatorOnChangeStock, operatorSetStock
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NONE
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
      criteriaValue: criteriaSalePrice,
      criteriaOnchange: criteriaOnChangeSalePrice,
      operatorValue: operatorSalePrice,
      operatorOnchange: operatorOnChangeSalePrice
    },
    {
      type: enumFilterType.NONE
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetSalePrice(enumCompareOperators.NUMBER_EQUALS);
    operatorSetStock(enumCompareOperators.NUMBER_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetName("");
    criteriaSetSalePrice("");
    criteriaSetStock("");
    setOperatorsDefaultValues();
  };

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: "",
      idOperator: enumCompareOperators.NONE,
      codeCriteria: "",
      codeOperator: enumCompareOperators.NONE,
      nameCriteria: criteriaName,
      nameOperator: operatorName,
      purchasePriceCriteria: "",
      purchasePriceOperator: enumCompareOperators.NONE,
      salePriceCriteria: criteriaSalePrice,
      salePriceOperator: operatorSalePrice,
      stockCriteria: "",
      stockOperator: enumCompareOperators.NONE,
      minimumStockCriteria: "",
      minimumStockOperator: enumCompareOperators.NONE,
      descriptionCriteria: "",
      descriptionOperator: enumCompareOperators.NONE,
      locationCriteria: "",
      locationOperator: enumCompareOperators.NONE,
      barCodeCriteria: "",
      barCodeOperator: enumCompareOperators.NONE,
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
