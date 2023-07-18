import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayDataFieldsImport from "./regulaLotesDataFields";
import arrayColumnsLabelsImport from "./regulaLotesColumnsLabels";
import regulaLotesColumnsFilter from "./regulaLotesColumnsFilter";

const regulaLotesTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* NOMBRE CLIENTE */ criteriaNombreCliente, criteriaOnChangeNombreCliente, criteriaSetNombreCliente, operatorNombreCliente, operatorOnChangeNombreCliente, operatorSetNombreCliente,
  /* CI CLIENTE */criteriaCiCliente, criteriaOnChangeCiCliente, criteriaSetCiCliente, operatorCiCliente, operatorOnChangeCiCliente, operatorSetCiCliente,
  /* CODIGO CATASTRAL */ criteriaCodigoCatastral, criteriaOnChangeCodigoCatastral, criteriaSetCodigoCatastral, operatorCodigoCatastral, operatorOnChangeCodigoCatastral, operatorSetCodigoCatastral,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
) {
  let arrayDataFields = arrayDataFieldsImport;
  let arrayColumnsLabels = arrayColumnsLabelsImport;
  let arrayColumnsFilter = regulaLotesColumnsFilter(
    /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
    /* NOMBRE CLIENTE */ criteriaNombreCliente, criteriaOnChangeNombreCliente, operatorNombreCliente, operatorOnChangeNombreCliente,
    /* CI CLIENTE */criteriaCiCliente, criteriaOnChangeCiCliente, operatorCiCliente, operatorOnChangeCiCliente,
    /* CODIGO CATASTRAL */ criteriaCodigoCatastral, criteriaOnChangeCodigoCatastral, operatorCodigoCatastral, operatorOnChangeCodigoCatastral,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate);
  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetNombreCliente(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCiCliente(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCodigoCatastral(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetNombreCliente("");
    criteriaSetCiCliente("");
    criteriaSetCodigoCatastral("");
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
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  } else if (isMinimum) {
    arrayColumnsFilter = arrayColumnsFilter.slice(1, arrayColumnsFilter.length - 4);
    arrayColumnsLabels = arrayColumnsLabels.slice(1, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(1, arrayDataFields.length - 4);
  }

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      nombreClienteCriteria: criteriaNombreCliente,
      nombreClienteOperator: operatorNombreCliente,
      CiClienteCriteria: criteriaCiCliente,
      CiClienteOperator: operatorCiCliente,
      codigoCatastralCriteria: criteriaCodigoCatastral,
      codigoCatastralOperator: operatorCodigoCatastral,
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

export default regulaLotesTableModels;
