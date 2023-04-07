import enumTableFieldType from "./../enumTableFieldType";

import appUrlConfig from "./../../tools/appUrlConfig";

const fileName = "products-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const arrayDataFields = [
  {
    value: "image",
    type: enumTableFieldType.IMAGE,
    imageMaxWidth: "100%",
    tdWidth: "7%",
    defaultImageUrl: imageUrl
  },
  "name",
  "salePrice",
  "stock"
];

export default arrayDataFields;
