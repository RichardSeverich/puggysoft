import enumFilterType from "../enumFilterType";

const alcaldiaRecursosMunicipalesColumnsFilter = function (
  /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
  /* CODIGO */ criteriaCodigo, criteriaOnChangeCodigo, operatorCodigo, operatorOnChangeCodigo,
  /* CODIGO AUXILIAR */ criteriaCodigoAuxiliar, criteriaOnChangeCodigoAuxiliar, operatorCodigoAuxiliar, operatorOnChangeCodigoAuxiliar,
  /* NAME */criteriaName, criteriaOnChangeName, operatorName, operatorOnChangeName,
  /* PRECIO */ criteriaPrecio, criteriaOnChangePrecio, operatorPrecio, operatorOnChangePrecio,
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
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaCodigo,
      criteriaOnchange: criteriaOnChangeCodigo,
      operatorValue: operatorCodigo,
      operatorOnchange: operatorOnChangeCodigo
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaCodigoAuxiliar,
      criteriaOnchange: criteriaOnChangeCodigoAuxiliar,
      operatorValue: operatorCodigoAuxiliar,
      operatorOnchange: operatorOnChangeCodigoAuxiliar
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
      criteriaValue: criteriaPrecio,
      criteriaOnchange: criteriaOnChangePrecio,
      operatorValue: operatorPrecio,
      operatorOnchange: operatorOnChangePrecio
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

export default alcaldiaRecursosMunicipalesColumnsFilter;
