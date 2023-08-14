import enumFilterType from "../enumFilterType";

const alcaldiaRecursosMunicipalesTimbresColumnsFilter = function (
  /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
  /* TALONARIO INICIO */ criteriaTalonarioInicio, criteriaOnChangeTalonarioInicio, operatorTalonarioInicio, operatorOnChangeTalonarioInicio,
  /* TALONARIO FINAL */ criteriaTalonarioFinal, criteriaOnChangeTalonarioFinal, operatorTalonarioFinal, operatorOnChangeTalonarioFinal,
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
      type: enumFilterType.NONE
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaTalonarioInicio,
      criteriaOnchange: criteriaOnChangeTalonarioInicio,
      operatorValue: operatorTalonarioInicio,
      operatorOnchange: operatorOnChangeTalonarioInicio
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaTalonarioFinal,
      criteriaOnchange: criteriaOnChangeTalonarioFinal,
      operatorValue: operatorTalonarioFinal,
      operatorOnchange: operatorOnChangeTalonarioFinal
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

export default alcaldiaRecursosMunicipalesTimbresColumnsFilter;
