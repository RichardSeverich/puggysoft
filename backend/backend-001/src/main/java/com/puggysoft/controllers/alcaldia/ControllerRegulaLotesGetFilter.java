package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotes;
import com.puggysoft.dtos.alcaldia.DtoRegulaLotesFilter;
import com.puggysoft.services.alcaldia.ServiceRegulaLotesGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegulaLotesGetFilter {

  @Autowired
  private ServiceRegulaLotesGetFilter serviceRegulaLotesGetFilter;

  @PostMapping(path = "/api/v1/regula-lotes/filter")
  public ResponseEntity<List<DtoRegulaLotes>> getRegulaLotesFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestBody @Valid DtoRegulaLotesFilter dtoRegulaLotesFilter) {
    return serviceRegulaLotesGetFilter.filter(dtoRegulaLotesFilter, page, size);
  }
}