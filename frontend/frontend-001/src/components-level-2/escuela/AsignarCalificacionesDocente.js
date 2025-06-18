import { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SelectCursoMateriaNotaDocenteModals from './generic/SelectCursoMateriaNotaDocenteModals'
import NotasEstudianteMateriaModals from './generic/NotasEstudianteMateriaModals'
import { validateTemplateNew, handleValidation } from "../../validations/escuela/HandleCalificacionDocenteValidations";
import UserTableFilterGeneric from "./../users/UserTableFilterGeneric";
import { handleFilterRequest } from "../../actions/HandleManager";
import i18n from "../../i18n/i18n";
import enumTableColumnCalification from "./../../models/escuela/enumTableColumnCalification";

const title = i18n.escuela.estudianteTable;

function AsignarCalificacionesDocente(params) {
  const pageSize = 200;
  const numberPagesToShow = 1;

  const [validated, setValidated] = useState(false);
  const [validateTemplate, setValidateTemplate] = useState({...validateTemplateNew});

  const [curso, setCurso] = useState({name: ''}); // curso seleccionada
  const [materia, setMateria] = useState({name: ''}); // materia seleccionada
  const [estudiante, setEstudiante] = useState({name: ''}); // estudiante seleccionado

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

  // modal notas
  const [notasView, setNotasView] = useState(false);

  const controlValidate = (templateValidation) => {
    setValidated(handleValidation(templateValidation));
  }

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`escuela-estudiantes-de-curso/filter?page=${activePage - 1}&size=${pageSize}&curso=${curso.shortName}`,
      filterBody, updateArrayData);
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(`escuela-estudiantes-de-curso/filter/size?&pageSize=${pageSize}&curso=${curso.shortName}`,
      filterBody, setTotalPages);
  }

  function handleSelection (userData) {
    setEstudiante(userData);
    setNotasView(true);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.escuela.calificaciones
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewStudents(false);
    setTimeout(()=> {
      setViewStudents(true);
    }, 100)
    // logica de submit
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
        <SelectCursoMateriaNotaDocenteModals
          getOption={getOption}
          setSelect={selectSet[getOption]}
          setTableVisible={setTableVisible}
          setValidateTemplate={setValidateTemplate}
          docente={username}
          curso={curso}
          controlValidate={controlValidate}
        />
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
          columnCalification={enumTableColumnCalification.MANAGE}
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
            className="mt-3"
            disabled={!validated}
          >
            {i18n.escuela.obtainData}
          </Button>
        </Form>
      </Col>
    </Row>
    <Row className="justify-content-center">
      {viewStudents && <UserTableFilterGeneric
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={title}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        pageSize={pageSize}
        numberPagesToShow={numberPagesToShow}
      />}
    </Row>
  </>
}

export default AsignarCalificacionesDocente;