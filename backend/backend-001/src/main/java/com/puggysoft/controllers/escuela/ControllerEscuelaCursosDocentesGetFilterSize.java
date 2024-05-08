package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.services.escuela.ServiceEscuelaCursosDocentesGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaCursosDocentesGetFilterSize {

  @Autowired
  private ServiceEscuelaCursosDocentesGetFilterSize service;

  @PostMapping(path = "/api/v1/escuela-cursos-docentes/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam String docente,
      @RequestParam boolean contains,
      @RequestBody @Valid DtoEscuelaCursosFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize, docente, contains);
  }
}
