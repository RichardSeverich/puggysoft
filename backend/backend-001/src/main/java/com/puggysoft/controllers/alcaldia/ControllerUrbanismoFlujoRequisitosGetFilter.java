package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitos;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoFlujoRequisitosFilter;
import com.puggysoft.services.alcaldia.ServiceUrbanismoFlujoRequisitosGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoFlujoRequisitosGetFilter {

  @Autowired
  private ServiceUrbanismoFlujoRequisitosGetFilter serviceUrbanismoFlujoRequisitosGetFilter;

  @PostMapping(path = "/api/v1/urbanismo-flujo-requisitos/filter")
  public ResponseEntity<List<DtoUrbanismoFlujoRequisitos>> getUrbanismoFlujoRequisitosFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoUrbanismoFlujoRequisitosFilter dtoUrbanismoFlujoRequisitosFilter) {
    return serviceUrbanismoFlujoRequisitosGetFilter.filter(dtoUrbanismoFlujoRequisitosFilter, page, size);
  }
}