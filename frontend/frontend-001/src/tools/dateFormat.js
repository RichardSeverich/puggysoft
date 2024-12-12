import i18n from "../i18n/i18n";

/**
 * @param dateString in format 2023-04-27T13:23:51Z.
 * @returns date in format. 18 April 2023 5:30pm.
 */
const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const time = date.toLocaleString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }
  );
  return `${day} ${i18n.commonMonths[month]} ${year} ${time}`;
};

function optionFormDate(date, typeDate) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  if (typeDate === "day") {
    return `${year}-${month}-${day}`
  } else if (typeDate === "month") {
    return `${year}-${month}`
  } else if (typeDate === "year") {
    return `${year}`
  }
}

export default { getFormattedDate, optionFormDate };
