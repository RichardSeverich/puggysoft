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
    estudiante,
    curso,
    controlValidate,
  } = props

  const tableTitle = {
    curso: i18n.escuela.cursosTableTitleSub,
    materia: i18n.escuela.materiasTableTitleSub,
  }
  const GenericTable = {
    curso: CursoGenericTable,
    materia: MateriaGenericTable,
  }
  const pageSize = 8;
  const numberPagesToShow = 8;

  function handleGetDataCursos (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-cursos-estudiantes/filter?estudiante=${estudiante}&page=${activePage - 1}&size=${pageSize}&contains=true`, filterBody, updateArrayData);
  }

  function handleGetSizeCursos (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-cursos-estudiantes/filter/size?pageSize=${pageSize}&estudiante=${estudiante}&contains=true`, filterBody, setTotalPages);
  }

  function handleGetDataMaterias (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-cursos-materias/filter?page=${activePage - 1}&size=${pageSize}&curso=${curso.shortName}&contains=true`, filterBody, updateArrayData);
  }

  function handleGetSizeMaterias (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-cursos-materias/filter/size?pageSize=${pageSize}&curso=${curso.shortName}&contains=true`, filterBody, setTotalPages);
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
