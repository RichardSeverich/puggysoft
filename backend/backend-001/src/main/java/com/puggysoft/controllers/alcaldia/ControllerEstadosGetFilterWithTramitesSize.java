package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoEstadosFilter;
import com.puggysoft.services.alcaldia.ServiceEstadosGetFilterWithTramitesSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerEstadosGetFilterWithTramitesSize {

  @Autowired
  private ServiceEstadosGetFilterWithTramitesSize serviceEstadosGetFilterWithTramitesSize;

  @PostMapping(path = "/api/v1/estados/filter/with-tramites/size")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUrbanismoEstadosFilter dtoUrbanismoEstadosFilter,
      @RequestParam Long pageSize,
      @RequestParam String tramite) {
    return serviceEstadosGetFilterWithTramitesSize.getSize(dtoUrbanismoEstadosFilter, pageSize, tramite);
  }

}
