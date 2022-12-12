function fixArrayData (arrayData) {
  return arrayData.map((rowObject) => {
    if (rowObject.creationDate !== null && rowObject.creationDate !== "") {
      const creationDate = rowObject.creationDate.slice(0, 10);
      rowObject.creationDate = creationDate;
    }
    if (rowObject.updateDate !== null && rowObject.updateDate !== "") {
      const updateDate = rowObject.updateDate.slice(0, 10);
      rowObject.updateDate = updateDate;
    }
    return rowObject;
  });
}

export default fixArrayData;
