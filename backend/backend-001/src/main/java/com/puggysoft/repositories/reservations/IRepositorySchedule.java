package com.puggysoft.repositories.reservations;

import com.puggysoft.entities.reservations.EntityResSchedule;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositorySchedule extends JpaRepository<EntityResSchedule, Long> {

  @Query(value = "SELECT COUNT(*) FROM res_schedule;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM res_schedule LIMIT ?1, ?2", nativeQuery = true)
  List<EntityResSchedule> findScheduleByPagination(int off, int size);

}