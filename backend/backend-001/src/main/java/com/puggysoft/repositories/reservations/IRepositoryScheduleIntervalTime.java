package com.puggysoft.repositories.reservations;

import com.puggysoft.entities.reservations.EntityResScheduleIntervalTime;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryScheduleIntervalTime extends JpaRepository<EntityResScheduleIntervalTime, Long> {

  @Query(value = "SELECT COUNT(*) FROM res_resource;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM res_resource LIMIT ?1, ?2", nativeQuery = true)
  List<EntityResScheduleIntervalTime> findResResourcesByPagination(int off, int size);

}