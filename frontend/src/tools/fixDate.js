function fixDate (date) {
  if (date !== null) {
    const newDate = date.slice(0, 10);
    return newDate;
  }
  return date;
}

export default fixDate;
