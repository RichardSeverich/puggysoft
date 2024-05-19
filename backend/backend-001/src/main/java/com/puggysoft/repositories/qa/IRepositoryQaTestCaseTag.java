package com.puggysoft.repositories.qa;

import com.puggysoft.entities.qa.EntityQaTestCaseTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryQaTestCaseTag extends JpaRepository<EntityQaTestCaseTag, Long> {

  /*@Query(value = "SELECT COUNT(*) FROM escuela_cursos_estudiantes;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM escuela_cursos_estudiantes LIMIT ?1, ?2", nativeQuery = true)
  List<EntityEscuelaCursosEstudiantes> findEscuelaCursosEstudiantesByPagination(int off, int size);*/

}