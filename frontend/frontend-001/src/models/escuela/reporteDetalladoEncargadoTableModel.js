import arrayFields from "./reporteDetalladoEncargadoTableFields";
import arrayLabels from "./reporteDetalladoEncargadoTableLabels";

const tableModel = function (materias) {

  const labelsMaterias = materias.map((materia) => {
    const palabra = materia.shortName;
    return palabra.length >= 5 ? palabra.slice(0, 5) : palabra;
  })

  const fieldsMaterias = materias.map((materia) => {
    return materia.shortName;
  })

  let arrayDataFields = [...arrayFields, ...fieldsMaterias];
  let arrayColumnsLabels = [...arrayLabels, ...labelsMaterias];

  return {
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default tableModel;
