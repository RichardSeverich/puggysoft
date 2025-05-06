package com.puggysoft.repositories.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByCourse;
import com.puggysoft.dtos.mensualidad.DtoHistoryByStudentAndCourse;
import com.puggysoft.dtos.mensualidad.DtoTotalCuotasCurso;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class RepositoryHistory {

  @PersistenceContext
  private EntityManager entityManager;

  // history by student-course
  /**
   * @param course course.short_name
   * @param student user.username
   * @param idCourse course.id in sales.aux
  */
  public List<DtoHistoryByStudentAndCourse> byStudentAndCourse(String course, String student, String idCourse) {
    String sql = "SELECT "
        + "p.name, "
        + "p.sale_price, "
        + "sp.creation_date, "
        + "COALESCE(s.status, 'TODO') AS status, "
        + "COALESCE(s.id, 0) AS sale_id, "
        + "p.description "
        + "FROM products p "
        + "INNER JOIN product_groups_products pgp ON pgp.id_product = p.id "
        + "INNER JOIN product_groups pg ON pg.id = pgp.id_product_group "
        + "LEFT JOIN ( "
        + "  SELECT sp.* "
        + "  FROM sales_products sp "
        + "  INNER JOIN sales s ON s.id = sp.id_sale "
        + "  WHERE s.aux = :idCourse "
        + "    AND s.client = :student "
        + ") sp ON sp.id_product = p.id "
        + "LEFT JOIN sales s ON s.id = sp.id_sale "
        + "WHERE pg.name = :course ;";

    List<Object[]> listResults = entityManager.createNativeQuery(sql)
        .setParameter("course", course)
        .setParameter("idCourse", idCourse)
        .setParameter("student", student)
        .getResultList();

    List<DtoHistoryByStudentAndCourse> dtos = listResults.stream()
        .map(row -> new DtoHistoryByStudentAndCourse(
          (String) row[0],
          (Double) row[1],
          (Date) row[2],
          (String) row[3],
          ((Number) row[4]).longValue(),
          (String) row[5]
        ))
        .collect(Collectors.toList());
    return dtos;
  }

  // history by course
  /**
   * @param courseShortName course.short_name
   * @param courseId course.id in sales.aux
   * @param totalMatricula total matricula
   * @param totalColegiatura total colegiatura
   * @param totalOtros total otros
  */
  public List<DtoHistoryByCourse> byCourse(String courseShortName, String courseId, Double totalMatricula, Double totalColegiatura, Double totalOtros) {
    String sql
        = "SELECT u.dni, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%matricula%' THEN p.sale_price ELSE 0 END), 0) AS suma_matricula, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%colegiatura%' OR LOWER(p.name) LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) AS suma_colegiatura, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) NOT LIKE '%matricula%' AND LOWER(p.name) NOT LIKE '%colegiatura%' AND LOWER(p.name) "
        + "NOT LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) AS suma_otros, "
        + "(:totalMatricula - COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%matricula%' THEN p.sale_price ELSE 0 END), 0)) AS debt_matricula, "
        + "(:totalColegiatura - COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%colegiatura%' OR LOWER(p.name) LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0)) AS debt_colegiatura, "
        + "(:totalOtros - COALESCE(SUM(CASE WHEN LOWER(p.name) NOT LIKE '%matricula%' AND LOWER(p.name) NOT LIKE '%colegiatura%' AND LOWER(p.name) "
        + "NOT LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0)) AS debt_otros "
        + "FROM users u "
        + "INNER JOIN escuela_cursos_estudiantes ce ON ce.estudiante = u.username "
        + "INNER JOIN escuela_cursos c ON c.short_name = ce.curso "
        + "LEFT JOIN sales s ON s.client = u.username "
        + "AND s.aux = :courseId "
        + "LEFT JOIN sales_products sp ON sp.id_sale = s.id "
        + "LEFT JOIN products p ON p.id = sp.id_product "
        + "WHERE c.short_name = :courseShortName "
        + "GROUP BY u.dni;";
    List<Object[]> listResults = entityManager.createNativeQuery(sql)
        .setParameter("courseShortName", courseShortName)
        .setParameter("courseId", courseId)
        .setParameter("totalMatricula", totalMatricula)
        .setParameter("totalColegiatura", totalColegiatura)
        .setParameter("totalOtros", totalOtros)
        .getResultList();

    List<DtoHistoryByCourse> dtos = listResults.stream()
        .map(row -> new DtoHistoryByCourse(
            (String) row[0],
            ((Number) row[1]).doubleValue(),
            ((Number) row[2]).doubleValue(),
            ((Number) row[3]).doubleValue(),
            ((Number) row[4]).doubleValue(),
            ((Number) row[5]).doubleValue(),
            ((Number) row[6]).doubleValue()
        ))
        .collect(Collectors.toList());
    return dtos;
  }

  /**
   * @param cursoShortName course.short_name
  */
  public DtoTotalCuotasCurso getTotalCuotas(String cursoShortName) {
    String fullQuery = "SELECT "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%matricula%' THEN p.sale_price ELSE 0 END), 0), "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%colegiatura%' OR LOWER(p.name) LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0), "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) NOT LIKE '%matricula%' AND LOWER(p.name) NOT LIKE '%colegiatura%' AND LOWER(p.name) NOT LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) "
        + "FROM products p "
        + "INNER JOIN product_groups_products pgp ON pgp.id_product = p.id "
        + "INNER JOIN product_groups pg ON pg.id = pgp.id_product_group "
        + "WHERE pg.aux = :course";

    Object[] result = (Object[]) entityManager
        .createNativeQuery(fullQuery)
        .setParameter("course", cursoShortName)
        .getSingleResult();

    Double totalMatricula = ((Number) result[0]).doubleValue();
    Double totalColegiatura = ((Number) result[1]).doubleValue();
    Double totalOtros = ((Number) result[2]).doubleValue();

    return new DtoTotalCuotasCurso(totalMatricula, totalColegiatura, totalOtros);
  }
}
