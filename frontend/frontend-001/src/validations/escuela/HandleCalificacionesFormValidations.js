const classNameRed = "puggysoft-red-text";

const classNameFormTextNew = {
  calificacion: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  // !isNaN(valor) => Es un numero
  if (!(!isNaN(data.notaValor) && Number(data.notaValor) > -1)) {
    isValid = false;
    classNameFormTextNew.calificacion = classNameRed;
  } else {
    classNameFormTextNew.calificacion = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
