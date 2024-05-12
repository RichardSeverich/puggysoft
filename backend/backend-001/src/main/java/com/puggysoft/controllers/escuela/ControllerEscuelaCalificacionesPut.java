package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCalificaciones;
import com.puggysoft.services.escuela.ServiceEscuelaCalificacionesEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEscuelaCalificacionesPut {

  @Autowired
  private ServiceEscuelaCalificacionesEditById service;

  @PutMapping(path = "/api/v1/escuela-calificaciones/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoEscuelaCalificaciones dto) {
    return service.editById(id, dto);
  }
}
