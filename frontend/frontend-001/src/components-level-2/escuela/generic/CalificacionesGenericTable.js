import React from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import useInput from "../../../hooks/useInput";
import enumCompareOperators from "../../../models/enumCompareOperators";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import tableModel from "../../../models/escuela/calificacionesTableModels";
import i18n from "../../../i18n/i18n";

function CalificacionesGenericTable (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons,
    columnsToShow,
    fixArrayData
  } = props;

  const history = useHistory();
  let estudianteSelected = "";
  let cursoSelected = "";
  let materiaSelected = "";
  let newSubtitle;
  if (history && history.location && history.location.state) {
    estudianteSelected = history.location.state.estudianteSelected;
    cursoSelected = history.location.state.cursoSelected;
    materiaSelected = history.location.state.materiaSelected;
    newSubtitle = `
      ${i18n.escuela.estudiante}: ${estudianteSelected.username} | ${i18n.escuela.curso}: ${cursoSelected.name} | ${i18n.escuela.materia}: ${materiaSelected.name}
    `;
  }

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaId, onChange: criteriaOnChangeId, setValue: criteriaSetId } = useInput("");
  const { value: criteriaCurso, onChange: criteriaOnChangeCurso, setValue: criteriaSetCurso } = useInput(cursoSelected.shortName);
  const { value: criteriaMateria, onChange: criteriaOnChangeMateria, setValue: criteriaSetMateria } = useInput(materiaSelected.shortName);
  const { value: criteriaEstudiante, onChange: criteriaOnChangeEstudiante, setValue: criteriaSetEstudiante } = useInput(estudianteSelected.username);
  const { value: criteriaNota, onChange: criteriaOnChangeNota, setValue: criteriaSetNota } = useInput("");
  const { value: criteriaNotaValor, onChange: criteriaOnChangeNotaValor, setValue: criteriaSetNotaValor } = useInput("");
  const { value: criteriaCreatedBy, onChange: criteriaOnChangeCreatedBy, setValue: criteriaSetCreatedBy } = useInput("");
  const { value: criteriaUpdatedBy, onChange: criteriaOnChangeUpdatedBy, setValue: criteriaSetUpdatedBy } = useInput("");
  const { value: criteriaCreatedDate, onChange: criteriaOnChangeCreatedDate, setValue: criteriaSetCreatedDate } = useInput("");
  const { value: criteriaUpdatedDate, onChange: criteriaOnChangeUpdatedDate, setValue: criteriaSetUpdatedDate } = useInput("");

  // FILTER OPERATORS
  const { value: operatorId, onChange: operatorOnChangeId, setValue: operatorSetId } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorCurso, onChange: operatorOnChangeCurso, setValue: operatorSetCurso } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorMateria, onChange: operatorOnChangeMateria, setValue: operatorSetMateria } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorShortEstudiante, onChange: operatorOnChangeEstudiante, setValue: operatorSetEstudiante } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorNota, onChange: operatorOnChangeNota, setValue: operatorSetNota } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorNotaValor, onChange: operatorOnChangeNotaValor, setValue: operatorSetNotaValor } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedBy, onChange: operatorOnChangeCreatedBy, setValue: operatorSetCreatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorUpdatedBy, onChange: operatorOnChangeUpdatedBy, setValue: operatorSetUpdatedBy } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorCreatedDate, onChange: operatorOnChangeCreatedDate, setValue: operatorSetCreatedDate } = useInput(enumCompareOperators.DATE_EQUALS);
  const { value: operatorUpdatedDate, onChange: operatorOnChangeUpdatedDate, setValue: operatorSetUpdatedDate } = useInput(enumCompareOperators.DATE_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody, arrayColumnsLabels, arrayDataFields } = tableModel(
    columnsToShow,
    /* ID */ criteriaId, criteriaOnChangeId, criteriaSetId, operatorId, operatorOnChangeId, operatorSetId,
    /* CURSO */criteriaCurso, criteriaOnChangeCurso, criteriaSetCurso, operatorCurso, operatorOnChangeCurso, operatorSetCurso,
    /* MATERIA */criteriaMateria, criteriaOnChangeMateria, criteriaSetMateria, operatorMateria, operatorOnChangeMateria, operatorSetMateria,
    /* ESTUDIANTE */criteriaEstudiante, criteriaOnChangeEstudiante, criteriaSetEstudiante, operatorShortEstudiante, operatorOnChangeEstudiante, operatorSetEstudiante,
    /* NOTA */criteriaNota, criteriaOnChangeNota, criteriaSetNota, operatorNota, operatorOnChangeNota, operatorSetNota,
    /* NOTA VALOR */criteriaNotaValor, criteriaOnChangeNotaValor, criteriaSetNotaValor, operatorNotaValor, operatorOnChangeNotaValor, operatorSetNotaValor,
    /* CREATED BY */criteriaCreatedBy, criteriaOnChangeCreatedBy, criteriaSetCreatedBy, operatorCreatedBy, operatorOnChangeCreatedBy, operatorSetCreatedBy,
    /* UPDATED BY */criteriaUpdatedBy, criteriaOnChangeUpdatedBy, criteriaSetUpdatedBy, operatorUpdatedBy, operatorOnChangeUpdatedBy, operatorSetUpdatedBy,
    /* CREATED DATE */criteriaCreatedDate, criteriaOnChangeCreatedDate, criteriaSetCreatedDate, operatorCreatedDate, operatorOnChangeCreatedDate, operatorSetCreatedDate,
    /* UPDATED DATE */criteriaUpdatedDate, criteriaOnChangeUpdatedDate, criteriaSetUpdatedDate, operatorUpdatedDate, operatorOnChangeUpdatedDate, operatorSetUpdatedDate
  );

  return (
    <TableFilterGeneric
      arrayColumns={arrayColumnsLabels}
      arrayDataFields={arrayDataFields}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableSubTitle={newSubtitle? newSubtitle: tableSubTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      numberPagesToShow={numberPagesToShow}
      arrayColumnsFilter={arrayColumnsFilter}
      clearFilters={clearFilters}
      getFilterBody={getFilterBody}
      fixArrayData={fixArrayData}
    >
    </TableFilterGeneric>
  );
}

export default CalificacionesGenericTable;

CalificacionesGenericTable.propTypes = {
  numberPagesToShow: PropTypes.number,
  tableTitle: PropTypes.string,
  tableSubTitle: PropTypes.string,
  handleGetData: PropTypes.func,
  handleGetSize: PropTypes.func,
  tableArrayCustomRowButtons: PropTypes.array,
  columnsToShow: PropTypes.oneOf([
    enumTableColumnsToShow.FULL,
    enumTableColumnsToShow.MEDIUM
  ]),
  fixArrayData: PropTypes.func
};

CalificacionesGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL,
  fixArrayData: undefined
};
