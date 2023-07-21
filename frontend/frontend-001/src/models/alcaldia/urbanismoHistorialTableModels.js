import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayDataFieldsImport from "./urbanismoHistorialDataFields";
import arrayColumnsLabelsImport from "./urbanismoHistorialColumnsLabels";
import urbanismoHistorialColumnsFilter from "./urbanismoHistorialColumnsFilter";

const urbanismoHistorialTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId,
  criteriaOnChangeId,
  criteriaSetId,
  operatorId,
  operatorOnChangeId,
  operatorSetId,
  /* IDFLUJO */ criteriaIdFlujo,
  criteriaOnChangeIdFlujo,
  criteriaSetIdFlujo,
  operatorIdFlujo,
  operatorOnChangeIdFlujo,
  operatorSetIdFlujo,
  /* USERNAME */criteriaUsername,
  criteriaOnChangeUsername,
  criteriaSetUsername,
  operatorUsername,
  operatorOnChangeUsername,
  operatorSetUsername,
  /* ESTADO ANTERIOR */criteriaEstadoAnterior,
  criteriaOnChangeEstadoAnterior,
  criteriaSetEstadoAnterior,
  operatorEstadoAnterior,
  operatorOnChangeEstadoAnterior,
  operatorSetEstadoAnterior,
  /* ESTADO NUEVO */ criteriaEstadoNuevo,
  criteriaOnChangeEstadoNuevo,
  criteriaSetEstadoNuevo, operatorEstadoNuevo,
  operatorOnChangeEstadoNuevo,
  operatorSetEstadoNuevo,
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
  let arrayColumnsFilter = urbanismoHistorialColumnsFilter(
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
  );

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetIdFlujo(enumCompareOperators.TEXT_CONTAINS);
    operatorSetEstadoAnterior(enumCompareOperators.TEXT_CONTAINS);
    operatorSetEstadoNuevo(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUsername(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetIdFlujo("");
    criteriaSetEstadoAnterior("");
    criteriaSetEstadoNuevo("");
    criteriaSetUsername("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  const isMinimum = tableColumnsToShow === enumTableColumnsToShow.MINIMUM;

  if (isMedium) {
    arrayColumnsFilter = arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 4);
    arrayColumnsFilter.splice(3, 1);
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 4);
    arrayColumnsLabels.splice(3, 1);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
    arrayDataFields.splice(3, 1);
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
      idTramiteFlujoCriteria: criteriaIdFlujo,
      idTramiteFlujoOperator: operatorIdFlujo,
      usernameCriteria: criteriaUsername,
      usernameOperator: operatorUsername,
      estadoAnteriorCriteria: criteriaEstadoAnterior,
      estadoAnteriorOperator: operatorEstadoAnterior,
      estadoNuevoCriteria: criteriaEstadoNuevo,
      estadoNuevoOperator: operatorEstadoNuevo,
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

export default urbanismoHistorialTableModels;
