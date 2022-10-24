import enumUserFields from "./enumUserFields";
import enumTableFieldType from './../enumTableFieldType'

const arrayDataFields = [
  {
    value: enumUserFields.IMAGE,
    type: enumTableFieldType.IMAGE
  },
  enumUserFields.ID,
  enumUserFields.USERNAME,
  enumUserFields.PASSWORD,
  enumUserFields.DNI,
  enumUserFields.NAME,
  enumUserFields.SECOND_NAME,
  enumUserFields.LAST_NAME,
  enumUserFields.SECOND_LASTNAME,
  enumUserFields.BIRTHDATE,
  enumUserFields.AGE,
  enumUserFields.SEX,
  enumUserFields.OCCUPATION,
  enumUserFields.TELEPHONE,
  enumUserFields.ADDRESS,
  enumUserFields.EMAIL,
  enumUserFields.ACTIVE,
  enumUserFields.CREATED_BY,
  enumUserFields.UPDATED_BY,
  enumUserFields.CREATION_DATE,
  enumUserFields.UPDATE_DATE
];

export default arrayDataFields;
