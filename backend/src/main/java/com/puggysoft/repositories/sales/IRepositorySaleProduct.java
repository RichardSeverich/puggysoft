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

  // REPORTS GENERIC
  @Query(value = "SELECT SUM(quantity)  FROM sales_products "
      + "WHERE YEAR(creation_date) = ?1 AND MONTH(creation_date) = ?2", nativeQuery = true)
  Long getQuantityPerMonth(Integer year, Integer month);

  @Query(value = "SELECT SUM(products.sale_price * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2", nativeQuery = true)
  Double getRevenuePerMonth(Integer year, Integer month);

  @Query(value = "SELECT "
      + "SUM((products.sale_price - products.purchase_price) * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2", nativeQuery = true)
  Double getProfitPerMonth(Integer year, Integer month);

  // REPORTS PER PRODUCT
  @Query(value = "SELECT SUM(quantity)  FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND products.id =?3", nativeQuery = true)
  Long getQuantityPerMonthByProduct(Integer year, Integer month, Long idProduct);

  @Query(value = "SELECT SUM(products.sale_price * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND products.id =?3", nativeQuery = true)
  Double getRevenuePerMonthByProduct(Integer year, Integer month, Long idProduct);

  @Query(value = "SELECT "
      + "SUM((products.sale_price - products.purchase_price) * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND products.id =?3", nativeQuery = true)
  Double getProfitPerMonthByProduct(Integer year, Integer month, Long idProduct);

}