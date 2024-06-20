import regexVars from "../../tools/regexVars";

const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  codigo: classNameRed,
  codigoAuxiliar: classNameRed,
  name: classNameRed,
  precio: classNameRed,
  tenant: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.codigo.length >= 3 && data.codigo.length <= 30)) {
    isValid = false;
    classNameFormTextNew.codigo = classNameRed;
  } else {
    classNameFormTextNew.codigo = "";
  }
  if (!(data.codigoAuxiliar.length >= 3 && data.codigoAuxiliar.length <= 30)) {
    isValid = false;
    classNameFormTextNew.codigoAuxiliar = classNameRed;
  } else {
    classNameFormTextNew.codigoAuxiliar = "";
  }
  if (!(data.name.length >= 3 && data.name.length <= 120)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else if (data.name.toUpperCase().includes("TIMBRES") || data.name.toUpperCase().includes("FOLDERS")) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  }
  if (!(data.precio.length > 0 && data.precio.length <= 11)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else if (!regexVars.REGEX_INT_NUMBER.test(data.precio)
    && regexVars.REGEX_DECIMAL_NUMBER.test(data.clienteDinero)) {
    isValid = false;
    classNameFormTextNew.precio = classNameRed;
  } else {
    classNameFormTextNew.precio = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
