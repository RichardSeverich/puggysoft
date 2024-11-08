package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntityProductGroupsProducts;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepositoryProductGroupsProduct extends JpaRepository<EntityProductGroupsProducts, Long> {

  @Query(value = "SELECT COUNT(*) FROM product_groups_products;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM product_groups_products LIMIT ?1, ?2", nativeQuery = true)
  List<EntityProductGroupsProducts> findEscuelaNotasMateriasByPagination(int off, int size);

}