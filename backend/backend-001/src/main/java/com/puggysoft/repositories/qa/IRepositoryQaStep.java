package com.puggysoft.repositories.qa;

import com.puggysoft.entities.qa.EntityQaStep;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryQaStep extends JpaRepository<EntityQaStep, Long> {

  @Query(value = "SELECT COUNT(*) FROM qa_steps;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM qa_steps LIMIT ?1, ?2", nativeQuery = true)
  List<EntityQaStep> findQaStepByPagination(int off, int size);
}
