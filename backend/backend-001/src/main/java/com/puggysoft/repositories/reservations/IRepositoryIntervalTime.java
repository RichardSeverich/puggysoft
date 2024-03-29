package com.puggysoft.repositories.reservations;

import com.puggysoft.entities.reservations.EntityResIntervalTime;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryIntervalTime extends JpaRepository<EntityResIntervalTime, Long> {

  @Query(value = "SELECT COUNT(*) FROM res_interval_time;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM res_interval_time LIMIT ?1, ?2", nativeQuery = true)
  List<EntityResIntervalTime> findIntervalTimeByPagination(int off, int size);

}