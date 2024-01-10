package com.puggysoft.repositories.system;

import com.puggysoft.entities.system.EntitySystemProperty;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositorySystemProperty extends JpaRepository<EntitySystemProperty, Long> {

  @Query(value = "SELECT * FROM system_properties LIMIT ?1, ?2", nativeQuery = true)
  List<EntitySystemProperty> findSystemPropertiesByPagination(int off, int size);

  @Query(value = "SELECT * FROM system_properties WHERE name = ?1 AND tenant = ?2", nativeQuery = true)
  List<EntitySystemProperty> findSystemPropertyByNameAndTenant(String name, String tenant);

  @Query(value = "SELECT COUNT(*) FROM system_properties;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT system_properties.* FROM system_properties "
      + "WHERE system_properties.name = ?1 "
      + "AND system_properties.tenant = ?2", nativeQuery = true)
  EntitySystemProperty findSystemPropertyByName(String name, String tenant);

}
