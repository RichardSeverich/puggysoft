package com.puggysoft.controllers.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoRegulaLotesFilter;
import com.puggysoft.services.alcaldia.ServiceRegulaLotesGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegulaLotesGetFilterSize {

  @Autowired
  private ServiceRegulaLotesGetFilterSize serviceRegulaLotesGetFilterSize;

  @PostMapping(path = "/api/v1/regula-lotes/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoRegulaLotesFilter dtoRegulaLotesFilter,
      @PathVariable Long pageSize) {
    return serviceRegulaLotesGetFilterSize.getSize(dtoRegulaLotesFilter, pageSize);
  }
}