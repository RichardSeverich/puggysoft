package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoRequisitosFilter;
import com.puggysoft.services.alcaldia.ServiceRequisitosGetFilterWithTramitesSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerRequisitosGetFilterWithTramitesSize {

  @Autowired
  private ServiceRequisitosGetFilterWithTramitesSize serviceRequisitosGetFilterWithTramitesSize;

  @PostMapping(path = "/api/v1/requisitos/filter/with-tramites/size")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUrbanismoRequisitosFilter dtoUrbanismoRequisitosFilter,
      @RequestParam Long pageSize,
      @RequestParam String tramite) {
    return serviceRequisitosGetFilterWithTramitesSize.getSize(dtoUrbanismoRequisitosFilter, pageSize, tramite);
  }

}
