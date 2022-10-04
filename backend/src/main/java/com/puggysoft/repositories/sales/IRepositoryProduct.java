package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntityProduct;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryProduct extends JpaRepository<EntityProduct, Long> {

  @Query(value = "SELECT COUNT(*) FROM products;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM products LIMIT ?1, ?2", nativeQuery = true)
  List<EntityProduct> findProductsByPagination(int off, int size);

}