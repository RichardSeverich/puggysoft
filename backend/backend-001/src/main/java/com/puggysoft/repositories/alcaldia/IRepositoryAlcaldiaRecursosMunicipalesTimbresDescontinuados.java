package com.puggysoft.repositories.alcaldia;

import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados
    extends JpaRepository<EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados, Long> {

  @Query(value = "SELECT COUNT(*) FROM alcaldia_timbres_descontinuados;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM alcaldia_timbres_descontinuados  ORDER BY id DESC LIMIT ?1, ?2", nativeQuery = true)
  List<EntityAlcaldiaRecursosMunicipalesTimbresDescontinuados> findAlcaldiaRecursosMunicipalesTimbresDescontinuadosByPagination(int off,
      int size);

}