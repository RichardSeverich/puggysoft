import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
    {
      type: enumFilterType.NONE
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.TEXT_CONTAINS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    setOperatorsDefaultValues("");
  };

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      nameCriteria: "",
      nameOperator: enumFilterType.NONE,
      createdByCriteria: "",
      createdByOperator: enumFilterType.NONE,
      updatedByCriteria: "",
      updatedByOperator: enumFilterType.NONE,
      creationDateCriteria: "",
      creationDateOperator: enumFilterType.NONE,
      updateDateCriteria: "",
      updateDateOperator: enumFilterType.NONE
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues
  };
};

export default getColumnsFilterModel;
