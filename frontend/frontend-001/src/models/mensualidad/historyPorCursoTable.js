import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayFields from "./historyPorCursoTableFields";
import arrayLabels from "./historyPorCursoTableLabels";

const tableModel = function (tableColumnsToShow) {
  let arrayDataFields;
  let arrayColumnsLabels;

  arrayDataFields = arrayFields;
  arrayColumnsLabels = arrayLabels;

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  if (isMedium) {
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  }

  return {
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default tableModel;
