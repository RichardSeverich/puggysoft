package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilterSize {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilterSize service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-descontinuados/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter dtoFilter,
      @PathVariable Long pageSize) {
    return service.getSize(dtoFilter, pageSize);
  }
}