package com.puggysoft.controllers.alcaldia;

import com.puggysoft.services.alcaldia.ServiceRegulaLotesDeleteById;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegulaLotesDeleteById {

  @Autowired
  private ServiceRegulaLotesDeleteById serviceRegulaLotesDeleteById;

  @DeleteMapping(path = "/api/v1/regula-lotes/{id}")
  public ResponseEntity<String> deleteById(@PathVariable Long id) {
    return serviceRegulaLotesDeleteById.deleteById(id);
  }
}