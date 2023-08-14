const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  name: classNameRed,
  precio: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.name.length >= 3 && data.name.length <= 120)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  }
  if (!(data.precio.length > 0 && data.precio.length <= 11)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else if (!/^[0-9]+$/.test(data.precio)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else {
    classNameFormTextNew.precio = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
