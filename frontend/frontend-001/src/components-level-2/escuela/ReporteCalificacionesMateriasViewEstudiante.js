import { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SelectCursoMateriaEstudianteModals from './generic/SelectCursoMateriaEstudianteModals'
import ReporteNotaFinalViewEstudianteGenericTable from './generic/ReporteNotaFinalViewEstudianteGenericTable'
import { validateTemplateNew, handleValidation } from "../../validations/escuela/HandleCalificacionEstudianteValidations";
import i18n from "../../i18n/i18n";
import { handleFilterRequest } from "../../actions/HandleManager";
import pdfBuilder from "../../tools/escuela/pdfBuilderReporteEstudianteCalificacionesMaterias"
import enumTableColumnCalification from "./../../models/escuela/enumTableColumnCalification";

function ReporteCalificacionesMateriasViewEstudiante(params) {
  const pageSize = 200;
  const [validated, setValidated] = useState(false);
  const [validateTemplate, setValidateTemplate] = useState({...validateTemplateNew, materia: false});

  const [curso, setCurso] = useState({name: ''}); // curso seleccionada

  // modal select
  const [username] = useState(window.sessionStorage.getItem('username')); // estudiante
  const [tableVisible, setTableVisible] = useState(false);
  const [getOption, setGetOption] = useState('');
  const [selectSet] = useState({
    curso: setCurso,
  });

  const tableSubTitle = `${i18n.escuela.curso}: ${curso.name} | ${i18n.escuela.estudiante}: ${username}`;
  const title = `${i18n.escuela.materia}s`;

  // tabla notas
  const [viewNotas, setViewNotas] = useState(false);

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
    // obtenemos las materias del curso seleccionado
    const materias = await handleFilterRequestAsync(`escuela-cursos-materias/filter?page=0&size=${pageSize}&curso=${curso.shortName}&contains=true`,{});
    let num = 1;

    const dataTablePromise = materias.map(async materia => {
      // obtener Notas
      const notas = await handleFilterRequestAsync(`escuela-materias-notas/filter?page=0&size=${pageSize}&materia=${materia.shortName}&contains=true`,{});
      // obtener calificaciones
      const getCalificaciones = notas.map( nota => {
        return new Promise((resolve) => {
          handleFilterRequest(`escuela-calificaciones/filter?page=0&size=1`,
            {
              estudianteCriteria: username,
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
        name: materia.name,
        notaFinal: ponderado,
      }
    })
    const dataTable = await Promise.all(dataTablePromise);
    dataTable.sort((a, b) => a.num - b.num);

    updateArrayData(dataTable);
  }

  function handleGetSize (filterBody, setTotalPages) {
    setTotalPages(1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewNotas(false);
    setTimeout(()=> {
      setViewNotas(true);
    }, 100)
  }

  const GeneratePDF = () => {
    pdfBuilder({ curso, estudiante: {username} });
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
        <SelectCursoMateriaEstudianteModals
          getOption={getOption}
          setSelect={selectSet[getOption]}
          setTableVisible={setTableVisible}
          setValidateTemplate={setValidateTemplate}
          estudiante={username}
          controlValidate={controlValidate}
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
          <Button
            type="submit"
            className="mt-3 mb-3"
            disabled={!validated}
          >
            {i18n.escuela.obtenerNotas}
          </Button>
          {viewNotas &&
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
      {viewNotas && <ReporteNotaFinalViewEstudianteGenericTable
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={title}
        tableSubTitle={tableSubTitle}
        pageSize={pageSize}
        numberPagesToShow={1}
      />}
    </Row>
  </>
}

export default ReporteCalificacionesMateriasViewEstudiante;