package com.puggysoft.repositories.qa;

import com.puggysoft.entities.qa.EntityQaTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRepositoryQaTag extends JpaRepository<EntityQaTag, Long> {

    @Query(value = "SELECT COUNT(*) FROM qa_tags;", nativeQuery = true)
    Long findSize();

    @Query(value = "SELECT * FROM qa_tags LIMIT ?1, ?2", nativeQuery = true)
    List<EntityQaTag> findQaTagByPagination(int off, int size);
}
