import enumFilterType from "../enumFilterType";

const urbanismoHistorialColumnsFilter = function (
  /* ID */ criteriaId,
  criteriaOnChangeId,
  operatorId,
  operatorOnChangeId,
  /* FLUJO */ criteriaIdFlujo,
  criteriaOnChangeIdFlujo,
  operatorIdFlujo,
  operatorOnChangeIdFlujo,
  /* USERNAME */ criteriaUsername,
  criteriaOnChangeUsername,
  operatorUsername,
  operatorOnChangeUsername,
  /* ESTADO ANTERIOR */ criteriaEstadoAnterior,
  criteriaOnChangeEstadoAnterior,
  operatorEstadoAnterior,
  operatorOnChangeEstadoAnterior,
  /* ESTADO NUEVO */ criteriaEstadoNuevo,
  criteriaOnChangeEstadoNuevo,
  operatorEstadoNuevo,
  operatorOnChangeEstadoNuevo,
  /* CREATED BY */ criteriaCreatedBy,
  criteriaOnChangeCreatedBy,
  operatorCreatedBy,
  operatorOnChangeCreatedBy,
  /* UPDATED BY */ criteriaUpdatedBy,
  criteriaOnChangeUpdatedBy,
  operatorUpdatedBy,
  operatorOnChangeUpdatedBy,
  /* CREATED DATE */ criteriaCreatedDate,
  criteriaOnChangeCreatedDate,
  operatorCreatedDate,
  operatorOnChangeCreatedDate,
  /* UPDATED DATE */ criteriaUpdatedDate,
  criteriaOnChangeUpdatedDate,
  operatorUpdatedDate,
  operatorOnChangeUpdatedDate
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
      criteriaValue: criteriaIdFlujo,
      criteriaOnchange: criteriaOnChangeIdFlujo,
      operatorValue: operatorIdFlujo,
      operatorOnchange: operatorOnChangeIdFlujo
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUsername,
      criteriaOnchange: criteriaOnChangeUsername,
      operatorValue: operatorUsername,
      operatorOnchange: operatorOnChangeUsername
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaEstadoAnterior,
      criteriaOnchange: criteriaOnChangeEstadoAnterior,
      operatorValue: operatorEstadoAnterior,
      operatorOnchange: operatorOnChangeEstadoAnterior
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaEstadoNuevo,
      criteriaOnchange: criteriaOnChangeEstadoNuevo,
      operatorValue: operatorEstadoNuevo,
      operatorOnchange: operatorOnChangeEstadoNuevo
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

export default urbanismoHistorialColumnsFilter;
