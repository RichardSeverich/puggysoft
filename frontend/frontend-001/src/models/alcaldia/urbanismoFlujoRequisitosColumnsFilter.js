import enumFilterType from "../enumFilterType";

const urbanismoFlujoRequisitosColumnsFilter = function (
  /* ID */ criteriaId,
  criteriaOnChangeId,
  operatorId,
  operatorOnChangeId,
  /* FLUJO */ criteriaIdFlujo,
  criteriaOnChangeIdFlujo,
  operatorIdFlujo,
  operatorOnChangeIdFlujo,
  /* REQUISITOS */ criteriaRequisitos,
  criteriaOnChangeRequisitos,
  operatorRequisitos,
  operatorOnChangeRequisitos,
  /* ESTADO */ criteriaEstados,
  criteriaOnChangeEstados,
  operatorEstados,
  operatorOnChangeEstados,
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
      criteriaValue: criteriaRequisitos,
      criteriaOnchange: criteriaOnChangeRequisitos,
      operatorValue: operatorRequisitos,
      operatorOnchange: operatorOnChangeRequisitos
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaEstados,
      criteriaOnchange: criteriaOnChangeEstados,
      operatorValue: operatorEstados,
      operatorOnchange: operatorOnChangeEstados
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

export default urbanismoFlujoRequisitosColumnsFilter;
