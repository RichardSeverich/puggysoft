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
  /* OCCUPATION */criteriaOccupation, criteriaOnChangeOccupation, criteriaSetOccupation, operatorOccupation, operatorOnChangeOccupation, operatorSetOccupation,
  /* TELEPHONE */criteriaTelephone, criteriaOnChangeTelephone, criteriaSetTelephone, operatorTelephone, operatorOnChangeTelephone, operatorSetTelephone,
  /* ADDRESS */criteriaAddress, criteriaOnChangeAddress, criteriaSetAddress, operatorAddress, operatorOnChangeAddress, operatorSetAddress,
  /* EMAIL */criteriaEmail, criteriaOnChangeEmail, criteriaSetEmail, operatorEmail, operatorOnChangeEmail, operatorSetEmail,
  /* STATUS */criteriaStatus, criteriaOnChangeStatus, criteriaSetStatus, operatorStatus, operatorOnChangeStatus, operatorSetStatus,
  /* EMAIL VERIFIED */criteriaEmailVerified, criteriaOnChangeEmailVerified, criteriaSetEmailVerified, operatorEmailVerified, operatorOnChangeEmailVerified, operatorSetEmailVerified,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
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
      type: enumFilterType.NONE
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
      criteriaValue: criteriaOccupation,
      criteriaOnchange: criteriaOnChangeOccupation,
      operatorValue: operatorOccupation,
      operatorOnchange: operatorOnChangeOccupation
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaTelephone,
      criteriaOnchange: criteriaOnChangeTelephone,
      operatorValue: operatorTelephone,
      operatorOnchange: operatorOnChangeTelephone
    },

    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaAddress,
      criteriaOnchange: criteriaOnChangeAddress,
      operatorValue: operatorAddress,
      operatorOnchange: operatorOnChangeAddress
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
    },
    {
      type: enumFilterType.DROPDOWN,
      criteriaValue: criteriaEmailVerified,
      criteriaOnchange: criteriaOnChangeEmailVerified,
      operatorValue: operatorEmailVerified,
      operatorOnchange: operatorOnChangeEmailVerified,
      dropdownValues: [
        { value: "", text: i18n.userEmailVerified.all },
        { value: true, text: i18n.userEmailVerified.verified },
        { value: false, text: i18n.userEmailVerified.noVerified }
      ]
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCreatedBy,
      criteriaOnchange: criteriaOnChangeCreatedBy,
      operatorValue: operatorCreatedBy,
      operatorOnchange: operatorOnChangeCreatedBy
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUpdatedBy,
      criteriaOnchange: criteriaOnChangeUpdatedBy,
      operatorValue: operatorUpdatedBy,
      operatorOnchange: operatorOnChangeUpdatedBy
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaCreatedDate,
      criteriaOnchange: criteriaOnChangeCreatedDate,
      operatorValue: operatorCreatedDate,
      operatorOnchange: operatorOnChangeCreatedDate
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaUpdatedDate,
      criteriaOnchange: criteriaOnChangeUpdatedDate,
      operatorValue: operatorUpdatedDate,
      operatorOnchange: operatorOnChangeUpdatedDate
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
    operatorSetOccupation(enumCompareOperators.DATE_EQUALS);
    operatorSetTelephone(enumCompareOperators.TEXT_CONTAINS);
    operatorSetAddress(enumCompareOperators.TEXT_CONTAINS);
    operatorSetEmail(enumCompareOperators.TEXT_CONTAINS);
    operatorSetStatus(enumCompareOperators.BOOLEAN_EQUALS);
    operatorSetEmailVerified(enumCompareOperators.BOOLEAN_EQUALS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
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
    criteriaSetOccupation("");
    criteriaSetTelephone("");
    criteriaSetAddress("");
    criteriaSetEmail("");
    criteriaSetStatus(""); // Empty means all
    criteriaSetEmailVerified("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
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
      occupationCriteria: criteriaOccupation,
      occupationOperator: operatorOccupation,
      telephoneCriteria: criteriaTelephone,
      telephoneOperator: operatorTelephone,
      addressCriteria: criteriaAddress,
      addressOperator: operatorAddress,
      emailCriteria: criteriaEmail,
      emailOperator: operatorEmail,
      activeCriteria: criteriaStatus,
      activeOperator: operatorStatus,
      emailVerifiedCriteria: criteriaEmailVerified,
      emailVerifiedOperator: operatorEmailVerified,
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
    setOperatorsDefaultValues
  };
};

export default getColumnsFilterModel;
