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
  // SHORTNAME VALIDATION
  if (!(data.aux.length >= 3 &&
    data.aux.length <= 30) ||
    data.aux.includes(" ")
  ) {
    isValid = false;
    classNameFormTextNew.aux = classNameRed;
  } else {
    classNameFormTextNew.aux = "";
  }
  // GESTION VALIDATION
  if (!(data.gestion.length >= 3 && data.gestion.length <= 10)) {
    isValid = false;
    classNameFormTextNew.gestion = classNameRed;
  } else {
    classNameFormTextNew.gestion = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
