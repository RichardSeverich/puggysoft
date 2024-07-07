const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  cantidadFolders: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(Number(data.valueCantidadFolders) > 0)) {
    isValid = false;
    classNameFormTextNew.cantidadFolders = classNameRed;
  } else {
    classNameFormTextNew.cantidadFolders = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
