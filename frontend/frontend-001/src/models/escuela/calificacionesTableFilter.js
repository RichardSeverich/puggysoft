import enumFilterType from "../enumFilterType";

const tableFilter = function (
/* ID */ criteriaId, criteriaOnChangeId, operatorId, operatorOnChangeId,
  /* CURSO */criteriaCurso, criteriaOnChangeCurso, operatorCurso, operatorOnChangeCurso,
  /* MATERIA */criteriaMateria, criteriaOnChangeMateria, operatorMateria, operatorOnChangeMateria,
  /* ESTUDIANTE */criteriaEstudiante, criteriaOnChangeEstudiante, operatorEstudiante, operatorOnChangeEstudiante,
  /* NOTA */criteriaNota, criteriaOnChangeNota, operatorNota, operatorOnChangeNota,
  /* NOTA VALOR */criteriaNotaValor, criteriaOnChangeNotaValor, operatorNotaValor, operatorOnChangeNotaValor,
  /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy,
  /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy,
  /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate,
  /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate
) {
  const arrayColumnsFilter = [
    {
      type: enumFilterType.NUMBER,
      criteriaValue: criteriaId,
      criteriaOnchange: criteriaOnChangeId,
      operatorValue: operatorId,
      operatorOnchange: operatorOnChangeId
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCurso,
      criteriaOnchange: criteriaOnChangeCurso,
      operatorValue: operatorCurso,
      operatorOnchange: operatorOnChangeCurso
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaMateria,
      criteriaOnchange: criteriaOnChangeMateria,
      operatorValue: operatorMateria,
      operatorOnchange: operatorOnChangeMateria
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaEstudiante,
      criteriaOnchange: criteriaOnChangeEstudiante,
      operatorValue: operatorEstudiante,
      operatorOnchange: operatorOnChangeEstudiante
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaNota,
      criteriaOnchange: criteriaOnChangeNota,
      operatorValue: operatorNota,
      operatorOnchange: operatorOnChangeNota
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaNotaValor,
      criteriaOnchange: criteriaOnChangeNotaValor,
      operatorValue: operatorNotaValor,
      operatorOnchange: operatorOnChangeNotaValor
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaCreatedBy,
      criteriaOnchange: criteriaOnChangeCreatedBy,
      operatorValue: operatorCreatedBy,
      operatorOnchange: operatorOnChangeCreatedBy
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: criteriaUpdatedBy,
      criteriaOnchange: criteriaOnChangeUpdatedBy,
      operatorValue: operatorUpdatedBy,
      operatorOnchange: operatorOnChangeUpdatedBy
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaCreatedDate,
      criteriaOnchange: criteriaOnChangeCreatedDate,
      operatorValue: operatorCreatedDate,
      operatorOnchange: operatorOnChangeCreatedDate
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: criteriaUpdatedDate,
      criteriaOnchange: criteriaOnChangeUpdatedDate,
      operatorValue: operatorUpdatedDate,
      operatorOnchange: operatorOnChangeUpdatedDate
    }
  ];

  return arrayColumnsFilter;
};

export default tableFilter;
