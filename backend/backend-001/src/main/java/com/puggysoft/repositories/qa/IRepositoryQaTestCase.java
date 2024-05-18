package com.puggysoft.repositories.qa;

import com.puggysoft.entities.qa.EntityQaTestCase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryQaTestCase extends JpaRepository<EntityQaTestCase, Long> {

    @Query(value = "SELECT COUNT(*) FROM qa_test_cases;", nativeQuery = true)
    Long findSize();

    @Query(value = "SELECT * FROM qa_test_cases LIMIT ?1, ?2", nativeQuery = true)
    List<EntityQaTestCase> findQaTestCaseByPagination(int off, int size);
}
