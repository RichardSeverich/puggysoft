package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesActividad;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipalesActividades
    extends JpaRepository<EntityAlcaldiaRecursosMunicipalesActividad, Long> {

  @Query(value = "SELECT COUNT(*) FROM alcaldia_recursos_municipales_actividades;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alcaldia_recursos_municipales_actividades LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesActividad> findAlcaldiaRecursosMunicipalesVentaDetalleByPagination(int off,
      int size);

}