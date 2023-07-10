package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitos;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoTramiteRequisitosFilter;
import com.puggysoft.services.alcaldia.ServiceUrbanismoTramiteRequisitosGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoTramiteRequisitosGetFilter {

  @Autowired
  private ServiceUrbanismoTramiteRequisitosGetFilter serviceUrbanismoTramiteRequisitosGetFilter;

  @PostMapping(path = "/api/v1/urbanismo-tramite-requisitos/filter")
  public ResponseEntity<List<DtoUrbanismoTramiteRequisitos>> getUrbanismoTramiteRequisitosFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoUrbanismoTramiteRequisitosFilter dtoUrbanismoTramiteRequisitosFilter) {
    return serviceUrbanismoTramiteRequisitosGetFilter.filter(dtoUrbanismoTramiteRequisitosFilter, page, size);
  }
}