package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosDocentes;
import com.puggysoft.services.escuela.ServiceEscuelaCursosDocentesCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaCursosDocentesPost {
  @Autowired
  private ServiceEscuelaCursosDocentesCreate service;

  @PostMapping(path = "/api/v1/escuela-cursos-docentes")
  public ResponseEntity<String> post(@RequestBody @Valid DtoEscuelaCursosDocentes dto) {
    return service.create(dto);
  }
}
