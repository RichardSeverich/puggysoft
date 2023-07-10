package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitosFilter;
import com.puggysoft.services.alcaldia.ServiceUrbanismoTramiteRequisitosGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoTramiteRequisitosGetFilterSize {

  @Autowired
  private ServiceUrbanismoTramiteRequisitosGetFilterSize serviceUrbanismoTramiteRequisitosGetFilterSize;

  @PostMapping(path = "/api/v1/urbanismo-tramite-requisitos/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUrbanismoTramiteRequisitosFilter dtoUrbanismoTramiteRequisitosFilter,
      @PathVariable Long pageSize) {
    return serviceUrbanismoTramiteRequisitosGetFilterSize.getSize(dtoUrbanismoTramiteRequisitosFilter, pageSize);
  }
}