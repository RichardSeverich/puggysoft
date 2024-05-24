const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  talonarioFinal: classNameRed,
  precio: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.talonarioFinal.length > 0 && data.talonarioFinal.length <= 11)) {
    isValid = false;
    classNameFormTextNew.talonarioFinal = classNameRed;
  } else if (!/^[0-9]+$/.test(data.talonarioFinal)) {
    isValid = false;
    classNameFormTextNew.talonarioFinal = classNameRed;
  } else {
    classNameFormTextNew.talonarioFinal = "";
  }
  if (!(data.precio.length > 0 && data.precio.length <= 11)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else if (!(/^[0-9]+$/.test(data.precio) && /^-?\d*\.?\d+$/.test(data.precio) && data.precio >= 0)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else {
    classNameFormTextNew.precio = "";
  }
  if (!(/^[0-9]+$/.test(data.folderCantidadTimbres) && /^-?\d*\.?\d+$/.test(data.folderCantidadTimbres) && data.folderCantidadTimbres >= 0)) {
    isValid = false;
    classNameFormTextNew.folderCantidadTimbres = classNameRed;
  } else {
    classNameFormTextNew.folderCantidadTimbres = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
