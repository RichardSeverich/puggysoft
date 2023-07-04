const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  year: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!/^\d{4}$/.test(data.year)) {
    isValid = false;
    classNameFormTextNew.year = classNameRed;
  } else {
    classNameFormTextNew.year = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
