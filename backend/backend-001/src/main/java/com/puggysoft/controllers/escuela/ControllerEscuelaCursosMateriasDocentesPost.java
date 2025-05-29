package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursosMateriasDocentes;
import com.puggysoft.services.escuela.ServiceEscuelaCursosMateriasDocentesCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaCursosMateriasDocentesPost {
  @Autowired
  private ServiceEscuelaCursosMateriasDocentesCreate service;

  @PostMapping(path = "/api/v1/escuela-cursos-materias-docentes")
  public ResponseEntity<String> post(@RequestBody @Valid DtoEscuelaCursosMateriasDocentes dto) {
    return service.create(dto);
  }
}
