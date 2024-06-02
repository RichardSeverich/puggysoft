import regexVars from "../../tools/regexVars";

const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  talonarioInicio: classNameRed,
  talonarioFinal: classNameRed,
  precio: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.talonarioInicio.length >= 0 && data.talonarioInicio.length <= 11)) {
    isValid = false;
    classNameFormTextNew.talonarioInicio = classNameRed;
  } else if (!(regexVars.REGEX_INT_NUMBER.test(data.talonarioInicio) && /^-?\d*\.?\d+$/.test(data.talonarioInicio)
    && data.talonarioInicio >= 0 && Number(data.talonarioFinal) > data.talonarioInicio)) {
    isValid = false;
    classNameFormTextNew.talonarioInicio = classNameRed;
  } else {
    classNameFormTextNew.talonarioInicio = "";
  }
  if (!(data.talonarioFinal.length >= 0 && data.talonarioFinal.length <= 11)) {
    isValid = false;
    classNameFormTextNew.talonarioFinal = classNameRed;
  } else if (!(regexVars.REGEX_INT_NUMBER.test(data.talonarioFinal) && /^-?\d*\.?\d+$/.test(data.talonarioFinal)
    && data.talonarioFinal >= 0 && Number(data.talonarioFinal) > data.talonarioInicio)) {
    isValid = false;
    classNameFormTextNew.talonarioFinal = classNameRed;
  } else {
    classNameFormTextNew.talonarioFinal = "";
  }
  if (!(data.precio.length > 0 && data.precio.length <= 11 && Number(data.precio) >= 0)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else if (!(regexVars.REGEX_DECIMAL_NUMBER.test(data.precio))) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else {
    classNameFormTextNew.precio = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
