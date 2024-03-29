package com.puggysoft.repositories.reservations;

import com.puggysoft.entities.reservations.EntityResResource;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryResource extends JpaRepository<EntityResResource, Long> {

  @Query(value = "SELECT COUNT(*) FROM res_resources;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM res_resources LIMIT ?1, ?2", nativeQuery = true)
  List<EntityResResource> findResourceByPagination(int off, int size);

}