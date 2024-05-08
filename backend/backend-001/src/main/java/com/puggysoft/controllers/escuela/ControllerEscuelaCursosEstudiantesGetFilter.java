package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursos;
import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.services.escuela.ServiceEscuelaCursosEstudiantesGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaCursosEstudiantesGetFilter {

  @Autowired
  private ServiceEscuelaCursosEstudiantesGetFilter service;

  @PostMapping(path = "/api/v1/escuela-cursos-estudiantes/filter")
  public ResponseEntity<List<DtoEscuelaCursos>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String estudiante,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaCursosFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, estudiante, contains);
  }
}
