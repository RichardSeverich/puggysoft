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
  "code",
  "name",
  "purchasePrice",
  "salePrice",
  "stock",
  "minimumStock"
];

export default arrayDataFields;
