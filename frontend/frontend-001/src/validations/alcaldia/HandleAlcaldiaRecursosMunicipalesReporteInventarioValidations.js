const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  fecha: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.yearMonthDay)) {
    isValid = false;
    classNameFormTextNew.fecha = classNameRed;
  } else {
    classNameFormTextNew.fecha = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
