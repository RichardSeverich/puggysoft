import { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SelectCursoMateriaNotaDocenteModals from './generic/SelectCursoMateriaNotaDocenteModals'
import SelectCursoMateriaNotaEncargadoModals from './generic/SelectCursoMateriaNotaEncargadoModals'
import { validateTemplateNew, handleValidation } from "../../validations/escuela/HandleCalificacionDocenteValidations";
import ReporteEstudiantesNotaFinalGenericTable from "./generic/ReporteEstudiantesNotaFinalGenericTable";
import { handleFilterRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumRoles from "../../models/users/enumRoles";
import pdfBuilder from "../../tools/escuela/pdfBuilderReporteEstudiantesCalificacionesMaterias"
import enumTableColumnCalification from "../../models/escuela/enumTableColumnCalification";
import NotasEstudianteMateriaModals from "./generic/NotasEstudianteMateriaModals";

function ReporteCalificacionesMaterias(params) {
  const pageSize = 200;
  const numberPagesToShow = 1;
  const roleUser = sessionStorage.getItem('role');

  const [validated, setValidated] = useState(false);
  const [validateTemplate, setValidateTemplate] = useState({...validateTemplateNew});

  const [curso, setCurso] = useState({name: ''}); // curso seleccionada
  const [materia, setMateria] = useState({name: ''}); // materia seleccionada
  const [estudiante, setEstudiante] = useState({name: ''}); // estudiante seleccionado
  
  const [notasView, setNotasView] = useState(false); // estudiante seleccionado
  
  const tableSubTitle = `${i18n.escuela.curso}: ${curso.name} | ${i18n.escuela.materia}: ${materia.name}`;
  const title = `${i18n.escuela.estudiante}s`;

  // modal select
  const [username] = useState(window.sessionStorage.getItem('username'));
  const [tableVisible, setTableVisible] = useState(false);
  const [getOption, setGetOption] = useState('');
  const [selectSet] = useState({
    curso: setCurso,
    materia: setMateria,
  });

  // tabla estudiantes
  const [viewStudents, setViewStudents] = useState(false);

  function handleSelection (userData) {
    setEstudiante(userData);
    setNotasView(true);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.escuela.detalles
    }
  ];

  const controlValidate = (templateValidation) => {
    setValidated(handleValidation(templateValidation));
  }

  function handleFilterRequestAsync(url, filtros) {
    return new Promise((resolve) => {
      handleFilterRequest(url, filtros, (data) => {
        resolve(data);
      });
    });
  }

  async function handleGetData (activePage, filterBody, updateArrayData) {
    // obtenemos estudiantes y notas segun el curso y materia respectivamente
    const [users, notas] = await Promise.all([
      handleFilterRequestAsync(`escuela-estudiantes-de-curso/filter?page=0&size=${pageSize}&curso=${curso.shortName}`,{}),
      handleFilterRequestAsync(`escuela-materias-notas/filter?page=0&size=${pageSize}&materia=${materia.shortName}&contains=true`,{})
    ])
    let num = 1;

    const dataTablePromise = users.map(async student => {
      // obtener calificaciones
      const getCalificaciones = notas.map( nota => {
        return new Promise((resolve) => {
          handleFilterRequest(`escuela-calificaciones/filter?page=0&size=1`,
            {
              estudianteCriteria: student.username,
              estudianteOperator: "TEXT_EQUALS",
              cursoCriteria: curso.shortName,
              cursoOperator: "TEXT_EQUALS",
              materiaCriteria: materia.shortName,
              materiaOperator: "TEXT_EQUALS",
              notaCriteria: nota.shortName,
              notaOperator: "TEXT_EQUALS"
            }, (calificacion) => {
              resolve({
                ...nota,
                calificacion: calificacion[0]?.notaValor,
              })
            }
          );
        })
      })
      const calificaciones = await Promise.all(getCalificaciones)
      // calcular promedio
      const ponderado = calificaciones.reduce((prev, current) => {
        return prev + ((Number(current.porcentaje / 100)) * (Number(current.calificacion) || 0) )
      }, 0);
      // retornamos los rowData
      return {
        num: num++,
        ci: student.dni,
        name: student.name,
        lastName: student.lastName,
        notaFinal: ponderado,
        username: student.username,
      }
    })
    const dataTable = await Promise.all(dataTablePromise);
    updateArrayData(dataTable);
  }

  function handleGetSize (filterBody, setTotalPages) {
    setTotalPages(1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewStudents(false);
    setTimeout(()=> {
      setViewStudents(true);
    }, 100)
  }

  const GeneratePDF = () => {
    pdfBuilder({ curso, materia });
  }

  return <>
    {/* Modal para seleccionar cursos - materias (- notas) */}
    <Modal
      size="lg"
      show={tableVisible}
      onHide={() => setTableVisible(false)}
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        {(roleUser === enumRoles.SCHOOL_DOCENTE)?
          <SelectCursoMateriaNotaDocenteModals
            getOption={getOption}
            setSelect={selectSet[getOption]}
            setTableVisible={setTableVisible}
            setValidateTemplate={setValidateTemplate}
            docente={username}
            curso={curso}
            controlValidate={controlValidate}
          />
          : <SelectCursoMateriaNotaEncargadoModals
            getOption={getOption}
            setSelect={selectSet[getOption]}
            setTableVisible={setTableVisible}
            setValidateTemplate={setValidateTemplate}
            docente={username}
            curso={curso}
            controlValidate={controlValidate}
          />
        }
      </Modal.Body>
    </Modal>
    {/* Modal para mostrar notas/calificaciones de un estudiante */}
    <Modal
      size="lg"
      show={notasView}
      onHide={() => setNotasView(false)}
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <NotasEstudianteMateriaModals
          notaFinalShow={true}
          columnCalification={enumTableColumnCalification.VIEW}
          estudiante={estudiante.username}
          curso={curso}
          materia={materia}
        />
      </Modal.Body>
    </Modal>
    <Row className="justify-content-center">
      <Row className="justify-content-center">
        <Col xs="auto"><h3>{i18n.escuela.calificaciones}</h3></Col>
      </Row>
      <Col xs={11} sm={9} md={7} lg={6} xl={5} xxl={4}>
        <Form
          onSubmit={handleSubmit}
          className="mt-3"
          noValidate
          validated={validated}
        >
          <Form.Group className="mt-3" controlId="curso">
            <Form.Label>{i18n.escuela.cursosTableTitleSub}</Form.Label>
            <Form.Control
              readOnly
              value={curso.name !== ""? curso.name : 'Curso'}
              isInvalid={validateTemplate.curso}
              type="text"
              onClick={() => {
                setGetOption("curso")
                setTableVisible(true);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {i18n.escuela.cursosTableTitleSub}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-3" controlId="materia">
            <Form.Label>{i18n.escuela.materiasTableTitleSub}</Form.Label>
            <Form.Control
              readOnly
              value={materia.name !== ""? materia.name : 'Materia'}
              isInvalid={validateTemplate.materia}
              type="text"
              disabled={validateTemplate.curso}
              onClick={() => {
                setGetOption("materia")
                setTableVisible(true);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {validateTemplate.curso? i18n.escuela.selectBeforeCourse : i18n.escuela.materiasTableTitleSub}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            type="submit"
            className="mt-3 mb-3"
            disabled={!validated}
          >
            {i18n.escuela.generateReport}
          </Button>
          {viewStudents &&
            <Button
              onClick={GeneratePDF}
              className="mt-3 ms-2 btn-info mb-3"
            >
              Generar PDF
            </Button>
          }
        </Form>
      </Col>
    </Row>
    <Row className="justify-content-center">
      {viewStudents && <ReporteEstudiantesNotaFinalGenericTable
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={title}
        tableSubTitle={tableSubTitle}
        pageSize={pageSize}
        numberPagesToShow={numberPagesToShow}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      />}
    </Row>
  </>
}

export default ReporteCalificacionesMaterias;