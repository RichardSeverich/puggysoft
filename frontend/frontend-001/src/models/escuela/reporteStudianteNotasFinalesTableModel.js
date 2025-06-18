import arrayFields from "./reporteStudianteNotasFinalesTableFields";
import arrayLabels from "./reporteStudianteNotasFinalesTableLabels";

const tableModel = function () {
  let arrayDataFields = arrayFields;
  let arrayColumnsLabels = arrayLabels;

  return {
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default tableModel;
