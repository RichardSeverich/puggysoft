const classNameRed = "puggysoft-red-text";
const classNameFormTextNew = {
  name: classNameRed,
  purchasePrice: classNameRed,
  salePrice: classNameRed,
  stock: classNameRed,
  description: classNameRed,
  barCode: classNameRed,
  location: classNameRed,
  minimumStock: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.name.length >= 3 && data.name.length <= 60)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  } if (data.purchasePrice === "" || data.purchasePrice === 0 || data.purchasePrice < 0) {
    isValid = false;
    classNameFormTextNew.purchasePrice = classNameRed;
  } else {
    classNameFormTextNew.purchasePrice = "";
  } if (data.salePrice === "" || data.salePrice.length === 0 || data.salePrice < 0) {
    isValid = false;
    classNameFormTextNew.salePrice = classNameRed;
  } else {
    classNameFormTextNew.salePrice = "";
  } if (data.stock === "" || data.stock.length === 0 || data.stock < 0) {
    isValid = false;
    classNameFormTextNew.stock = classNameRed;
  } else {
    classNameFormTextNew.stock = "";
  } if (!(data.description.length >= 3 && data.description.length <= 256)) {
    isValid = false;
    classNameFormTextNew.description = classNameRed;
  } else {
    classNameFormTextNew.description = "";
  } if (!(data.location.length >= 3 && data.location.length <= 120)) {
    isValid = false;
    classNameFormTextNew.location = classNameRed;
  } else {
    classNameFormTextNew.location = "";
  } if (data.minimumStock === "" || data.minimumStock.length === 0 || data.minimumStock < 0) {
    isValid = false;
    classNameFormTextNew.minimumStock = classNameRed;
  } else {
    classNameFormTextNew.minimumStock = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
