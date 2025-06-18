import { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SelectCursoMateriaEstudianteModals from './generic/SelectCursoMateriaEstudianteModals'
import NotasEstudianteMateriaModals from './generic/NotasEstudianteMateriaModals'
import { validateTemplateNew, handleValidation } from "../../validations/escuela/HandleCalificacionEstudianteValidations";
import i18n from "../../i18n/i18n";
import enumTableColumnCalification from "./../../models/escuela/enumTableColumnCalification";

function AsignarCalificacionesDocente(params) {

  const [validated, setValidated] = useState(false);
  const [validateTemplate, setValidateTemplate] = useState({...validateTemplateNew});

  const [curso, setCurso] = useState({name: ''}); // curso seleccionada
  const [materia, setMateria] = useState({name: ''}); // materia seleccionada

  // modal select
  const [username] = useState(window.sessionStorage.getItem('username')); // estudiante
  const [tableVisible, setTableVisible] = useState(false);
  const [getOption, setGetOption] = useState('');
  const [selectSet] = useState({
    curso: setCurso,
    materia: setMateria,
  });

  // tabla notas
  const [viewNotas, setViewNotas] = useState(false);

  const controlValidate = (templateValidation) => {
    setValidated(handleValidation(templateValidation));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setViewNotas(false);
    setTimeout(()=> {
      setViewNotas(true);
    }, 100)
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
            {i18n.escuela.obtenerNotas}
          </Button>
        </Form>
      </Col>
    </Row>
    <Row className="justify-content-center">
      {viewNotas && <NotasEstudianteMateriaModals
        notaFinalShow={true}
        columnCalification={enumTableColumnCalification.VIEW}
        estudiante={username}
        curso={curso}
        materia={materia}
      />}
    </Row>
  </>
}

export default AsignarCalificacionesDocente;