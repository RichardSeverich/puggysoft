import i18n from "./../i18n/i18n";

function getMonth (monthNumber) {
  switch (monthNumber) {
  case 1:
    return i18n.commonMonths.january;
  case 2:
    return i18n.commonMonths.february;
  case 3:
    return i18n.commonMonths.march;
  case 4:
    return i18n.commonMonths.april;
  case 5:
    return i18n.commonMonths.may;
  case 6:
    return i18n.commonMonths.june;
  case 7:
    return i18n.commonMonths.july;
  case 8:
    return i18n.commonMonths.august;
  case 9:
    return i18n.commonMonths.september;
  case 10:
    return i18n.commonMonths.october;
  case 11:
    return i18n.commonMonths.november;
  case 12:
    return i18n.commonMonths.december;
  default:
    return i18n.commonMonths.january;
  }
}

export default getMonth;
