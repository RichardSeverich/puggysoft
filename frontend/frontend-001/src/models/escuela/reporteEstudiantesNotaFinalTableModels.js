import arrayFields from "./reporteEstudiantesNotaFinalTableFields";
import arrayLabels from "./reporteEstudiantesNotaFinalTableLabels";

const tableModel = function () {
  let arrayDataFields = arrayFields;
  let arrayColumnsLabels = arrayLabels;

  return {
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default tableModel;
