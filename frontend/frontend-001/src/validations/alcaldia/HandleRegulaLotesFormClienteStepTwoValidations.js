const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  numeroInmueble: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.numeroInmueble.length >= 3 && data.numeroInmueble.length <= 30) ||
  data.numeroInmueble.includes(" ")
  ) {
    isValid = false;
    classNameFormTextNew.numeroInmueble = classNameRed;
  } else {
    classNameFormTextNew.numeroInmueble = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
