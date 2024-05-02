package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaNotasMaterias;
import com.puggysoft.services.escuela.ServiceEscuelaNotasMateriasCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaMateriasNotasPost {
  @Autowired
  private ServiceEscuelaNotasMateriasCreate serviceEscuelaNotasMateriasCreate;

  @PostMapping(path = "/api/v1/escuela-materias-notas")
  public ResponseEntity<String> post(@RequestBody @Valid DtoEscuelaNotasMaterias dtoEscuelaNotasMaterias) {
    return serviceEscuelaNotasMateriasCreate.create(dtoEscuelaNotasMaterias);
  }
}