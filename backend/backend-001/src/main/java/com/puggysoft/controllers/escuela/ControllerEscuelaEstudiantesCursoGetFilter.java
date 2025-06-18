package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.services.escuela.ServiceEscuelaEstudiantesCursoGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaEstudiantesCursoGetFilter {

  @Autowired
  private ServiceEscuelaEstudiantesCursoGetFilter service;

  @PostMapping(path = "/api/v1/escuela-estudiantes-de-curso/filter")
  public ResponseEntity<List<DtoUser>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String curso,
      @RequestBody @Valid DtoUserFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, curso);
  }
}
