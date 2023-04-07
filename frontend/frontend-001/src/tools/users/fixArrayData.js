import enumSex from "./../../models/users/enumSex";
import i18n from "../../i18n/i18n";

function fixArrayData (arrayData) {
  return arrayData.map((rowObject) => {
    const valueSex = rowObject.sex;
    rowObject.sex = valueSex === enumSex.MALE
      ? i18n.userSexText.male
      : i18n.userSexText.female;
    const valueActive = rowObject.active;
    rowObject.active = valueActive
      ? i18n.userStatus.active
      : i18n.userStatus.inactive;
    const emailVerified = rowObject.emailVerified;
    rowObject.emailVerified = emailVerified
      ? i18n.userEmailVerified.verified
      : i18n.userEmailVerified.noVerified;
    return rowObject;
  });
}

export default fixArrayData;
