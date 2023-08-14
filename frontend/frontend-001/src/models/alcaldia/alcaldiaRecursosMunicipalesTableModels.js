import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../alcaldia/enumTableColumnsToShow";
import arrayDataFieldsImport from "./alcaldiaRecursosMunicipalesDataFields";
import arrayColumnsLabelsImport from "./alcaldiaRecursosMunicipalesColumnsLabels";
import alcaldiaRecursosMunicipalesColumnsFilter from "./alcaldiaRecursosMunicipalesColumnsFilter";

const alcaldiaRecursosMunicipalesTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* CODIGO */ criteriaCodigo, criteriaOnChangeCodigo, criteriaSetCodigo, operatorCodigo, operatorOnChangeCodigo, operatorSetCodigo,
  /* CODIGO AUXILIAR */ criteriaCodigoAuxiliar, criteriaOnChangeCodigoAuxiliar, criteriaSetCodigoAuxiliar, operatorCodigoAuxiliar, operatorOnChangeCodigoAuxiliar, operatorSetCodigoAuxiliar,
  /* NAME */criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* PRECIO */ criteriaPrecio, criteriaOnChangePrecio, criteriaSetPrecio, operatorPrecio, operatorOnChangePrecio, operatorSetPrecio,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
) {
  let arrayDataFields = arrayDataFieldsImport;
  let arrayColumnsLabels = arrayColumnsLabelsImport;
  let arrayColumnsFilter = alcaldiaRecursosMunicipalesColumnsFilter(
    /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
    /* CODIGO */ criteriaCodigo, criteriaOnChangeCodigo, operatorCodigo, operatorOnChangeCodigo,
    /* CODIGO AUXILIAR */ criteriaCodigoAuxiliar, criteriaOnChangeCodigoAuxiliar, operatorCodigoAuxiliar, operatorOnChangeCodigoAuxiliar,
    /* NAME */criteriaName, criteriaOnChangeName, operatorName, operatorOnChangeName,
    /* PRECIO */ criteriaPrecio, criteriaOnChangePrecio, operatorPrecio, operatorOnChangePrecio,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate);

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetCodigo(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCodigoAuxiliar(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetPrecio(enumCompareOperators.NUMBER_EQUALS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetCodigo("");
    criteriaSetCodigoAuxiliar("");
    criteriaSetName("");
    criteriaSetPrecio("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  const isMinimum = tableColumnsToShow === enumTableColumnsToShow.MINIMUM;
  const isSaleAdd = tableColumnsToShow === enumTableColumnsToShow.SALEADD;
  const isSaleDeleted = tableColumnsToShow === enumTableColumnsToShow.SALEDELETE;

  if (isMedium) {
    arrayColumnsFilter = arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 4);
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  } else if (isMinimum) {
    arrayColumnsFilter = arrayColumnsFilter.slice(1, arrayColumnsFilter.length - 4);
    arrayColumnsLabels = arrayColumnsLabels.slice(1, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(1, arrayDataFields.length - 4);
  } else if (isSaleAdd) {
    arrayColumnsFilter = arrayColumnsFilter.slice(1, arrayColumnsFilter.length - 4);
    arrayColumnsFilter.push({ type: "NONE" });
    arrayColumnsLabels = arrayColumnsLabels.slice(1, arrayColumnsLabels.length - 4);
    arrayColumnsLabels.push("Cantidad");
    arrayDataFields = arrayDataFields.slice(1, arrayDataFields.length - 4);
  } else if (isSaleDeleted) {
    arrayColumnsFilter = arrayColumnsFilter.slice(1, arrayColumnsFilter.length - 4);
    arrayColumnsFilter.push({ type: "NONE" });
    arrayColumnsLabels = arrayColumnsLabels.slice(1, arrayColumnsLabels.length - 4);
    arrayColumnsLabels.push("Cantidad");
    arrayDataFields = arrayDataFields.slice(1, arrayDataFields.length - 4);
    arrayDataFields.push("cantidad");
  }

  const getFilterBody = () => {
    const tenant = window.sessionStorage.getItem("tenant");
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      codigoCriteria: criteriaCodigo,
      codigoOperator: operatorCodigo,
      codigoAuxiliarCriteria: criteriaCodigoAuxiliar,
      codigoAuxiliarOperator: operatorCodigoAuxiliar,
      nameCriteria: criteriaName,
      nameOperator: operatorName,
      precioCriteria: criteriaPrecio,
      precioOperator: operatorPrecio,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate,
      tenantCriteria: tenant,
      tenantOperator: enumCompareOperators.TEXT_EQUALS
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

export default alcaldiaRecursosMunicipalesTableModels;
