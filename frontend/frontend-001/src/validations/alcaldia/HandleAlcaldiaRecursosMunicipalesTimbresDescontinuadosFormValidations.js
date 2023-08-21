const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  codigo: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.codigo.length > 0 && data.codigo.length <= 11)) {
    isValid = false;
    classNameFormTextNew.codigo = classNameRed;
  } else if (!/^[0-9]+$/.test(data.codigo)) {
    isValid = false;
    classNameFormTextNew.codigo = classNameRed;
  } else {
    classNameFormTextNew.codigo = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
