const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  cantidadTimbres: classNameRed,
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(Number(data.valueCantidadTimbres) > 0)) {
    isValid = false;
    classNameFormTextNew.cantidadTimbres = classNameRed;
  } else {
    classNameFormTextNew.cantidadTimbres = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
