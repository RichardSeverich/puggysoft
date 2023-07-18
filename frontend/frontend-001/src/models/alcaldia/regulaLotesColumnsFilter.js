import enumFilterType from "../enumFilterType";

const regulaLotesColumnsFilter = function (
  /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
  /* NOMBRE CLIENTE */ criteriaNombreCliente, criteriaOnChangeNombreCliente, operatorNombreCliente, operatorOnChangeNombreCliente,
  /* CI CLIENTE */criteriaCiCliente, criteriaOnChangeCiCliente, operatorCiCliente, operatorOnChangeCiCliente,
  /* CODIGO CATASTRAL */ criteriaCodigoCatastral, criteriaOnChangeCodigoCatastral, operatorCodigoCatastral, operatorOnChangeCodigoCatastral,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaNombreCliente,
      criteriaOnchange: criteriaOnChangeNombreCliente,
      operatorValue: operatorNombreCliente,
      operatorOnchange: operatorOnChangeNombreCliente
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCiCliente,
      criteriaOnchange: criteriaOnChangeCiCliente,
      operatorValue: operatorCiCliente,
      operatorOnchange: operatorOnChangeCiCliente
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCodigoCatastral,
      criteriaOnchange: criteriaOnChangeCodigoCatastral,
      operatorValue: operatorCodigoCatastral,
      operatorOnchange: operatorOnChangeCodigoCatastral
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
    },
    {
      type: enumFilterType.NONE
    }
  ];

  return arrayColumnsFilter;
};

export default regulaLotesColumnsFilter;
