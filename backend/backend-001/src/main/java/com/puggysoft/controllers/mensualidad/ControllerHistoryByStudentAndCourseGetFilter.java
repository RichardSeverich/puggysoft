package com.puggysoft.controllers.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByStudentAndCourse;
import com.puggysoft.services.mensualidad.ServiceHistoryByStudentAndCourse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerHistoryByStudentAndCourseGetFilter {

  @Autowired
  private ServiceHistoryByStudentAndCourse service;

  @GetMapping(path = "/api/v1/history-by-student-curse")
  public ResponseEntity<List<DtoHistoryByStudentAndCourse>> getFilter(
      @RequestParam String courseName,
      @RequestParam String studentUsername,
      @RequestParam String idCourse
  ) {
    return service.filter(courseName, studentUsername, idCourse);
  }
}
