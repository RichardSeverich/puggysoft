package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntityProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryProduct extends JpaRepository<EntityProduct, Long> {

  @Query(value = "SELECT COUNT(*) FROM products;", nativeQuery = true)
  Long findSize();

}