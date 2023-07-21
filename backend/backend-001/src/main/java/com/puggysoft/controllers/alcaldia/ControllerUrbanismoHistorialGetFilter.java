package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorial;
import com.puggysoft.dtos.alcaldia.DtoUrbanismoHistorialFilter;
import com.puggysoft.services.alcaldia.ServiceUrbanismoHistorialGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerUrbanismoHistorialGetFilter {

  @Autowired
  private ServiceUrbanismoHistorialGetFilter serviceUrbanismoHistorialGetFilter;

  @PostMapping(path = "/api/v1/urbanismo-historial/filter")
  public ResponseEntity<List<DtoUrbanismoHistorial>> getUrbanismoHistorialFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoUrbanismoHistorialFilter dtoUrbanismoHistorialFilter) {
    return serviceUrbanismoHistorialGetFilter.filter(dtoUrbanismoHistorialFilter, page, size);
  }
}