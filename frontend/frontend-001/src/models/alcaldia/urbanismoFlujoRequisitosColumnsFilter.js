import enumFilterType from "../enumFilterType";

const urbanismoFlujoRequisitosColumnsFilter = function (
  /* ID */ criteriaId,
  criteriaOnChangeId,
  operatorId,
  operatorOnChangeId,
  /* TRAMITE */ criteriaTramite,
  criteriaOnChangeTramite,
  operatorTramite,
  operatorOnChangeTramite,
  /* ESTADO */ criteriaEstado,
  criteriaOnChangeEstado,
  operatorEstado,
  operatorOnChangeEstado,
  /* NOMBRE */ criteriaNombre,
  criteriaOnChangeNombre,
  operatorNombre,
  operatorOnChangeNombre,
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
      criteriaValue: criteriaTramite,
      criteriaOnchange: criteriaOnChangeTramite,
      operatorValue: operatorTramite,
      operatorOnchange: operatorOnChangeTramite
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaEstado,
      criteriaOnchange: criteriaOnChangeEstado,
      operatorValue: operatorEstado,
      operatorOnchange: operatorOnChangeEstado
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaNombre,
      criteriaOnchange: criteriaOnChangeNombre,
      operatorValue: operatorNombre,
      operatorOnchange: operatorOnChangeNombre
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
