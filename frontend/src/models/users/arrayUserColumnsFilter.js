import enumFilterType from "../enumFilterType";
import enumCompareOperators from "./../enumCompareOperators";

const getColumnsFilterModel = function (
    /*ID*/ textboxId, textboxOnChangeId, textboxResetId, operatorId, operatorOnChangeId, setId,
    /*USERNAME*/ textboxUsername, textboxOnChangeUsername, textboxResetUsername, operatorUsername, operatorOnChangeUsername, setUsername,
    /*DNI*/ textboxDni, textboxOnChangeDni, textboxResetDni, operatorDni, operatorOnChangeDni, setDni,
    /*NAME*/ textboxName, textboxOnChangeName, textboxResetName, operatorName, operatorOnChangeName, setName,
    /*SECOND NAME*/textboxSecondName, textboxOnChangeSecondName, textboxResetSecondName, operatorSecondName, operatorOnChangeSecondName, setSecondName,
    /*LAST NAME*/ textboxLastName, textboxOnChangeLastName, textboxResetLastName, operatorLastName, operatorOnChangeLastName, setLastName,
    /*SECOND LAST NAME*/textboxSecondLastName, textboxOnChangeSecondLastName, textboxResetSecondLastName, operatorSecondLastName, operatorOnChangeSecondLastName, setSecondLastName,
    /*BIRTHDATE*/textboxBirthDate, textboxOnChangeBirthDate, textboxResetBirthDate, operatorBirthDate, operatorOnChangeBirthDate, setBirthDate,
    /*TELEPHONE*/textboxTelephone, textboxOnChangeTelephone, textboxResetTelephone, operatorTelephone, operatorOnChangeTelephone, setTelephone,
    /*ADDRESS*/textboxAddress, textboxOnChangeAddress, textboxResetAddress, operatorAddress, operatorOnChangeAddress, setAddress,
    /*EMAIL*/textboxEmail, textboxOnChangeEmail, textboxResetEmail, operatorEmail, operatorOnChangeEmail, setEmail,
    /*CREATED BY*/textboxCreatedBy, textboxOnChangeCreatedBy, textboxResetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, setCreatedBy,
    /*UPDATED BY*/textboxUpdatedBy, textboxOnChangeUpdatedBy, textboxResetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, setUpdatedBy,
    /*CREATED DATE*/textboxCreatedDate, textboxOnChangeCreatedDate, setValueCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, setCreatedDate,
    /*UPDATED DATE*/textboxUpdatedDate, textboxOnChangeUpdatedDate, setValueUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, setUpdatedDate
) {

  const arrayColumnsFilter = [
    {
      type: enumFilterType.NONE,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxId,
      textboxOnchange: textboxOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxUsername,
      textboxOnchange: textboxOnChangeUsername,
      operatorValue: operatorUsername,
      operatorOnchange: operatorOnChangeUsername,
    },
    {
      type: enumFilterType.NONE
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxDni,
      textboxOnchange: textboxOnChangeDni,
      operatorValue: operatorDni,
      operatorOnchange: operatorOnChangeDni,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxName,
      textboxOnchange: textboxOnChangeName,
      operatorValue: operatorName,
      operatorOnchange: operatorOnChangeName,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxSecondName,
      textboxOnchange: textboxOnChangeSecondName,
      operatorValue: operatorSecondName,
      operatorOnchange: operatorOnChangeSecondName,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxLastName,
      textboxOnchange: textboxOnChangeLastName,
      operatorValue: operatorLastName,
      operatorOnchange: operatorOnChangeLastName,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxSecondLastName,
      textboxOnchange: textboxOnChangeSecondLastName,
      operatorValue: operatorSecondLastName,
      operatorOnchange: operatorOnChangeSecondLastName,
    },
    {
      type: enumFilterType.DATE,
      textboxValue: textboxBirthDate,
      textboxOnchange: textboxOnChangeBirthDate,
      operatorValue: operatorBirthDate,
      operatorOnchange: operatorOnChangeBirthDate,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxTelephone,
      textboxOnchange: textboxOnChangeTelephone,
      operatorValue: operatorTelephone,
      operatorOnchange: operatorOnChangeTelephone,
    },

    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxAddress,
      textboxOnchange: textboxOnChangeAddress,
      operatorValue: operatorAddress,
      operatorOnchange: operatorOnChangeAddress,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxEmail,
      textboxOnchange: textboxOnChangeEmail,
      operatorValue: operatorEmail,
      operatorOnchange: operatorOnChangeEmail,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxCreatedBy,
      textboxOnchange: textboxOnChangeCreatedBy,
      operatorValue: operatorCreatedBy,
      operatorOnchange: operatorOnChangeCreatedBy,
    },
    {
      type: enumFilterType.TEXTBOX,
      textboxValue: textboxUpdatedBy,
      textboxOnchange: textboxOnChangeUpdatedBy,
      operatorValue: operatorUpdatedBy,
      operatorOnchange: operatorOnChangeUpdatedBy,
    },
    {
      type: enumFilterType.DATE,
      textboxValue: textboxCreatedDate,
      textboxOnchange: textboxOnChangeCreatedDate,
      operatorValue: operatorCreatedDate,
      operatorOnchange: operatorOnChangeCreatedDate,
    },
    {
      type: enumFilterType.DATE,
      textboxValue: textboxUpdatedDate,
      textboxOnchange: textboxOnChangeUpdatedDate,
      operatorValue: operatorUpdatedDate,
      operatorOnchange: operatorOnChangeUpdatedDate,
    },
  ];

  const setOperatorsDefaultValues = function () {
    setId(enumCompareOperators.TEXT_CONTAINS);
    setUsername(enumCompareOperators.TEXT_CONTAINS);
    setDni(enumCompareOperators.TEXT_CONTAINS);
    setName(enumCompareOperators.TEXT_CONTAINS);
    setSecondName(enumCompareOperators.TEXT_CONTAINS);
    setLastName(enumCompareOperators.TEXT_CONTAINS);
    setSecondLastName(enumCompareOperators.TEXT_CONTAINS);
    setBirthDate(enumCompareOperators.DATE_EQUALS);
    setTelephone(enumCompareOperators.TEXT_CONTAINS);
    setAddress(enumCompareOperators.TEXT_CONTAINS);
    setEmail(enumCompareOperators.TEXT_CONTAINS);
    setCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    setUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    setCreatedDate(enumCompareOperators.DATE_EQUALS)
    setUpdatedDate(enumCompareOperators.DATE_EQUALS);
  }

  const clearFilters = function () {
    textboxResetId();
    textboxResetUsername();
    textboxResetDni();
    textboxResetName();
    textboxResetSecondName();
    textboxResetLastName();
    textboxResetSecondLastName();
    textboxResetBirthDate();
    textboxResetTelephone();
    textboxResetAddress();
    textboxResetEmail();
    textboxResetCreatedBy();
    textboxResetUpdatedBy();
    setValueCreatedDate("");
    setValueUpdatedDate("");
    setOperatorsDefaultValues();
  }

  return {
    arrayColumnsFilter,
    clearFilters
  }

}

export default getColumnsFilterModel;