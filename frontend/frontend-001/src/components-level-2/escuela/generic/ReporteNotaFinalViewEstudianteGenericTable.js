import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import tableModel from "../../../models/escuela/reporteStudianteNotasFinalesTableModel";

function ReporteNotaFinalViewEstudianteGenericTable (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons,
    fixArrayData
  } = props;

  const { arrayColumnsFilter, clearFilters, getFilterBody, arrayColumnsLabels, arrayDataFields } = tableModel();

  return (
    <TableFilterGeneric
      arrayColumns={arrayColumnsLabels}
      arrayDataFields={arrayDataFields}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
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

export default ReporteNotaFinalViewEstudianteGenericTable;

ReporteNotaFinalViewEstudianteGenericTable.propTypes = {
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

ReporteNotaFinalViewEstudianteGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL,
  fixArrayData: undefined
};
