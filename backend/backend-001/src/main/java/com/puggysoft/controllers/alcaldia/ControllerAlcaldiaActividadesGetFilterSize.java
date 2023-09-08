package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividadesFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaActividadesGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaActividadesGetFilterSize {

  @Autowired
  private ServiceAlcaldiaActividadesGetFilterSize service;

  @PostMapping(path = "/api/v1/alcaldia-actividades/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoAlcaldiaActividadesFilter DtoFilter,
      @PathVariable Long pageSize) {
    return service.getSize(DtoFilter, pageSize);
  }
}