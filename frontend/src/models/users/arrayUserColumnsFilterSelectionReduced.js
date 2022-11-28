import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
  /* USERNAME */ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
  /* DNI */ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
  /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* SECOND NAME */criteriaSecondName, criteriaOnChangeSecondName, criteriaSetSecondName, operatorSecondName, operatorOnChangeSecondName, operatorSetSecondName,
  /* LAST NAME */ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName,
  /* SECOND LAST NAME */criteriaSecondLastName, criteriaOnChangeSecondLastName, criteriaSetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, operatorSetSecondLastName
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
      criteriaValue: criteriaSecondName,
      criteriaOnchange: criteriaOnChangeSecondName,
      operatorValue: operatorSecondName,
      operatorOnchange: operatorOnChangeSecondName
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaLastName,
      criteriaOnchange: criteriaOnChangeLastName,
      operatorValue: operatorLastName,
      operatorOnchange: operatorOnChangeLastName
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaSecondLastName,
      criteriaOnchange: criteriaOnChangeSecondLastName,
      operatorValue: operatorSecondLastName,
      operatorOnchange: operatorOnChangeSecondLastName
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetUsername(enumCompareOperators.TEXT_CONTAINS);
    operatorSetDni(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetSecondName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetLastName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetSecondLastName(enumCompareOperators.TEXT_CONTAINS);
  };

  const clearFilters = function () {
    criteriaSetUsername("");
    criteriaSetDni("");
    criteriaSetName("");
    criteriaSetSecondName("");
    criteriaSetLastName("");
    criteriaSetSecondLastName("");
    setOperatorsDefaultValues("");
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
      secondNameCriteria: criteriaSecondName,
      secondNameOperator: operatorSecondName,
      lastNameCriteria: criteriaLastName,
      lastNameOperator: operatorLastName,
      secondLastNameCriteria: criteriaSecondLastName,
      secondLastNameOperator: operatorSecondLastName,
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
