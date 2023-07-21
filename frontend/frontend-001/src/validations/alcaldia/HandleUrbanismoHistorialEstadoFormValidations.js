const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  username: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.username.length >= 3 && data.username.length <= 256)) {
    isValid = false;
    classNameFormTextNew.username = classNameRed;
  } else {
    classNameFormTextNew.username = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
