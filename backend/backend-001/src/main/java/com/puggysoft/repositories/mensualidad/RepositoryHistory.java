package com.puggysoft.repositories.mensualidad;

import com.puggysoft.dtos.mensualidad.DtoHistoryByCourse;
import com.puggysoft.dtos.mensualidad.DtoHistoryByStudentAndCourse;
import com.puggysoft.dtos.mensualidad.DtoTotalCuotasCurso;

import java.util.List;

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
        + "p.name AS fee, "
        + "p.sale_price AS amount, "
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

    return entityManager
        .createNativeQuery(sql, "Mapping.HistoryByStudentAndCourse")
        .setParameter("course", course)
        .setParameter("idCourse", idCourse)
        .setParameter("student", student)
        .getResultList();
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
        = "SELECT u.dni AS ci, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%matricula%' THEN p.sale_price ELSE 0 END), 0) AS paid_enrollment, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%colegiatura%' OR LOWER(p.name) LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) AS paid_tuition, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) NOT LIKE '%matricula%' AND LOWER(p.name) NOT LIKE '%colegiatura%' AND LOWER(p.name) "
        + "NOT LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) AS paid_other, "
        + "(:totalMatricula - COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%matricula%' THEN p.sale_price ELSE 0 END), 0)) AS debt_enrollment, "
        + "(:totalColegiatura - COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%colegiatura%' OR LOWER(p.name) LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0)) AS debt_tuition, "
        + "(:totalOtros - COALESCE(SUM(CASE WHEN LOWER(p.name) NOT LIKE '%matricula%' AND LOWER(p.name) NOT LIKE '%colegiatura%' AND LOWER(p.name) "
        + "NOT LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0)) AS debt_other "
        + "FROM users u "
        + "INNER JOIN escuela_cursos_estudiantes ce ON ce.estudiante = u.username "
        + "INNER JOIN escuela_cursos c ON c.short_name = ce.curso "
        + "LEFT JOIN sales s ON s.client = u.username "
        + "AND s.aux = :courseId "
        + "LEFT JOIN sales_products sp ON sp.id_sale = s.id "
        + "LEFT JOIN products p ON p.id = sp.id_product "
        + "WHERE c.short_name = :courseShortName "
        + "GROUP BY u.dni;";

    return entityManager
        .createNativeQuery(sql, "Mapping.HistoryByCourse")
        .setParameter("courseShortName", courseShortName)
        .setParameter("courseId", courseId)
        .setParameter("totalMatricula", totalMatricula)
        .setParameter("totalColegiatura", totalColegiatura)
        .setParameter("totalOtros", totalOtros)
        .getResultList();
  }

  /**
   * @param cursoShortName course.short_name
  */
  public DtoTotalCuotasCurso getTotalCuotas(String cursoShortName) {
    String sql = "SELECT "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%matricula%' THEN p.sale_price ELSE 0 END), 0) AS total_enrollment, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) LIKE '%colegiatura%' OR LOWER(p.name) LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) AS total_tuition, "
        + "COALESCE(SUM(CASE WHEN LOWER(p.name) NOT LIKE '%matricula%' AND LOWER(p.name) NOT LIKE '%colegiatura%' "
        + "AND LOWER(p.name) NOT LIKE '%cuota%' THEN p.sale_price ELSE 0 END), 0) AS total_other "
        + "FROM products p "
        + "INNER JOIN product_groups_products pgp ON pgp.id_product = p.id "
        + "INNER JOIN product_groups pg ON pg.id = pgp.id_product_group "
        + "WHERE pg.aux = :course";

    return (DtoTotalCuotasCurso) entityManager
        .createNativeQuery(sql, "Mapping.TotalCuotasCurso")
        .setParameter("course", cursoShortName)
        .getSingleResult();
  }
}
