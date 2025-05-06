package com.puggysoft.services.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByCourse;
import com.puggysoft.dtos.mensualidad.DtoTotalCuotasCurso;
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
public class ServiceHistoryByCourse {

  @Autowired
  private RepositoryHistory repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoHistoryByCourse>> filter(
      String courseShortName,
      String courseId
  ) {
    DtoTotalCuotasCurso totalCuotas = repository.getTotalCuotas(courseShortName);

    List<DtoHistoryByCourse> listDto = repository.byCourse(courseShortName, courseId, totalCuotas.totalEnrollment, totalCuotas.totalTuition, totalCuotas.totalOther);
    return ResponseEntity.status(HttpStatus.OK).body(listDto);
  }

}
