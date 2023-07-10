const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  nombreCliente: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.nombreCliente.length >= 3 && data.nombreCliente.length <= 256)) {
    isValid = false;
    classNameFormTextNew.nombreCliente = classNameRed;
  } else {
    classNameFormTextNew.nombreCliente = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
