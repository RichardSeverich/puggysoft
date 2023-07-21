package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitos;
import com.puggysoft.services.alcaldia.ServiceUrbanismoFlujoRequisitosEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoFlujoRequisitosPut {

  @Autowired
  private ServiceUrbanismoFlujoRequisitosEditById serviceUrbanismoFlujoRequisitosEditById;

  @PutMapping(path = "/api/v1/urbanismo-flujo-requisitos/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoUrbanismoFlujoRequisitos dtoUrbanismoFlujoRequisitos) {
    return serviceUrbanismoFlujoRequisitosEditById.editById(id, dtoUrbanismoFlujoRequisitos);
  }
}
