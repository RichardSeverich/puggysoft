import enumUserFields from "./enumUserFields";
import enumTableFieldType from "./../enumTableFieldType";
import appUrlConfig from "./../../tools/appUrlConfig";

const fileName = "user-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const arrayDataFields = [
  {
    value: enumUserFields.IMAGE,
    type: enumTableFieldType.IMAGE,
    defaultImageUrl: imageUrl
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
  enumUserFields.EMAIL_VERIFIED,
  enumUserFields.CREATED_BY,
  enumUserFields.UPDATED_BY,
  enumUserFields.CREATION_DATE,
  enumUserFields.UPDATE_DATE
];

export default arrayDataFields;
