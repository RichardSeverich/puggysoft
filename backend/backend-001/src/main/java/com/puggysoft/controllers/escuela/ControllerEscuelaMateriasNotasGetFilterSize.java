package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaNotasFilter;
import com.puggysoft.services.escuela.ServiceEscuelaMateriasNotasGetFilterSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerEscuelaMateriasNotasGetFilterSize {

  @Autowired
  private ServiceEscuelaMateriasNotasGetFilterSize service;

  @PostMapping(path = "/api/v1/escuela-materias-notas/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam String materia,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaNotasFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize, materia, contains);
  }
}
