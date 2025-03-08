package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursos;
import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.services.escuela.ServiceEscuelaCursosEstudiantesBasicGetFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ControllerEscuelaCursosEstudiantesBasicGetFilter {

  @Autowired
  private ServiceEscuelaCursosEstudiantesBasicGetFilter service;

  @PostMapping(path = "/api/v1/escuela-cursos-estudiantes-basic/filter")
  public ResponseEntity<List<DtoEscuelaCursos>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String estudiante,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaCursosFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, estudiante, contains);
  }
}
