package com.puggysoft.services.mensualidad;

import com.puggysoft.dtos.sales.DtoProduct;
import com.puggysoft.dtos.sales.DtoProductFilter;
import com.puggysoft.entities.sales.EntityProduct;
import com.puggysoft.tools.sales.SqlProductFilterBuilderNative;
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
public class ServiceMensualidadCuotaByStudentAndCourseGetFilter {

  @PersistenceContext
  private EntityManager entityManager;

  /** method for filter. */
  public ResponseEntity<List<DtoProduct>> filter(
      String studentUsername,
      Long courseId,
      DtoProductFilter dtoProductFilter,
      int page,
      int size
  ) {
    String query = SqlProductFilterBuilderNative.build(dtoProductFilter);
    int off = page * size;
    List<EntityProduct> listEntities;
    String fullQuery = "SELECT "
        + "products.id as id, "
        + "products.code, "
        + "products.name, "
        + "products.purchase_price, "
        + "products.sale_price, "
        + "products.stock, "
        + "products.description, "
        + "products.image, "
        + "products.bar_code, "
        + "products.location, "
        + "products.minimum_stock, "
        + "products.tenant, "
        + "products.creation_date, "
        + "products.update_date, "
        + "products.created_by, "
        + "products.updated_by "
        + "FROM products "
        + "INNER JOIN product_groups_products "
        + "ON product_groups_products.id_product = products.id "
        + "INNER JOIN product_groups "
        + "ON product_groups.id = product_groups_products.id_product_group "
        + "INNER JOIN escuela_cursos "
        + "ON product_groups.aux = escuela_cursos.short_name "
        + "INNER JOIN escuela_cursos_estudiantes "
        + "ON escuela_cursos_estudiantes.curso = escuela_cursos.short_name "

        + "WHERE escuela_cursos_estudiantes.estudiante = " + "'" + studentUsername + "'"
        + "AND escuela_cursos.id = " + "'" + courseId + "'"

        + "AND products.id NOT IN (SELECT products.id FROM products "
        + "INNER JOIN sales_products "
        + "ON sales_products.id_product = products.id "
        + "INNER JOIN sales "
        + "ON sales_products.id_sale = sales.id "
        + "WHERE sales.client = " + "'" + studentUsername + "'"
        + " AND sales.aux = " + "'" + courseId + "')";
    if (query.isEmpty()) {
      fullQuery = fullQuery
        + " LIMIT " + off + "," + size;
    } else if (!query.isEmpty()) {
      // Delete last 'AND' key workd.
      query = query.substring(0, query.length() - 4);
      fullQuery = fullQuery
        + " AND " + query + " LIMIT " + off + "," + size;
    }
    // JQPL (createQuery) and Native (createNativeQuery)
    Query filterQuery = entityManager.createNativeQuery(fullQuery, EntityProduct.class);
    listEntities = (List<EntityProduct>) filterQuery.getResultList();
    List<DtoProduct> listDtoProduct = listEntities
        .stream()
        .map(DtoProduct::entityToDto)
        .collect(Collectors.toList());
    return ResponseEntity.status(HttpStatus.OK).body(listDtoProduct);
  }

}
