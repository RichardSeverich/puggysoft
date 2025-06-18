package com.puggysoft.services.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByStudentAndCourse;
import com.puggysoft.repositories.mensualidad.RepositoryHistory;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for filter. */
@Service
public class ServiceHistoryByStudentAndCourse {

  @Autowired
  private RepositoryHistory repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoHistoryByStudentAndCourse>> filter(
      String courseName,
      String studentUsername,
      String idCourse
  ) {
    List<DtoHistoryByStudentAndCourse> listDto = repository.byStudentAndCourse(courseName, studentUsername, idCourse);
    return ResponseEntity.status(HttpStatus.OK).body(listDto);
  }

}
