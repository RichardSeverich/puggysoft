package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaMateriasFilter;
import com.puggysoft.services.escuela.ServiceEscuelaCursosMateriasDocentesGetFilterSize;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaCursosMateriasDocentesGetFilterSize {

  @Autowired
  private ServiceEscuelaCursosMateriasDocentesGetFilterSize service;

  @PostMapping(path = "/api/v1/escuela-cursos-materias-docentes/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam String docente,
      @RequestParam String curso,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaMateriasFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize, docente, curso, contains);
  }
}
