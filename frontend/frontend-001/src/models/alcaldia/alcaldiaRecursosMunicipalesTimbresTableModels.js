import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../alcaldia/enumTableColumnsToShow";
import arrayDataFieldsImport from "./alcaldiaRecursosMunicipalesTimbresDataFields";
import arrayColumnsLabelsImport from "./alcaldiaRecursosMunicipalesTimbresColumnsLabels";
import alcaldiaRecursosMunicipalesTimbresColumnsFilter from "./alcaldiaRecursosMunicipalesTimbresColumnsFilter";
import i18n from "../../i18n/i18n";

const alcaldiaRecursosMunicipalesTimbresTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* NAME */criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* TALONARIO INICIO */ criteriaTalonarioInicio, criteriaOnChangeTalonarioInicio, criteriaSetTalonarioInicio, operatorTalonarioInicio, operatorOnChangeTalonarioInicio, operatorSetTalonarioInicio,
  /* TALONARIO FINAL */ criteriaTalonarioFinal, criteriaOnChangeTalonarioFinal, criteriaSetTalonarioFinal, operatorTalonarioFinal, operatorOnChangeTalonarioFinal, operatorSetTalonarioFinal,
  /* PRECIO */ criteriaPrecio, criteriaOnChangePrecio, criteriaSetPrecio, operatorPrecio, operatorOnChangePrecio, operatorSetPrecio,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
) {
  let arrayDataFields = arrayDataFieldsImport;
  let arrayColumnsLabels = arrayColumnsLabelsImport;
  let arrayColumnsFilter = alcaldiaRecursosMunicipalesTimbresColumnsFilter(
    /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
    /* NAME */criteriaName, criteriaOnChangeName, operatorName, operatorOnChangeName,
    /* TALONARIO INICIO */ criteriaTalonarioInicio, criteriaOnChangeTalonarioInicio, operatorTalonarioInicio, operatorOnChangeTalonarioInicio,
    /* TALONARIO FINAL */ criteriaTalonarioFinal, criteriaOnChangeTalonarioFinal, operatorTalonarioFinal, operatorOnChangeTalonarioFinal,
    /* PRECIO */ criteriaPrecio, criteriaOnChangePrecio, operatorPrecio, operatorOnChangePrecio,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate);

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.TEXT_CONTAINS);
    operatorSetTalonarioInicio(enumCompareOperators.TEXT_CONTAINS);
    operatorSetTalonarioFinal(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetPrecio(enumCompareOperators.NUMBER_EQUALS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetTalonarioInicio("");
    criteriaSetTalonarioFinal("");
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
      talonarioInicioCriteria: criteriaTalonarioInicio,
      talonarioInicioOperator: operatorTalonarioInicio,
      talonarioFinalCriteria: criteriaTalonarioFinal,
      talonarioFinalOperator: operatorTalonarioFinal,
      nameCriteria: i18n.alcaldiaRecursosMunicipalesTimbresForm.defaultTimbre,
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

export default alcaldiaRecursosMunicipalesTimbresTableModels;
