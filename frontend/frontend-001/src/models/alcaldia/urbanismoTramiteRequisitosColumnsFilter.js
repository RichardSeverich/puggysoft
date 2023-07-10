import enumFilterType from "../enumFilterType";

const urbanismoTramiteRequisitosColumnsFilter = function (
  /* ID */ criteriaId,
  criteriaOnChangeId,
  operatorId,
  operatorOnChangeId,
  /* TRAMITE */ criteriaTramite,
  criteriaOnChangeTramite,
  operatorTramite,
  operatorOnChangeTramite,
  /* REQUISITOS */ criteriaRequisitos,
  criteriaOnChangeRequisitos,
  operatorRequisitos,
  operatorOnChangeRequisitos,
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
      type: enumFilterType.NONE,
      criteriaValue: criteriaTramite,
      criteriaOnchange: criteriaOnChangeTramite,
      operatorValue: operatorTramite,
      operatorOnchange: operatorOnChangeTramite
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

export default urbanismoTramiteRequisitosColumnsFilter;
