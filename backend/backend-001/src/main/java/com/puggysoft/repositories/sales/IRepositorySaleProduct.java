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
      + "WHERE YEAR(creation_date) = ?1 AND MONTH(creation_date) = ?2 "
      + "AND sales_products.tenant = ?3", nativeQuery = true)
  Long getQuantityPerMonth(Integer year, Integer month, String tenant);

  @Query(value = "SELECT SUM(products.sale_price * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND sales_products.tenant = ?3", nativeQuery = true)
  Double getRevenuePerMonth(Integer year, Integer month, String tenant);

  @Query(value = "SELECT "
      + "SUM((products.sale_price - products.purchase_price) * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND sales_products.tenant = ?3", nativeQuery = true)
  Double getProfitPerMonth(Integer year, Integer month, String tenant);

  // REPORTS PER PRODUCT
  @Query(value = "SELECT SUM(quantity)  FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND products.id =?3 "
      + "AND sales_products.tenant = ?4", nativeQuery = true)
  Long getQuantityPerMonthByProduct(Integer year, Integer month, Long idProduct, String tenant);

  @Query(value = "SELECT SUM(products.sale_price * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND products.id =?3 "
      + "AND sales_products.tenant = ?4", nativeQuery = true)
  Double getRevenuePerMonthByProduct(Integer year, Integer month, Long idProduct, String tenant);

  @Query(value = "SELECT "
      + "SUM((products.sale_price - products.purchase_price) * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND MONTH(sales_products.creation_date) = ?2 "
      + "AND products.id =?3 "
      + "AND sales_products.tenant = ?4", nativeQuery = true)
  Double getProfitPerMonthByProduct(Integer year, Integer month, Long idProduct, String tenant);

  // REPORTS BY SPECIFIC DATE
  // Date must be in format: YYYY-MM-DD, for example: 2021-01-28.
  @Query(value = "SELECT SUM(quantity)  FROM sales_products "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND sales_products.tenant = ?2", nativeQuery = true)
  Long getQuantityPerDay(String date, String tenant);

  @Query(value = "SELECT SUM(products.sale_price * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND sales_products.tenant = ?2", nativeQuery = true)
  Double getRevenuePerDay(String date, String tenant);

  @Query(value = "SELECT "
      + "SUM((products.sale_price - products.purchase_price) * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND sales_products.tenant = ?2", nativeQuery = true)
  Double getProfitPerDay(String date, String tenant);

  // REPORTS BY SPECIFIC DATE AND PER PRODUCT
  @Query(value = "SELECT SUM(quantity)  FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND products.id =?2 "
      + "AND sales_products.tenant = ?3", nativeQuery = true)
  Long getQuantityPerDayByProduct(String date, Long idProduct, String tenant);

  @Query(value = "SELECT SUM(products.sale_price * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND products.id =?2 "
      + "AND sales_products.tenant = ?3", nativeQuery = true)
  Double getRevenuePerDayByProduct(String date, Long idProduct, String tenant);

  @Query(value = "SELECT "
      + "SUM((products.sale_price - products.purchase_price) * sales_products.quantity) "
      + "FROM sales_products "
      + "INNER JOIN products ON products.id=sales_products.id_product "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND products.id =?2 "
      + "AND sales_products.tenant = ?3", nativeQuery = true)
  Double getProfitPerDayByProduct(String date, Long idProduct, String tenant);

}