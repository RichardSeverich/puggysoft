const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  clienteNombre: classNameRed,
  clienteCiNit: classNameRed,
  direccion: classNameRed,
  cantidad: classNameRed,
  clienteDinero: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data[0].clienteNombre.length >= 3 && data[0].clienteNombre.length <= 120)) {
    isValid = false;
    classNameFormTextNew.clienteNombre = classNameRed;
  } else {
    classNameFormTextNew.clienteNombre = "";
  }
  if (!(data[0].clienteCiNit.length >= 7 && data[0].clienteCiNit.length <= 11)) {
    isValid = false;
    classNameFormTextNew.clienteCiNit = classNameRed;
  } else if (!/^\d+(\.\d{1,2})?$/.test(data[0].clienteCiNit)) {
    isValid = false;
    classNameFormTextNew.clienteCiNit = classNameRed;
  } else {
    classNameFormTextNew.clienteCiNit = "";
  }
  if (!(data[0].direccion.length >= 3 && data[0].direccion.length <= 120)) {
    isValid = false;
    classNameFormTextNew.direccion = classNameRed;
  } else {
    classNameFormTextNew.direccion = "";
  }
  if (!(data[1].cantidad.length >= 1 && data[1].cantidad.length <= 11)) {
    isValid = false;
    classNameFormTextNew.cantidad = classNameRed;
  } else if (data[2]?.talonarioMovimiento > data[2].talonarioFinal) {
    isValid = false;
    classNameFormTextNew.cantidad = classNameRed;
  } else {
    classNameFormTextNew.cantidad = "";
  }
  if (!(data[0].clienteDinero.length >= 1 && data[0].clienteDinero.length <= 11)) {
    isValid = false;
    classNameFormTextNew.clienteDinero = classNameRed;
  } else if (data[0].clienteCambio < 0) {
    isValid = false;
    classNameFormTextNew.clienteDinero = classNameRed;
  } else {
    classNameFormTextNew.clienteDinero = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
