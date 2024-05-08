package com.puggysoft.repositories.escuela;

import com.puggysoft.entities.escuela.EntityEscuelaCursosDocentes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryEscuelaCursosDocentes extends JpaRepository<EntityEscuelaCursosDocentes, Long> {

  @Query(value = "SELECT COUNT(*) FROM escuela_cursos_docentes;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM escuela_cursos_docentes LIMIT ?1, ?2", nativeQuery = true)
  List<EntityEscuelaCursosDocentes> findByPagination(int off, int size);

}
