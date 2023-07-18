package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.services.alcaldia.ServiceRegulaLotesCreate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegulaLotesPost {
  @Autowired
  private ServiceRegulaLotesCreate serviceRegulaLotesCreate;

  @PostMapping(path = "/api/v1/regula-lotes")
  public ResponseEntity<String> post(
      @RequestBody @Valid DtoRegulaLotes dtoRegulaLotes) {
    return serviceRegulaLotesCreate.create(dtoRegulaLotes);
  }
}