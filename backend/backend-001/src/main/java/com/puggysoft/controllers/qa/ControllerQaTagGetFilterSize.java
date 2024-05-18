package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTagFilter;
import com.puggysoft.services.qa.ServiceQaTagGetFilterSize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ControllerQaTagGetFilterSize {

  @Autowired
  private ServiceQaTagGetFilterSize serviceGetFilterSize;

  @PostMapping(path = "/api/v1/qa-tags/filter/size/{pageSize}")
  public ResponseEntity<Long> getSize(@RequestBody @Valid DtoQaTagFilter dtoFilter,
      @PathVariable Long pageSize) {
    return serviceGetFilterSize.getSize(dtoFilter,
        pageSize);
  }
}