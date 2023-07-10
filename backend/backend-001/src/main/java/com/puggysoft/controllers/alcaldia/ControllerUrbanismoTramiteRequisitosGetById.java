package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitos;
import com.puggysoft.services.alcaldia.ServiceUrbanismoTramiteRequisitosGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoTramiteRequisitosGetById {

  @Autowired
  private ServiceUrbanismoTramiteRequisitosGetById serviceUrbanismoTramiteRequisitosGetById;

  @GetMapping(path = "/api/v1/urbanismo-tramite-requisitos/{id}")
  public ResponseEntity<DtoUrbanismoTramiteRequisitos> getById(@PathVariable Long id) {
    return serviceUrbanismoTramiteRequisitosGetById.getById(id);
  }
}
