import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SelectCursoMateriaNotaEncargadoModals from './generic/SelectCursoMateriaNotaEncargadoModals'
import { validateTemplateNew, handleValidation } from "../../validations/escuela/HandleCalificacionDocenteValidations";
import ReporteDetalladoEncargadoGenericTable from "./generic/ReporteDetalladoEncargadoGenericTable";
import { handleFilterRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumRoles from "../../models/users/enumRoles";
import pdfBuilder from "../../tools/escuela/pdfBuilderReporteDetalladoEncargado"

function ReporteDetalladoEncargado(params) {
  const pageSize = 200;
  const numberPagesToShow = 1;

  const [validated, setValidated] = useState(false);
  const [validateTemplate, setValidateTemplate] = useState({...validateTemplateNew, materia: false});

  const [curso, setCurso] = useState({name: ''}); // curso seleccionada
  const [materias, setMaterias] = useState({name: ''}); // materia seleccionada
  const [estudiantes, setEstudiantes] = useState({name: ''}); // estudiante seleccionado

  const tableSubTitle = `${i18n.escuela.curso}: ${curso.name}`;
  const title = `${i18n.escuela.estudiante}s`;

  // modal select
  const [username] = useState(window.sessionStorage.getItem('username'));
  const [tableVisible, setTableVisible] = useState(false);
  const [getOption, setGetOption] = useState('');

  // habilitasr boton 'submit'
  const [bottonSubmit, setBottonSubmit] = useState(false);
  // tabla estudiantes
  const [viewStudents, setViewStudents] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      setBottonSubmit(false);
      const [getEstudiantes, getMaterias] = await Promise.all([
        handleFilterRequestAsync(`escuela-estudiantes-de-curso/filter?page=0&size=${pageSize}&curso=${curso.shortName}`,{}),
        handleFilterRequestAsync(`escuela-cursos-materias/filter?page=0&size=${pageSize}&curso=${curso.shortName}&contains=true`,{})
      ])
      setEstudiantes(getEstudiantes)
      setMaterias(getMaterias)
      setBottonSubmit(true);
    }
    if (curso.name !== "") {
      updateData();
    }
  }, [curso])

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

  async function limitConcurrency(tasks, limit = 5) {
    const results = [];
    const executing = [];

    for (const task of tasks) {
      const p = Promise.resolve().then(() => task());
      results.push(p);

      if (limit <= tasks.length) {
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= limit) {
          await Promise.race(executing);
        }
      }
    }

    return Promise.all(results);
  }

  async function handleGetData (activePage, filterBody, updateArrayData) {
    setBottonSubmit(false);
    const dataTablePromise = estudiantes.map((estudiante, index) => async () => {
      const materiasFinalesPromise = materias.map(materia => async () => {
        // obtener notas
        const notas = await handleFilterRequestAsync(`escuela-materias-notas/filter?page=0&size=${pageSize}&materia=${materia.shortName}&contains=true`,{});
        // obtener calificaciones
        const getCalificaciones = notas.map( nota => async () => {
          return new Promise((resolve) => {
            handleFilterRequest(`escuela-calificaciones/filter?page=0&size=1`,
              {
                estudianteCriteria: estudiante.username,
                estudianteOperator: "TEXT_EQUALS",
                cursoCriteria: curso.shortName,
                cursoOperator: "TEXT_EQUALS",
                materiaCriteria: materia.shortName,
                materiaOperator: "TEXT_EQUALS",
                notaCriteria: nota.shortName,
                notaOperator: "TEXT_EQUALS"
              }, (calificacion) => {
                console.log(calificacion)
                resolve({
                  ...nota,
                  calificacion: calificacion[0]?.notaValor,
                })
              }
            );
          })
        })
        const calificaciones = await limitConcurrency(getCalificaciones, 5)
        // calcular promedio
        const ponderado = calificaciones.reduce((prev, current) => {
          return prev + ((Number(current.porcentaje / 100)) * (Number(current.calificacion) || 0) )
        }, 0);
        return {
          materia: materia.shortName,
          [materia.shortName]: Number(ponderado.toFixed(2))
        }
      })
      const materiasFinales = await limitConcurrency(materiasFinalesPromise, 5)
      console.log(materiasFinales)
      let result = {
        num: index,
        dni: estudiante.dni,
      }
      materiasFinales.map(materia => {
        result = {
          ...result,
          [materia.materia]: materia[materia.materia]
        }
      })
      return result;
    })
    const estudiantesResponse = await limitConcurrency(dataTablePromise, 5)

    updateArrayData(estudiantesResponse);
    setBottonSubmit(true);
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
    pdfBuilder({ curso });
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
        <SelectCursoMateriaNotaEncargadoModals
          getOption={getOption}
          setSelect={setCurso}
          setTableVisible={setTableVisible}
          setValidateTemplate={setValidateTemplate}
          docente={username}
          curso={curso}
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
            disabled={!validated || !bottonSubmit}
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
      {viewStudents && <ReporteDetalladoEncargadoGenericTable
        materias={materias}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={title}
        tableSubTitle={tableSubTitle}
        pageSize={pageSize}
        numberPagesToShow={numberPagesToShow}
      />}
    </Row>
  </>
}

export default ReporteDetalladoEncargado;