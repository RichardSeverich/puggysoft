package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividades;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaActividadesFilter;
import com.puggysoft.services.alcaldia.ServiceAlcaldiaActividadesGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerAlcaldiaActividadesGetFilter {

  @Autowired
  private ServiceAlcaldiaActividadesGetFilter service;

  @PostMapping(path = "/api/v1/alcaldia-actividades/filter")
  public ResponseEntity<List<DtoAlcaldiaActividades>> getAlcaldiaRecursosMunicipalesFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoAlcaldiaActividadesFilter dtoFilter) {
    return service.filter(dtoFilter, page, size);
  }
}