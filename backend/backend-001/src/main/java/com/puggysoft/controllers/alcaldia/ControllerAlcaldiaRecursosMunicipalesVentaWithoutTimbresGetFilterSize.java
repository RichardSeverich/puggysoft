package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesVentaFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilterSize {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesVentaWithoutTimbresGetFilterSize service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-ventas-without-timbres/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesVentaFilter dtoAlcaldiaRecursosMunicipalesVentaFilter,
      @PathVariable Long pageSize) {
    return service.getSize(dtoAlcaldiaRecursosMunicipalesVentaFilter,
        pageSize);
  }
}