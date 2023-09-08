package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaActividades;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaActividades
    extends JpaRepository<EntityAlcaldiaActividades, Long> {

  @Query(value = "SELECT COUNT(*) FROM alcaldia_actividades;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alcaldia_actividades LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaActividades> findAlcaldiaActividadesByPagination(int off,
      int size);

}