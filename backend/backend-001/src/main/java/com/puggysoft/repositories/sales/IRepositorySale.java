package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntitySale;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositorySale extends JpaRepository<EntitySale, Long> {

  @Query(value = "SELECT COUNT(*) FROM sales;", nativeQuery = true)
  Long findSize();

  @Query(value = "SELECT * FROM sales LIMIT ?1, ?2", nativeQuery = true)
  List<EntitySale> findSalesByPagination(int off, int size);

}