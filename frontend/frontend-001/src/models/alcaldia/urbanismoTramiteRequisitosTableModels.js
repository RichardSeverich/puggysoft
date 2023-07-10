import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayDataFieldsImport from "./urbanismoTramiteRequisitosDataFields";
import arrayColumnsLabelsImport from "./urbanismoTramiteRequisitosColumnsLabels";
import urbanismoTramiteRequisitosColumnsFilter from "./urbanismoTramiteRequisitosColumnsFilter";

const urbanismoTramiteRequisitosTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId,
  criteriaOnChangeId,
  criteriaSetId,
  operatorId,
  operatorOnChangeId,
  operatorSetId,
  /* TRAMITE */ criteriaTramite,
  criteriaOnChangeTramite,
  criteriaSetTramite,
  operatorTramite,
  operatorOnChangeTramite,
  operatorSetTramite,
  /* Requisitos */ criteriaRequisitos,
  criteriaOnChangeRequisitos,
  criteriaSetRequisitos,
  operatorRequisitos,
  operatorOnChangeRequisitos,
  operatorSetRequisitos,
  /* CREATED BY */ criteriaCreatedBy,
  criteriaOnChangeCreatedBy,
  criteriaSetCreatedBy,
  operatorCreatedBy,
  operatorOnChangeCreatedBy,
  operatorSetCreatedBy,
  /* UPDATED BY */ criteriaUpdatedBy,
  criteriaOnChangeUpdatedBy,
  criteriaSetUpdatedBy,
  operatorUpdatedBy,
  operatorOnChangeUpdatedBy,
  operatorSetUpdatedBy,
  /* CREATED DATE */ criteriaCreatedDate,
  criteriaOnChangeCreatedDate,
  criteriaSetCreatedDate,
  operatorCreatedDate,
  operatorOnChangeCreatedDate,
  operatorSetCreatedDate,
  /* UPDATED DATE */ criteriaUpdatedDate,
  criteriaOnChangeUpdatedDate,
  criteriaSetUpdatedDate,
  operatorUpdatedDate,
  operatorOnChangeUpdatedDate,
  operatorSetUpdatedDate
) {
  let arrayDataFields = arrayDataFieldsImport;
  let arrayColumnsLabels = arrayColumnsLabelsImport;
  let arrayColumnsFilter = urbanismoTramiteRequisitosColumnsFilter(
    /* ID */ criteriaId,
    criteriaOnChangeId,
    operatorId,
    operatorOnChangeId,
    /* TRAMITE */ criteriaTramite,
    criteriaOnChangeTramite,
    operatorTramite,
    operatorOnChangeTramite,
    /* ESTADO */ criteriaRequisitos,
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
  );

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetTramite(enumCompareOperators.TEXT_CONTAINS);
    operatorSetRequisitos(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetTramite("");
    criteriaSetRequisitos("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  const isMinimum = tableColumnsToShow === enumTableColumnsToShow.MINIMUM;

  if (isMedium) {
    arrayColumnsFilter = arrayColumnsFilter.slice(
      0,
      arrayColumnsFilter.length - 4
    );
    arrayColumnsLabels = arrayColumnsLabels.slice(
      0,
      arrayColumnsLabels.length - 4
    );
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  } else if (isMinimum) {
    arrayColumnsFilter = arrayColumnsFilter.slice(
      1,
      arrayColumnsFilter.length - 4
    );
    arrayColumnsLabels = arrayColumnsLabels.slice(
      1,
      arrayColumnsLabels.length - 4
    );
    arrayDataFields = arrayDataFields.slice(1, arrayDataFields.length - 4);
  }

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      tramiteNombreCortoCriteria: criteriaTramite,
      tramiteNombreCortoOperator: operatorTramite,
      requisitoNombreCortoCriteria: criteriaRequisitos,
      requisitoNombreCortoOperator: operatorRequisitos,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues,
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default urbanismoTramiteRequisitosTableModels;
