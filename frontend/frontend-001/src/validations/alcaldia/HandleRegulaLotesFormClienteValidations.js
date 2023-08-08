const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  id: classNameRed,
  ciCliente: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.idCriteria.length >= 3 && data.idCriteria.length <= 256)) {
    isValid = false;
    classNameFormTextNew.id = classNameRed;
  } else {
    classNameFormTextNew.id = "";
  }
  if (!(data.ciClienteCriteria.length >= 3 && data.ciClienteCriteria.length <= 30) ||
  data.ciClienteCriteria.includes(" ")
  ) {
    isValid = false;
    classNameFormTextNew.ciCliente = classNameRed;
  } else {
    classNameFormTextNew.ciCliente = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
