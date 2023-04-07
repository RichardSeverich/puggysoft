import enumTableFieldType from "./../enumTableFieldType";
import appUrlConfig from "./../../tools/appUrlConfig";

const fileName = "products-default.jpg";
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
  "code",
  "name",
  "purchasePrice",
  "salePrice",
  "stock",
  "minimumStock",
  "description",
  "location",
  "barCode",
  "createdBy",
  "updatedBy",
  "creationDate",
  "updateDate"
];

export default arrayDataFields;
