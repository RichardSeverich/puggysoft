package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.services.escuela.ServiceEscuelaEstudiantesCursoGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaEstudiantesCursoGetFilterSize {

  @Autowired
  private ServiceEscuelaEstudiantesCursoGetFilterSize service;

  @PostMapping(path = "/api/v1/escuela-estudiantes-de-curso/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam String curso,
      @RequestBody @Valid DtoUserFilter dtoFilter
  ) {
    return service.getSize(dtoFilter, pageSize, curso);
  }
}
