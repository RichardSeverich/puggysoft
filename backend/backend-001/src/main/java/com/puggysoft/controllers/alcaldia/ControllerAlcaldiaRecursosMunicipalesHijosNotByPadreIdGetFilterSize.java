package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesHijoNotByPadreIdGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesHijosNotByPadreIdGetFilterSize {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesHijoNotByPadreIdGetFilterSize service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-child-not-by-father/filter/size")
  public ResponseEntity<Long> getSize(
      @RequestParam Long pageSize,
      @RequestParam Long idPadre,
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipalesFilter) {
    return service.getSize(dtoAlcaldiaRecursosMunicipalesFilter, pageSize, idPadre);
  }
}