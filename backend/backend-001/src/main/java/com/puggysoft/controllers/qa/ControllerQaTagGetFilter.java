package com.puggysoft.controllers.qa;

import com.puggysoft.dtos.qa.DtoQaTag;
import com.puggysoft.dtos.qa.DtoQaTagFilter;
import com.puggysoft.services.qa.ServiceQaTagGetFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ControllerQaTagGetFilter {

  @Autowired
  private ServiceQaTagGetFilter service;

  @PostMapping(path = "/api/v1/qa-tags/filter")
  public ResponseEntity<List<DtoQaTag>> getQaTagFilter(
          @RequestParam int page,
          @RequestParam int size,
          @RequestBody @Valid DtoQaTagFilter dtoFilter) {
    return service.filter(dtoFilter, page, size);
  }
}