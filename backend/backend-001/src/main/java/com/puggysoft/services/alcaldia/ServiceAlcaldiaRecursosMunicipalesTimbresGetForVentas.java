package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipales;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesTimbresGetForVentas {

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipales>> filter(
      DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipalesFilter) {

    String query = SqlAlcaldiaRecursosMunicipalesFilterBuilderNative.build(dtoAlcaldiaRecursosMunicipalesFilter);
    List<EntityAlcaldiaRecursosMunicipales> listEntities;
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alcaldia_recursos_municipales.* FROM alcaldia_recursos_municipales WHERE "
          + query + " AND alcaldia_recursos_municipales.talonario_final != alcaldia_recursos_municipales.talonario_movimiento ";
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipales.class);
      listEntities = (List<EntityAlcaldiaRecursosMunicipales>) filterQuery.getResultList();
    List<DtoAlcaldiaRecursosMunicipales> listDtoAlcaldiaRecursosMunicipales = listEntities
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoAlcaldiaRecursosMunicipales);
  }

}