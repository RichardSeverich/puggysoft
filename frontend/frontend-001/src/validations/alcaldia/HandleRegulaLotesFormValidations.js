const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  nombreCliente: classNameRed,
  ciCliente: classNameRed,
  codigoCatastral: classNameRed,
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
  if (!(data.ciCliente.length >= 3 && data.ciCliente.length <= 30) ||
  data.ciCliente.includes(" ")
  ) {
    isValid = false;
    classNameFormTextNew.ciCliente = classNameRed;
  } else {
    classNameFormTextNew.ciCliente = "";
  }
  if (!(data.codigoCatastral.length >= 3 && data.codigoCatastral.length <= 30) ||
  data.codigoCatastral.includes(" ")
  ) {
    isValid = false;
    classNameFormTextNew.codigoCatastral = classNameRed;
  } else {
    classNameFormTextNew.codigoCatastral = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
