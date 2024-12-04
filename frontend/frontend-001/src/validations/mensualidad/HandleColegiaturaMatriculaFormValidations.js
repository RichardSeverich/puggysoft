const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  name: classNameRed,
  shortName: classNameRed,
  notaMaxima: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  // NAME VALIDATION
  if (!(data.name.length >= 3 && data.name.length <= 60)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  }
  // PRICE VALIDATION
  if (data.salePrice === "" || data.salePrice.length === 0 || data.salePrice < 0) {
    isValid = false;
    classNameFormTextNew.salePrice = classNameRed;
  } else {
    classNameFormTextNew.salePrice = "";
  }
  // DESCRIPTION VALIDATION
  if (!(data.description.length >= 3 && data.description.length <= 256)) {
    isValid = false;
    classNameFormTextNew.description = classNameRed;
  } else {
    classNameFormTextNew.description = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
