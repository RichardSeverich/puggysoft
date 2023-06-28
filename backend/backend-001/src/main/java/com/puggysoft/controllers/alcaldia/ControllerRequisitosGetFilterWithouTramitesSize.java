package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoRequisitosFilter;
import com.puggysoft.services.alcaldia.ServiceRequisitosGetFilterWithoutTramitesSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRequisitosGetFilterWithouTramitesSize {

  @Autowired
  private ServiceRequisitosGetFilterWithoutTramitesSize serviceRequisitosGetFilterWithoutTramitesSize;

  @PostMapping(path = "/api/v1/requisitos/filter/without-tramites/size")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUrbanismoRequisitosFilter dtoUrbanismoRequisitosFilter,
      @RequestParam Long pageSize,
      @RequestParam String tramite) {
    return serviceRequisitosGetFilterWithoutTramitesSize.getSize(dtoUrbanismoRequisitosFilter, pageSize, tramite);
  }

}
