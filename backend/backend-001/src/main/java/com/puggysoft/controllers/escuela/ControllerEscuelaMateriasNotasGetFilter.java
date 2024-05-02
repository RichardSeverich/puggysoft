package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaNotas;
import com.puggysoft.dtos.escuela.DtoEscuelaNotasFilter;
import java.util.List;
import javax.validation.Valid;

import com.puggysoft.services.escuela.ServiceEscuelaMateriasNotasGetFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaMateriasNotasGetFilter {

  @Autowired
  private ServiceEscuelaMateriasNotasGetFilter service;

  @PostMapping(path = "/api/v1/escuela-materias-notas/filter")
  public ResponseEntity<List<DtoEscuelaNotas>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String materia,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaNotasFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, materia, contains);
  }
}
