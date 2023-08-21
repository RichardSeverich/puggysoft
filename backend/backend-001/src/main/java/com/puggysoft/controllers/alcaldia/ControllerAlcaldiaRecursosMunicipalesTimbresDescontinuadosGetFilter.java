package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilter {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilter service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-timbres-descontinuados/filter")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipalesTimbresDescontinuados>> getAlcaldiaRecursosMunicipalesFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter dtoFilter) {
    return service.filter(dtoFilter, page, size);
  }
}