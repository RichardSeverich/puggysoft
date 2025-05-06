import React from "react";
import PropTypes from "prop-types";
import TableFilterGeneric from "../../generic/TableFilterGeneric";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";
import tableModel from "../../../models/mensualidad/historyPorCursoTable";
import enumSystems from "../../../models/enumSystems";

function HistoryPorCursoGenericTable (props) {
  const {
    numberPagesToShow,
    tableTitle,
    tableSubTitle,
    handleGetData,
    handleGetSize,
    tableArrayCustomRowButtons,
    columnsToShow,
    fixArrayData,
  } = props;

  const { arrayColumnsLabels, arrayDataFields } = tableModel(columnsToShow);

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
      fixArrayData={fixArrayData}
    >
    </TableFilterGeneric>
  );
}

export default HistoryPorCursoGenericTable;

HistoryPorCursoGenericTable.propTypes = {
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
  fixArrayData: PropTypes.func,
  whatSystemIs: PropTypes.oneOf([
    enumSystems.MENSUALIDAD,
    enumSystems.SALES,
    enumSystems.ESCUELA
  ])
};

HistoryPorCursoGenericTable.defaultProps = {
  numberPagesToShow: 0,
  tableTitle: "",
  tableSubTitle: undefined,
  handleGetData: () => { },
  handleGetSize: () => { },
  tableArrayCustomRowButtons: [],
  columnsToShow: enumTableColumnsToShow.FULL,
  fixArrayData: undefined,
  whatSystemIs: enumSystems.ESCUELA
};
