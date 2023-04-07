const classNameRed = "puggysoft-red-text";
const classNameFormTextNew = {
  username: classNameRed,
  password: classNameRed,
  passwordRepead: classNameRed,
  dni: classNameRed,
  name: classNameRed,
  secondName: classNameRed,
  lastName: classNameRed,
  secondLastName: classNameRed,
  age: classNameRed,
  sex: classNameRed,
  occupation: classNameRed,
  birthDate: classNameRed,
  telephone: classNameRed,
  address: classNameRed,
  email: classNameRed,
  active: classNameRed
};

const handleValidation = (data, setClassNameFormText) => {
  let isValid = true;
  if (!(data.username.length >= 3 && data.username.length <= 30)) {
    isValid = false;
    classNameFormTextNew.username = classNameRed;
  } else {
    classNameFormTextNew.username = "";
  } if (!(data.password.length >= 3 && data.password.length <= 30)) {
    isValid = false;
    classNameFormTextNew.password = classNameRed;
  } else {
    classNameFormTextNew.password = "";
  } if (data.passwordRepead && !(data.passwordRepead.length >= 3 && data.passwordRepead.length <= 30)) {
    isValid = false;
    classNameFormTextNew.passwordRepead = classNameRed;
  } else {
    classNameFormTextNew.passwordRepead = "";
  } if (!(data.dni.length >= 3 && data.dni.length <= 10)) {
    isValid = false;
    classNameFormTextNew.dni = classNameRed;
  } else if (!/^[0-9]+$/.test(data.dni)) {
    isValid = false;
    classNameFormTextNew.dni = classNameRed;
  } else {
    classNameFormTextNew.dni = "";
  } if (!(data.name.length >= 3 && data.name.length <= 30)) {
    isValid = false;
    classNameFormTextNew.name = classNameRed;
  } else {
    classNameFormTextNew.name = "";
  } if (!(data.secondName.length >= 3 && data.secondName.length <= 30)) {
    isValid = false;
    classNameFormTextNew.secondName = classNameRed;
  } else {
    classNameFormTextNew.secondName = "";
  } if (!(data.lastName.length >= 3 && data.lastName.length <= 30)) {
    isValid = false;
    classNameFormTextNew.lastName = classNameRed;
  } else {
    classNameFormTextNew.lastName = "";
  } if (!(data.secondLastName.length >= 3 && data.secondLastName.length <= 30)) {
    isValid = false;
    classNameFormTextNew.secondLastName = classNameRed;
  } else {
    classNameFormTextNew.secondLastName = "";
  } if (!(data.birthDate.length === 10)) {
    isValid = false;
    classNameFormTextNew.birthDate = classNameRed;
  } else {
    classNameFormTextNew.birthDate = "";
  } if (data.age === "" || data.age === 0 || data.age < 0) {
    isValid = false;
    classNameFormTextNew.age = classNameRed;
  } else {
    classNameFormTextNew.age = "";
  } if (!(data.sex !== "")) {
    isValid = false;
    classNameFormTextNew.sex = classNameRed;
  } else {
    classNameFormTextNew.sex = "";
  } if (!(data.occupation.length >= 3 && data.occupation.length <= 60)) {
    isValid = false;
    classNameFormTextNew.occupation = classNameRed;
  } else {
    classNameFormTextNew.occupation = "";
  } if (!(data.telephone.length >= 3 && data.telephone.length <= 30)) {
    isValid = false;
    classNameFormTextNew.telephone = classNameRed;
  } else if (!/^[0-9]+$/.test(data.telephone)) {
    isValid = false;
    classNameFormTextNew.telephone = classNameRed;
  } else {
    classNameFormTextNew.telephone = "";
  } if (!(data.address.length >= 3 && data.address.length <= 60)) {
    isValid = false;
    classNameFormTextNew.address = classNameRed;
  } else {
    classNameFormTextNew.address = "";
  } if (!(data.email.length >= 7 && data.email.length <= 60)) {
    isValid = false;
    classNameFormTextNew.email = classNameRed;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    isValid = false;
    classNameFormTextNew.email = classNameRed;
  } else {
    classNameFormTextNew.email = "";
  }
  setClassNameFormText({ ...classNameFormTextNew });
  return isValid;
};

export { handleValidation, classNameFormTextNew };
