package com.puggysoft.repositories.system;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.puggysoft.entities.system.EntityTenant;


@Repository
public interface IRepositoryTenant extends JpaRepository<EntityTenant, Long> {

  @Query(value = "SELECT COUNT(*) FROM tenants;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM tenants LIMIT ?1, ?2", nativeQuery = true)
  List<EntityTenant> findTenantsByPagination(int off, int size);

}