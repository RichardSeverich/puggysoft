import enumSaleStatus from "./../../models/sales/enumSaleStatus";
import i18n from "../../i18n/i18n";

function fixArrayData (arrayData) {
  return arrayData.map((rowObject) => {
    const currentValue = rowObject.status;
    if (currentValue === enumSaleStatus.TODO) {
      rowObject.status = i18n.saleStatus.todo;
    } else if (currentValue === enumSaleStatus.IN_PROGRESS) {
      rowObject.status = i18n.saleStatus.inProgress;
    } else {
      rowObject.status = i18n.saleStatus.done;
    }
    return rowObject;
  });
}

export default fixArrayData;
