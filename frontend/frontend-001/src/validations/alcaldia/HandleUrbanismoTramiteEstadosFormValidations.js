const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  nombreCliente: classNameRed,
  ciCliente: classNameRed,
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
  if (!(data.ciCliente.length >= 7 && data.ciCliente.length <= 11)) {
    isValid = false;
    classNameFormTextNew.ciCliente = classNameRed;
  } else {
    classNameFormTextNew.ciCliente = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
