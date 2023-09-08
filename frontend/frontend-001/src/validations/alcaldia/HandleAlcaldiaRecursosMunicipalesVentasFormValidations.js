const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  clienteNombre: classNameRed,
  clienteCiNit: classNameRed,
  direccion: classNameRed,
  ventaStatus: classNameRed,
  ventaPrecioTotal: classNameRed,
  clienteDinero: classNameRed,
  clienteCambio: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.clienteNombre.length >= 3 && data.clienteNombre.length <= 120)) {
    isValid = false;
    classNameFormTextNew.clienteNombre = classNameRed;
  } else {
    classNameFormTextNew.clienteNombre = "";
  }
  if (!(data.clienteCiNit.length >= 7 && data.clienteCiNit.length <= 11)) {
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
  } else if (!/^\d+(\.\d{1,2})?$/.test(data.clienteDinero)) {
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
