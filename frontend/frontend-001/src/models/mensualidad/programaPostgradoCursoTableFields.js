import enumTableFieldType from "./../enumTableFieldType";
import appUrlConfig from "./../../tools/appUrlConfig";

const fileName = "product-groups-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const arrayDataFields = [
  {
    value: "image",
    type: enumTableFieldType.IMAGE,
    imageMaxWidth: "50%",
    tdWidth: "5%",
    defaultImageUrl: imageUrl
  },
  "id",
  "name",
  "aux",
  "gestion",
  "createdBy",
  "updatedBy",
  "creationDate",
  "updateDate"
];

export default arrayDataFields;
