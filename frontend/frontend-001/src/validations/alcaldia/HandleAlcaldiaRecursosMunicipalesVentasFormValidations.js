import regexVars from "../../tools/regexVars";

const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  numeroComprobante: classNameRed,
  clienteNombre: classNameRed,
  clienteCiNit: classNameRed,
  direccion: classNameRed,
  glosa: classNameRed,
  ventaStatus: classNameRed,
  ventaPrecioTotal: classNameRed,
  clienteDinero: classNameRed,
  clienteCambio: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.numeroComprobante.length >= 5 && data.numeroComprobante.length <= 24)) {
    isValid = false;
    classNameFormTextNew.numeroComprobante = classNameRed;
  } else if (!/^\d+(\.\d{1,2})?$/.test(data.numeroComprobante)) {
    isValid = false;
    classNameFormTextNew.numeroComprobante = classNameRed;
  } else {
    classNameFormTextNew.numeroComprobante = "";
  }
  if (!(data.clienteNombre.length >= 3 && data.clienteNombre.length <= 120)) {
    isValid = false;
    classNameFormTextNew.clienteNombre = classNameRed;
  } else {
    classNameFormTextNew.clienteNombre = "";
  }
  if (!(data.clienteCiNit.length >= 5 && data.clienteCiNit.length <= 11)) {
    isValid = false;
    classNameFormTextNew.clienteCiNit = classNameRed;
  } else if (!/^\d+(\.\d{1,2})?$/.test(data.clienteCiNit)) {
    isValid = false;
    classNameFormTextNew.clienteCiNit = classNameRed;
  } else {
    classNameFormTextNew.clienteCiNit = "";
  }
  if (!(data.direccion.length >= 3 && data.direccion.length <= 120)) {
    isValid = false;
    classNameFormTextNew.direccion = classNameRed;
  } else {
    classNameFormTextNew.direccion = "";
  }
  if (!(data.glosa.length <= 150)) {
    isValid = false;
    classNameFormTextNew.glosa = classNameRed;
  } else {
    classNameFormTextNew.glosa = "";
  }
  if (!(data.ventaStatus.length >= 5 && data.ventaStatus.length <= 10)) {
    isValid = false;
    classNameFormTextNew.ventaStatus = classNameRed;
  } else {
    classNameFormTextNew.ventaStatus = "";
  }
  // if (!(data.ventaPrecioTotal.length >= 1 && data.ventaPrecioTotal.length <= 11)) {
  //   isValid = false;
  //   classNameFormTextNew.ventaPrecioTotal = classNameRed;
  // } else if (!/^\d+(\.\d{1,2})?$/.test(data.ventaPrecioTotal)) {
  //   isValid = false;
  //   classNameFormTextNew.ventaPrecioTotal = classNameRed;
  // } else {
  //   classNameFormTextNew.ventaPrecioTotal = "";
  // }
  if (!(data.clienteDinero.length >= 1 && data.clienteDinero.length <= 11)) {
    isValid = false;
    classNameFormTextNew.clienteDinero = classNameRed;
  } else if (!(regexVars.REGEX_DECIMAL_NUMBER.test(data.clienteDinero) && data.clienteCambio >= 0)) {
    isValid = false;
    classNameFormTextNew.clienteDinero = classNameRed;
  } else {
    classNameFormTextNew.clienteDinero = "";
  }
  // if (!(data.clienteCambio.length > 0 && data.clienteCambio.length <= 11)) {
  //   isValid = false;
  //   classNameFormTextNew.clienteCambio = classNameRed;
  // } else if (!/^\d+(\.\d{1,2})?$/.test(data.clienteCambio)) {
  //   isValid = false;
  //   classNameFormTextNew.clienteCambio = classNameRed;
  // } else {
  //   classNameFormTextNew.clienteCambio = "";
  // }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
