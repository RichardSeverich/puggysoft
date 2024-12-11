import {
  detailTemplate,
} from "../../models/sales/reportDetail";
import i18n from "../../i18n/i18n";
import dateFormat from "../dateFormat"

function completeData(data, type, date) {
  let dataResult = [];
  if (type === "day") {
    dataResult = completeRow(data, 24, convertHour, findElement)
  } else if (type === "month") {
    dataResult = completeRow(data, getDaysInMonth(date), convertDay, findDayInMonth)
  } else if (type === "year") {
    dataResult = completeRow(data, 12, convertMonth, findMonthInYear)
  }
  return dataResult;
}

function getDaysInMonth(date) {
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  nextMonth.setDate(nextMonth.getDate() - 1);
  return nextMonth.getDate();
}

function completeRow(data, limit, formatId, findInData) {
  const dataResult = [];
  for (let i = 0; i < limit; i++) {
    const verifiData = data.find((value) => findInData(value, i))
    if (verifiData) {
      dataResult.push({...verifiData, identifier: formatId(i)});
    } else {
      dataResult.push({...detailTemplate, identifier: formatId(i)});
    }
  }
  return dataResult;
}

function findElement(value, i) {
  return value.identifier === `${i}`;
}

function findMonthInYear(value, i) {
  return value.identifier === `${i + 1}`;
}

function findDayInMonth(value, i) {
  const forDate = value.identifier.split("-")
  const date = new Date(Date.UTC(forDate[0], Number(forDate[1]) - 1, i + 1, 12, 0, 0))
  return value.identifier === `${dateFormat.optionFormDate(date, "day")}`;
}

function convertMonth(identifier) {
  const month = (new Date(2000, identifier)).toLocaleString("en-GB", { month: "long" }).toLowerCase()
  return `${i18n.commonMonths[month]}`
}

function convertDay(identifier) {
  return `${i18n.reportDetailPdf.day} ${identifier + 1}`
}

function convertHour(identifier) {
  return identifier.toString().padStart(2, '0') + ":00";
}

export default completeData;