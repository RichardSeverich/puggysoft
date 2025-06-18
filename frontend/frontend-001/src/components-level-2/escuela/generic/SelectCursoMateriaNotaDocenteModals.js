import i18n from "../../../i18n/i18n";
import {
  handleFilterRequest,
} from "../../../actions/HandleManager";
import CursoGenericTable from "./CursoGenericTable";
import MateriaGenericTable from "./MateriaGenericTable";
import NotaGenericTable from "./NotaGenericTable";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";

function SelectCursoMateriaNotaDocenteModals (props) {
  const {
    getOption,
    setSelect,
    setTableVisible,
    setValidateTemplate,
    docente,
    curso,
    materia,
    controlValidate,
  } = props

  const tableTitle = {
    curso: i18n.escuela.cursosTableTitleSub,
    materia: i18n.escuela.materiasTableTitleSub,
    nota: i18n.escuela.notasTableTitleSub,
  }
  const GenericTable = {
    curso: CursoGenericTable,
    materia: MateriaGenericTable,
    nota: NotaGenericTable,
  }
  const pageSize = 8;
  const numberPagesToShow = 8;

  function handleGetDataCursos (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-cursos-de-docente/filter?docente=${docente}&page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSizeCursos (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-cursos-de-docente/filter/size?pageSize=${pageSize}&docente=${docente}`, filterBody, setTotalPages);
  }

  function handleGetDataMaterias (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-cursos-materias-docentes/filter?page=${activePage - 1}&size=${pageSize}&docente=${docente}&curso=${curso.shortName}&contains=true`, filterBody, updateArrayData);
  }

  function handleGetSizeMaterias (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-cursos-materias-docentes/filter/size?pageSize=${pageSize}&docente=${docente}&curso=${curso.shortName}&contains=true`, filterBody, setTotalPages);
  }

  // pendiente para notas
  function handleGetDataNotas (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`product-groups/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }
  
  // pendiente para notas
  function handleGetSizeNotas (filterBody, setTotalPages) {
    handleFilterRequest(`product-groups/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  const getOptionToTable = {
    curso: {
      handleGetData: handleGetDataCursos,
      handleGetSize: handleGetSizeCursos
    },
    materia: {
      handleGetData: handleGetDataMaterias,
      handleGetSize: handleGetSizeMaterias
    },
    nota: {
      handleGetData: handleGetDataNotas,
      handleGetSize: handleGetSizeNotas
    },
  }

  const handleSelect = function (option) {
    setSelect(option);
    setTableVisible(false);
    setValidateTemplate((stateBefore) => {
      const newState = {
        ...stateBefore,
        [getOption]: false,
      };
      controlValidate(newState);
      return newState;
    })
  };

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelect,
      text: i18n.commonTable.selectButton
    }
  ];

  const Component = GenericTable[getOption]
  return (
    <div>
      <Component
        tableTitle={tableTitle[getOption]}
        numberPagesToShow={numberPagesToShow}
        handleGetData={getOptionToTable[getOption].handleGetData}
        handleGetSize={getOptionToTable[getOption].handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
      />
    </div>
  );
}

export default SelectCursoMateriaNotaDocenteModals;
