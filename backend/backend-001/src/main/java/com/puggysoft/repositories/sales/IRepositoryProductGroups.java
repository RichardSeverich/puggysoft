package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntityProductGroups;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryProductGroups extends JpaRepository<EntityProductGroups, Long> {

  @Query(value = "SELECT COUNT(*) FROM product_groups;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM product_groups LIMIT ?1, ?2", nativeQuery = true)
  List<EntityProductGroups> findProductGroupsByPagination(int off, int size);

}