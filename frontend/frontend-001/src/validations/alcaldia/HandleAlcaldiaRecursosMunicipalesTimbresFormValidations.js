const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  talonarioFinal: classNameRed,
  precio: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.talonarioFinal.length > 0 && data.talonarioFinal.length <= 11)) {
    isValid = false;
    classNameFormTextNew.talonarioFinal = classNameRed;
  } else if (!/^[0-9]+$/.test(data.talonarioFinal)) {
    isValid = false;
    classNameFormTextNew.talonarioFinal = classNameRed;
  } else {
    classNameFormTextNew.talonarioFinal = "";
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
