package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitosFilter;
import com.puggysoft.services.alcaldia.ServiceUrbanismoFlujoRequisitosGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoFlujoRequisitosGetFilterSize {

  @Autowired
  private ServiceUrbanismoFlujoRequisitosGetFilterSize serviceUrbanismoFlujoRequisitosGetFilterSize;

  @PostMapping(path = "/api/v1/urbanismo-flujo-requisitos/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoUrbanismoFlujoRequisitosFilter dtoUrbanismoFlujoRequisitosFilter,
      @PathVariable Long pageSize) {
    return serviceUrbanismoFlujoRequisitosGetFilterSize.getSize(dtoUrbanismoFlujoRequisitosFilter, pageSize);
  }
}