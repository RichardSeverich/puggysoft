package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipales;
import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesFilter;
import com.puggysoft.entities.alcaldia.EntityAlcaldiaRecursosMunicipales;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipales;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesFilterBuilderNative;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for filter. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesHijoByPadreIdGetFilter {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipales repositoryAlcaldiaRecursosMunicipales;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  @SuppressWarnings(value = "unchecked")

  public ResponseEntity<List<DtoAlcaldiaRecursosMunicipales>> filter(
      DtoAlcaldiaRecursosMunicipalesFilter dtoAlcaldiaRecursosMunicipalesFilter, int page, int size, Long idPadre) {

    String query = SqlAlcaldiaRecursosMunicipalesFilterBuilderNative.build(dtoAlcaldiaRecursosMunicipalesFilter);
    int off = page * size;
    List<EntityAlcaldiaRecursosMunicipales> listEntities;
    if (query.equals("")) {
      listEntities = repositoryAlcaldiaRecursosMunicipales.findAlcaldiaRecursosMunicipalesHijoByPadreId(off, size, idPadre);
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT alcaldia_recursos_municipales_grupo_para_reportes.id AS id, "
      + "alcaldia_recursos_municipales.codigo, "
      + "alcaldia_recursos_municipales.codigo_auxiliar, "
      + "alcaldia_recursos_municipales.name, "
      + "alcaldia_recursos_municipales.precio, "
      + "alcaldia_recursos_municipales.tipo, "
      + "alcaldia_recursos_municipales.tenant, "
      + "alcaldia_recursos_municipales.talonario_movimiento, "
      + "alcaldia_recursos_municipales.talonario_inicio, "
      + "alcaldia_recursos_municipales.talonario_final, "
      + "alcaldia_recursos_municipales.creation_date, "
      + "alcaldia_recursos_municipales.update_date, "
      + "alcaldia_recursos_municipales.created_by, "
      + "alcaldia_recursos_municipales.updated_by "
      + "FROM alcaldia_recursos_municipales "
      + "INNER JOIN alcaldia_recursos_municipales_grupo_para_reportes ON alcaldia_recursos_municipales.id=alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_hijo "
      + "WHERE alcaldia_recursos_municipales_grupo_para_reportes.id_recurso_municipal_padre = " + idPadre + " AND " + query + " LIMIT " + off + "," + size;
      // JQPL (createQuery) and Native (createNativeQuery)
      Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityAlcaldiaRecursosMunicipales.class);
      listEntities = (List<EntityAlcaldiaRecursosMunicipales>) filterQuery.getResultList();
    }
    List<DtoAlcaldiaRecursosMunicipales> listDtoAlcaldiaRecursosMunicipales = listEntities
        .stream()
        .map(DtoAlcaldiaRecursosMunicipales::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoAlcaldiaRecursosMunicipales);
  }

}