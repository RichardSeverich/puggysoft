package com.puggysoft.controllers.system;

import com.puggysoft.dtos.system.DtoSystemPropertyFilter;
import com.puggysoft.services.system.ServiceSystemPropertyGetFilterSize;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSystemPropertyGetFilterSize {

  @Autowired
  private ServiceSystemPropertyGetFilterSize serviceSystemPropertyGetFilterSize;

  @PostMapping(path = "/api/v1/system-properties/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(
      @RequestBody @Valid DtoSystemPropertyFilter dtoSystemPropertyFilter,
      @PathVariable Long pageSize) {
    return serviceSystemPropertyGetFilterSize.getSize(dtoSystemPropertyFilter, pageSize);
  }

}
