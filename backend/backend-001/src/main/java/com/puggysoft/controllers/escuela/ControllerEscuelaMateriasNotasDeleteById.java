package com.puggysoft.controllers.escuela;

import com.puggysoft.services.escuela.ServiceEscuelaNotasMateriasDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaMateriasNotasDeleteById {

  @Autowired
  private ServiceEscuelaNotasMateriasDeleteById serviceEscuelaNotasMateriasDeleteById;

  @DeleteMapping(path = "/api/v1/escuela-materias-notas/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceEscuelaNotasMateriasDeleteById.deleteById(id);
  }
}