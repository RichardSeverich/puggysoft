package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.services.alcaldia.ServiceRegulaLotesGetById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegulaLotesGetById {

  @Autowired
  private ServiceRegulaLotesGetById serviceRegulaLotesGetById;

  @GetMapping(path = "/api/v1/regula-lotes/{id}")
  public ResponseEntity<DtoRegulaLotes> getById(@PathVariable Long id) {
    return serviceRegulaLotesGetById.getById(id);
  }
}
