package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaRecursosMunicipalesHijoByPadreIdGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaRecursosMunicipalesHijosByPadreIdGetFilter {

  @Autowired
  private ServiceAlcaldiaRecursosMunicipalesHijoByPadreIdGetFilter service;

  @PostMapping(path = "/api/v1/alcaldia-recursos-municipales-child-by-father/filter")
  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipales>> getAlcaldiaRecursosMunicipalesFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam Long idPadre,
      @RequestBody @Valid DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipalesFilter) {
    return service.filter(dtoAlcaldiaRecursosMunicipalesFilter, page, size, idPadre);
  }
}
