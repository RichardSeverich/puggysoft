import React, { useState } from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest } from "../../actions/HandleManager";
import CursoGenericTable from "../escuela/generic/CursoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import PropTypes from "prop-types";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";
import CommonLoading from "../../components-level-1/CommonLoading";

function CursosTable (props) {
  const tableTitle = i18n.escuela.cursosTableTitle;
  const tableSubTitle = i18n.escuela.cursosTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const { estudianteSelected } = history && history.location && history.location.state;
  const saleTableViewType = props.saleTableViewType;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-estudiantes-basic/filter?page=${activePage - 1}&size=${pageSize}&estudiante=${estudianteSelected.username}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter/size?pageSize=${pageSize}&estudiante=${estudianteSelected.username}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function handleSelection (cursoSelected) {
    setIsRequestInProgress(true);
    history.push({
      pathname: enumPaths.MENSUALIDAD_HISTORY_POR_ESTUDIANTE_CURSO,
      state: {
        data: {
          saleTableViewType,
          estudianteSelected,
          cursoSelected,
        }
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  function fixArrayData(listData) {
    const newList = listData.map((data) => {
      return {
        ...data,
        image: null,
      }
    });
    return newList;
  }

  if (isRequestInProgress) {
    return <CommonLoading />;
  }

  return (
    <div>
      <Card>
        <Card.Header as="h4">
          {"Estudiante" + `: ${estudianteSelected.username}`}
        </Card.Header>
      </Card>
      <CursoGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
        fixArrayData={fixArrayData}
      >
      </CursoGenericTable>
    </div>
  );
}

export default CursosTable;

CursosTable.propTypes = {
  saleTableViewType: PropTypes.oneOf([
    enumSaleTableViewType.FOR_CASHIER,
    enumSaleTableViewType.FOR_SELLER
  ])
};

CursosTable.defaultProps = {
  saleTableViewType: undefined
};
