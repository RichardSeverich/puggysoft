import enumCompareOperators from "../enumCompareOperators";
import enumTableColumnsToShow from "../enumTableColumnsToShow";
import arrayFields from "./calificacionesTableFields";
import arrayLabels from "./calificacionesTableLabels";
import tableFilter from "./calificacionesTableFilter";

const tableModel = function (
  tableColumnsToShow,
  /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
  /* CURSO */criteriaCurso, criteriaOnChangeCurso, criteriaSetCurso, operatorCurso, operatorOnChangeCurso, operatorSetCurso,
  /* MATERIA */criteriaMateria, criteriaOnChangeMateria, criteriaSetMateria, operatorMateria, operatorOnChangeMateria, operatorSetMateria,
  /* ESTUDIANTE */criteriaEstudiante, criteriaOnChangeEstudiante, criteriaSetEstudiante, operatorEstudiante, operatorOnChangeEstudiante, operatorSetEstudiante,
  /* NOTA */criteriaNota, criteriaOnChangeNota, criteriaSetNota, operatorNota, operatorOnChangeNota, operatorSetNota,
  /* NOTA VALOR */criteriaNotaValor, criteriaOnChangeNotaValor, criteriaSetNotaValor, operatorNotaValor, operatorOnChangeNotaValor, operatorSetNotaValor,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
) {
  let arrayDataFields = arrayFields;
  let arrayColumnsLabels = arrayLabels;
  let arrayColumnsFilter = tableFilter(
    /* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
    /* CURSO */criteriaCurso, criteriaOnChangeCurso, operatorCurso, operatorOnChangeCurso,
    /* MATERIA */criteriaMateria, criteriaOnChangeMateria, operatorMateria, operatorOnChangeMateria,
    /* ESTUDIANTE */criteriaEstudiante, criteriaOnChangeEstudiante, operatorEstudiante, operatorOnChangeEstudiante,
    /* NOTA */criteriaNota, criteriaOnChangeNota, operatorNota, operatorOnChangeNota,
    /* NOTA VALOR */criteriaNotaValor, criteriaOnChangeNotaValor, operatorNotaValor, operatorOnChangeNotaValor,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate);

  const clearFilters = function () {
    criteriaSetId("");
    criteriaSetCurso("");
    criteriaSetMateria("");
    criteriaSetEstudiante("");
    criteriaSetNota("");
    criteriaSetNotaValor("");
    criteriaSetCreatedBy("");
    criteriaSetUpdatedBy("");
    criteriaSetCreatedDate("");
    criteriaSetUpdatedDate("");
    setOperatorsDefaultValues();
  };

  const setOperatorsDefaultValues = function () {
    operatorSetId(enumCompareOperators.NUMBER_EQUALS);
    operatorSetCurso(enumCompareOperators.TEXT_CONTAINS);
    operatorSetMateria(enumCompareOperators.TEXT_CONTAINS);
    operatorSetEstudiante(enumCompareOperators.TEXT_CONTAINS);
    operatorSetNota(enumCompareOperators.TEXT_CONTAINS);
    operatorSetNotaValor(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetUpdatedBy(enumCompareOperators.TEXT_CONTAINS);
    operatorSetCreatedDate(enumCompareOperators.DATE_EQUALS);
    operatorSetUpdatedDate(enumCompareOperators.DATE_EQUALS);
  };

  const isMedium = tableColumnsToShow === enumTableColumnsToShow.MEDIUM;
  if (isMedium) {
    arrayColumnsFilter = arrayColumnsFilter.slice(0, arrayColumnsFilter.length - 4);
    arrayColumnsLabels = arrayColumnsLabels.slice(0, arrayColumnsLabels.length - 4);
    arrayDataFields = arrayDataFields.slice(0, arrayDataFields.length - 4);
  }

  const getFilterBody = () => {
    const tenant = window.sessionStorage.getItem("tenant");
    const filterBody = {
      idCriteria: criteriaId,
      idOperator: operatorId,
      cursoCriteria: criteriaCurso,
      cursoOperator: operatorCurso,
      materiaCriteria: criteriaMateria,
      materiaOperator: operatorMateria,
      estudianteCriteria: criteriaEstudiante,
      estudianteOperator: operatorEstudiante,
      notaCriteria: criteriaNota,
      notaOperator: operatorNota,
      notaValorCriteria: criteriaNotaValor,
      notaValorOperator: operatorNotaValor,
      createdByCriteria: criteriaCreatedBy,
      createdByOperator: operatorCreatedBy,
      updatedByCriteria: criteriaUpdatedBy,
      updatedByOperator: operatorUpdatedBy,
      creationDateCriteria: criteriaCreatedDate,
      creationDateOperator: operatorCreatedDate,
      updateDateCriteria: criteriaUpdatedDate,
      updateDateOperator: operatorUpdatedDate,
      tenantCriteria: tenant,
      tenantOperator: enumCompareOperators.TEXT_EQUALS
    };
    return filterBody;
  };

  return {
    arrayColumnsFilter,
    clearFilters,
    getFilterBody,
    setOperatorsDefaultValues,
    arrayDataFields,
    arrayColumnsLabels
  };
};

export default tableModel;
