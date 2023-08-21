package com.puggysoft.services.alcaldia;

import com.puggysoft.dtos.alcaldia.DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter;
import com.puggysoft.repositories.alcaldia.IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados;
import com.puggysoft.support.TotalPagesCalculator;
import com.puggysoft.tools.alcaldia.SqlAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilterBuilderNative;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for get size. */
@Service
public class ServiceAlcaldiaRecursosMunicipalesTimbresDescontinuadosGetFilterSize {

  @Autowired
  private IRepositoryAlcaldiaRecursosMunicipalesTimbresDescontinuados repository;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for get size. */
  public ResponseEntity<Long> getSize(DtoAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilter dtoFilter,
      Long pageSize) {

    String query = SqlAlcaldiaRecursosMunicipalesTimbresDescontinuadosFilterBuilderNative.build(dtoFilter);
    Long totalRows = 0L;
    if (query.equals("")) {
      totalRows = repository.findSize();
    } else {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      String fullQuery = "SELECT COUNT(*) FROM alcaldia_timbres_descontinuados WHERE " + query;
      Query filterQuery = entityManager.createNativeQuery(fullQuery);
      totalRows = Long.valueOf(filterQuery.getSingleResult().toString());
    }
    Long totalPages = TotalPagesCalculator.getTotalPages(totalRows, pageSize);
    return ResponseEntity.status(HttpStatus.OK).body(totalPages);
  }

}
