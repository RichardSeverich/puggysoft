package com.puggysoft.controllers.escuela;

import com.puggysoft.services.escuela.ServiceEscuelaCursosDocentesDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaCursosDocentesDeleteById {

  @Autowired
  private ServiceEscuelaCursosDocentesDeleteById service;

  @DeleteMapping(path = "/api/v1/escuela-cursos-docentes/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return service.deleteById(id);
  }
}
