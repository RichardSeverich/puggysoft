import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";
import enumSex from "./../users/enumSex";
import i18n from "../../i18n/i18n";

const getColumnsFilterModel = function (
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* USERNAME */ criteriaUsername, criteriaOnChangeUsername, criteriaSetUsername, operatorUsername, operatorOnChangeUsername, operatorSetUsername,
  /* DNI */ criteriaDni, criteriaOnChangeDni, criteriaSetDni, operatorDni, operatorOnChangeDni, operatorSetDni,
  /* NAME */ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
  /* SECOND NAME */criteriaSecondName, criteriaOnChangeSecondName, criteriaSetSecondName, operatorSecondName, operatorOnChangeSecondName, operatorSetSecondName,
  /* LAST NAME */ criteriaLastName, criteriaOnChangeLastName, criteriaSetLastName, operatorLastName, operatorOnChangeLastName, operatorSetLastName,
  /* SECOND LAST NAME */criteriaSecondLastName, criteriaOnChangeSecondLastName, criteriaSetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, operatorSetSecondLastName,
  /* BIRTHDATE */criteriaBirthDate, criteriaOnChangeBirthDate, criteriaSetBirthDate, operatorBirthDate, operatorOnChangeBirthDate, operatorSetBirthDate,
  /* AGE */criteriaAge, criteriaOnChangeAge, criteriaSetAge, operatorAge, operatorOnChangeAge, operatorSetAge,
  /* SEX */criteriaSex, criteriaOnChangeSex, criteriaSetSex, operatorSex, operatorOnChangeSex, operatorSetSex,
  /* EMAIL */criteriaEmail, criteriaOnChangeEmail, criteriaSetEmail, operatorEmail, operatorOnChangeEmail, operatorSetEmail,
  /* STATUS */criteriaStatus, criteriaOnChangeStatus, criteriaSetStatus, operatorStatus, operatorOnChangeStatus, operatorSetStatus
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NONE
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
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
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaBirthDate,
      criteriaOnchange: criteriaOnChangeBirthDate,
      operatorValue: operatorBirthDate,
      operatorOnchange: operatorOnChangeBirthDate
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaAge,
      criteriaOnchange: criteriaOnChangeAge,
      operatorValue: operatorAge,
      operatorOnchange: operatorOnChangeAge
    },
    {
      type: enumFilterType.DROPDOWN,
      criteriaValue: criteriaSex,
      criteriaOnchange: criteriaOnChangeSex,
      operatorValue: operatorSex,
      operatorOnchange: operatorOnChangeSex,
      dropdownValues: [
        { value: "", text: i18n.userSexText.all },
        { value: enumSex.MALE, text: i18n.userSexText.male },
        { value: enumSex.FEMALE, text: i18n.userSexText.female }
      ]
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaEmail,
      criteriaOnchange: criteriaOnChangeEmail,
      operatorValue: operatorEmail,
      operatorOnchange: operatorOnChangeEmail
    },
    {
      type: enumFilterType.DROPDOWN,
      criteriaValue: criteriaStatus,
      criteriaOnchange: criteriaOnChangeStatus,
      operatorValue: operatorStatus,
      operatorOnchange: operatorOnChangeStatus,
      dropdownValues: [
        { value: "", text: i18n.userStatus.all },
        { value: true, text: i18n.userStatus.active },
        { value: false, text: i18n.userStatus.inactive }
      ]
    }
  ];

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUsername(enumCompareOperators.TEXT_CONTAINS);
    operatorSetDni(enumCompareOperators.TEXT_CONTAINS);
    operatorSetName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetSecondName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetLastName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetSecondLastName(enumCompareOperators.TEXT_CONTAINS);
    operatorSetBirthDate(enumCompareOperators.DATE_EQUALS);
    operatorSetAge(enumCompareOperators.NUMBER_EQUALS);
    operatorSetSex(enumCompareOperators.TEXT_EQUALS);
    operatorSetEmail(enumCompareOperators.TEXT_CONTAINS);
    operatorSetStatus(enumCompareOperators.BOOLEAN_EQUALS);
  };

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetUsername("");
    criteriaSetDni("");
    criteriaSetName("");
    criteriaSetSecondName("");
    criteriaSetLastName("");
    criteriaSetSecondLastName("");
    criteriaSetBirthDate("");
    criteriaSetAge("");
    criteriaSetSex(""); // Empty means all
    criteriaSetEmail("");
    criteriaSetStatus(""); // Empty means all
    setOperatorsDefaultValues("");
  };

  const getFilterBody = () => {
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
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
      birthDateCriteria: criteriaBirthDate,
      birthDateOperator: operatorBirthDate,
      ageCriteria: criteriaAge,
      ageOperator: operatorAge,
      sexCriteria: criteriaSex,
      sexOperator: operatorSex,
      occupationCriteria: "",
      occupationOperator: enumFilterType.NONE,
      telephoneCriteria: "",
      telephoneOperator: enumFilterType.NONE,
      addressCriteria: "",
      addressOperator: enumFilterType.NONE,
      emailCriteria: criteriaEmail,
      emailOperator: operatorEmail,
      activeCriteria: criteriaStatus,
      activeOperator: operatorStatus,
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
