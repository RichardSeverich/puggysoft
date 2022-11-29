import enumUserFields from "./enumUserFields";
import enumTableFieldType from "./../enumTableFieldType";

const arrayDataFields = [
  {
    value: enumUserFields.IMAGE,
    type: enumTableFieldType.IMAGE,
    maxWidth: "40%"
  },
  enumUserFields.ID,
  enumUserFields.USERNAME,
  enumUserFields.DNI,
  enumUserFields.NAME,
  enumUserFields.SECOND_NAME,
  enumUserFields.LAST_NAME,
  enumUserFields.SECOND_LASTNAME,
  enumUserFields.BIRTHDATE,
  enumUserFields.AGE,
  enumUserFields.SEX,
  enumUserFields.EMAIL,
  enumUserFields.ACTIVE
];

export default arrayDataFields;
