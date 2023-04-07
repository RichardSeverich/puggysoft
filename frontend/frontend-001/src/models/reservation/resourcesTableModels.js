import enumCompareOperators from "./../enumCompareOperators";
import enumTableColumnsToShow from "./../enumTableColumnsToShow";
import arrayDataFields from "./resourceDataFields";
import arrayColumnsLabels from "./resourcesColumnsLabels";
import resourcesColumnsFilter from "./resourcesColumnsFilter";

const resourcesTableModels = function (
  tableColumnsToShow,
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* INTERVAL TIME */criteriaPriceInterval, criteriaOnChangePriceInterval, criteriaSetPriceInterval, operatorPriceInterval, operatorOnChangePriceInterval, operatorSetPriceInterval,
  /* DESCRIPTION */ criteriaDescription, criteriaOnChangeDescription, criteriaSetDescription, operatorDescription, operatorOnChangeDescription, operatorSetDescription,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
) {
  const arrayColumnsFilter = resourcesColumnsFilter(
    /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
    /* NAME */ criteriaName, criteriaOnChangeName, operatorName, operatorOnChangeName,
    /* INTERVAL TIME */criteriaPriceInterval, criteriaOnChangePriceInterval, operatorPriceInterval, operatorOnChangePriceInterval,
    /* DESCRIPTION */ criteriaDescription, criteriaOnChangeDescription, operatorDescription, operatorOnChangeDescription,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate);

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetPriceInterval(enumCompareOperators.NUMBER_EQUALS);
    operatorSetDescription(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetName("");
    criteriaSetPriceInterval("");
    criteriaSetDescription("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MENDIUM;
  const isMinimum = tableColumnsToShow === enumTableColumnsToShow.MINIMUM;

  if (isMedium) {
    arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 4);
    arrayColumnsLabels.slice(0, arrayColumnsFilter.length - 4);
    arrayDataFields.slice(0, arrayColumnsFilter.length - 4);
  } else if (isMinimum) {
    arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 5);
    arrayColumnsLabels.slice(0, arrayColumnsFilter.length - 5);
    arrayDataFields.slice(0, arrayColumnsFilter.length - 5);
  }

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      nameCriteria: criteriaName,
      nameOperator: operatorName,
      priceIntervalTimeCriteria: criteriaPriceInterval,
      priceIntervaTimelOperator: operatorPriceInterval,
      descriptionCriteria: "",
      descriptionOperator: enumCompareOperators.NONE,
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

export default resourcesTableModels;
