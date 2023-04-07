const classNameRed = "puggysoft-red-text";
const classNameFormTextNew = {
  name: classNameRed,
  startTime: classNameRed,
  endTime: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.name.length >= 3 && data.name.length <= 60)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  } if (data.startTime === "") {
    isValid = false;
    classNameFormTextNew.startTime = classNameRed;
  } else {
    classNameFormTextNew.startTime = "";
  } if (data.endTime === "") {
    isValid = false;
    classNameFormTextNew.endTime = classNameRed;
  } else {
    classNameFormTextNew.endTime = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
