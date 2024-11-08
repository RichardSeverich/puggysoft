import enumFilterType from "../enumFilterType";

const tableFilter = function (
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
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NONE
    },
    {
      type: enumFilterType.NUMBER,
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

  return arrayColumnsFilter;
};

export default tableFilter;
