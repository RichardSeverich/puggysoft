const classNameRed = "puggysoft-red-text";
const classNameFormTextNew = {
  name: classNameRed,
  priceInterval: classNameRed,
  description: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.name.length >= 3 && data.name.length <= 60)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  } if (data.priceInterval === "" || data.priceInterval < 0) {
    isValid = false;
    classNameFormTextNew.priceInterval = classNameRed;
  } else {
    classNameFormTextNew.priceInterval = "";
  } if (!(data.description.length >= 3 && data.description.length <= 256)) {
    isValid = false;
    classNameFormTextNew.description = classNameRed;
  } else {
    classNameFormTextNew.description = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
