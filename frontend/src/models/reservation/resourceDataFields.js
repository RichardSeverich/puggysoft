import enumTableFieldType from "./../enumTableFieldType";

import appUrlConfig from "./../../tools/appUrlConfig";

const fileName = "resources-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const arrayDataFields = [
  {
    value: "image",
    type: enumTableFieldType.IMAGE,
    imageMaxWidth: "100%",
    tdWidth: "10%",
    defaultImageUrl: imageUrl
  },
  "name",
  "priceInterval",
  "description",
  "createdBy",
  "updatedBy",
  "creationDate",
  "updateDate"
];

export default arrayDataFields;
