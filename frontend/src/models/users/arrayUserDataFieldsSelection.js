import enumUserFields from "./enumUserFields";
import enumTableFieldType from "./../enumTableFieldType";
import appUrlConfig from "./../../tools/appUrlConfig";

const fileName = "user-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const arrayDataFields = [
  {
    value: enumUserFields.IMAGE,
    type: enumTableFieldType.IMAGE,
    imageMaxWidth: "50%",
    tdWidth: "5%",
    defaultImageUrl: imageUrl
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
