package com.puggysoft.controllers.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByCourse;
import com.puggysoft.services.mensualidad.ServiceHistoryByCourse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerHistoryByCourseGetFilter {

  @Autowired
  private ServiceHistoryByCourse service;

  @GetMapping(path = "/api/v1/history-course")
  public ResponseEntity<List<DtoHistoryByCourse>> getFilter(
      @RequestParam String courseShortName,
      @RequestParam String courseId
  ) {
    return service.filter(courseShortName, courseId);
  }
}
