package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntitySaleProduct;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositorySaleProduct extends JpaRepository<EntitySaleProduct, Long> {

  @Query(value = "SELECT * FROM sales_products WHERE id_sale = ?1", nativeQuery = true)
  List<EntitySaleProduct> findSalesProductsBySaleId(Long idSale);

  @Query(value = "SELECT * FROM sales_products WHERE id_product = ?1", nativeQuery = true)
  List<EntitySaleProduct> findSalesProductsByProductId(Long idProduct);

}