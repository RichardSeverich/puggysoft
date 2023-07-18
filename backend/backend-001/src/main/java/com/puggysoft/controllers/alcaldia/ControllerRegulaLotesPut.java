package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.services.alcaldia.ServiceRegulaLotesEditById;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegulaLotesPut {

  @Autowired
  private ServiceRegulaLotesEditById serviceRegulaLotesEditById;

  @PutMapping(path = "/api/v1/regula-lotes/{id}")
  public ResponseEntity<String> put(@PathVariable Long id,
      @RequestBody @Valid DtoRegulaLotes dtoRegulaLotes) {
    return serviceRegulaLotesEditById.editById(id, dtoRegulaLotes);
  }
}
