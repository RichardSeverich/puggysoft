import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
  /* USERNAME */ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
  /* DNI */ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
  /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* LAST NAME */ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUsername,
      criteriaOnchange: criteriaOnChangeUsername,
      operatorValue: operatorUsername,
      operatorOnchange: operatorOnChangeUsername
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaDni,
      criteriaOnchange: criteriaOnChangeDni,
      operatorValue: operatorDni,
      operatorOnchange: operatorOnChangeDni
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaName,
      criteriaOnchange: criteriaOnChangeName,
      operatorValue: operatorName,
      operatorOnchange: operatorOnChangeName
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaLastName,
      criteriaOnchange: criteriaOnChangeLastName,
      operatorValue: operatorLastName,
      operatorOnchange: operatorOnChangeLastName
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetUsername(enumCompareOperators.TEXT_CONTAINS);
    operatorSetDni(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetLastName(enumCompareOperators.TEXT_CONTAINS);
  };

  const clearFilters = function () {
    criteriaSetUsername("");
    criteriaSetDni("");
    criteriaSetName("");
    criteriaSetLastName("");
  };

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: "",
      idOperator: enumFilterType.NONE,
      usernameCriteria: criteriaUsername,
      usernameOperator: operatorUsername,
      passwordCriteria: "",
      passwordOperator: enumFilterType.NONE,
      dniCriteria: criteriaDni,
      dniOperator: operatorDni,
      nameCriteria: criteriaName,
      nameOperator: operatorName,
      secondNameCriteria: "",
      secondNameOperator: enumFilterType.NONE,
      lastNameCriteria: criteriaLastName,
      lastNameOperator: operatorLastName,
      secondLastNameCriteria: "",
      secondLastNameOperator: enumFilterType.NONE,
      birthDateCriteria: "",
      birthDateOperator: enumFilterType.NONE,
      ageCriteria: "",
      ageOperator: enumFilterType.NONE,
      sexCriteria: "",
      sexOperator: enumFilterType.NONE,
      occupationCriteria: "",
      occupationOperator: enumFilterType.NONE,
      telephoneCriteria: "",
      telephoneOperator: enumFilterType.NONE,
      addressCriteria: "",
      addressOperator: enumFilterType.NONE,
      emailCriteria: "",
      emailOperator: enumFilterType.NONE,
      activeCriteria: "",
      activeOperator: enumFilterType.NONE,
      emailVerifiedCriteria: "",
      emailVerifiedOperator: enumFilterType.NONE,
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
