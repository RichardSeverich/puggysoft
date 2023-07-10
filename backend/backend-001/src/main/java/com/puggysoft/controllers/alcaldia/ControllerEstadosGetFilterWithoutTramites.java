package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstados;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstadosFilter;
import com.puggysoft.services.alcaldia.ServiceEstadosGetFilterWithoutTramites;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEstadosGetFilterWithoutTramites {

  @Autowired
  private ServiceEstadosGetFilterWithoutTramites serviceEstadosGetFilterWithoutTramites;

  @PostMapping(path = "/api/v1/estados/filter/without-tramites")
  public ResponseEntity<List<DtoUrbanismoEstados>> getEstados(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoUrbanismoEstadosFilter dtoUrbanismoEstadosFilter,
      @RequestParam String tramite) {
    return serviceEstadosGetFilterWithoutTramites.filter(dtoUrbanismoEstadosFilter, page, size, tramite);
  }
}
