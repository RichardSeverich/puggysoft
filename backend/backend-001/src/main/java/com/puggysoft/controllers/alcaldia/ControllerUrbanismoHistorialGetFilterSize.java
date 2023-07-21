package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorialFilter;
import com.puggysoft.services.alcaldia.ServiceUrbanismoHistorialGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoHistorialGetFilterSize {

  @Autowired
  private ServiceUrbanismoHistorialGetFilterSize serviceUrbanismoHistorialGetFilterSize;

  @PostMapping(path = "/api/v1/urbanismo-historial/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUrbanismoHistorialFilter dtoUrbanismoHistorialFilter,
      @PathVariable Long pageSize) {
    return serviceUrbanismoHistorialGetFilterSize.getSize(dtoUrbanismoHistorialFilter, pageSize);
  }
}