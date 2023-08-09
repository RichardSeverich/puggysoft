const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  nombreCliente: classNameRed,
  ciCliente: classNameRed,
  monto: classNameRed,
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
    data.ciCliente.includes(" ") ||
    !/^\d*$/.test(data.ciCliente)
  ) {
    isValid = false;
    classNameFormTextNew.ciCliente = classNameRed;
  } else {
    classNameFormTextNew.ciCliente = "";
  }
  if (!(data.monto.length >= 1 && data.monto.length <= 30) ||
    data.monto.includes(" ") ||
    !/^\d*$/.test(data.monto)
  ) {
    isValid = false;
    classNameFormTextNew.monto = classNameRed;
  } else {
    classNameFormTextNew.monto = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
