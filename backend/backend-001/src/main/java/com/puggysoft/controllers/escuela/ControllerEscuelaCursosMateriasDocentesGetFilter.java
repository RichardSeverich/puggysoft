package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMaterias;
import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.services.escuela.ServiceEscuelaCursosMateriasDocentesGetFilter;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaCursosMateriasDocentesGetFilter {

  @Autowired
  private ServiceEscuelaCursosMateriasDocentesGetFilter service;

  @PostMapping(path = "/api/v1/escuela-cursos-materias-docentes/filter")
  public ResponseEntity<List<DtoEscuelaMaterias>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String docente,
      @RequestParam String curso,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaMateriasFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, docente, curso, contains);
  }
}
