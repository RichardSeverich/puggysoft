package com.puggysoft.repositories.sales;

import com.puggysoft.entities.sales.EntitySaleReportDetail;
import com.puggysoft.entities.sales.EntitySaleReportTotal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IRepositoryReportTotalDetail extends JpaRepository<EntitySaleReportDetail, String> {

  // Report day
  @Query(value = "SELECT HOUR(sales_products.creation_date) AS identifier, "
      + "SUM(sales_products.quantity) as quantity, "
      + "ROUND(SUM(products.purchase_price * sales_products.quantity), 2) as purchase_price, "
      + "ROUND(SUM(products.sale_price * sales_products.quantity), 2) as sale_price, "
      + "ROUND(SUM((products.sale_price * sales_products.quantity) - (products.purchase_price * sales_products.quantity)), 2) AS profit "
      + "FROM sales_products "
      + "INNER JOIN products ON sales_products.id_product = products.id "
      + "WHERE DATE(sales_products.creation_date) = ?1 "
      + "AND sales_products.tenant = ?2 "
      + "GROUP BY HOUR(sales_products.creation_date)", nativeQuery = true)
  List<EntitySaleReportDetail> getDetailsPerHour(String date, String tenant);

  @Query("SELECT new com.puggysoft.entities.sales.EntitySaleReportTotal("
      + "SUM(sp.quantity), "
      + "ROUND(SUM(p.salePrice * sp.quantity), 2), "
      + "ROUND(SUM((p.salePrice * sp.quantity) - (p.purchasePrice * sp.quantity)), 2)"
      + ") "
      + "FROM EntitySaleProduct sp "
      + "INNER JOIN EntityProduct p ON sp.idProduct = p.id "
      + "WHERE FUNCTION('DATE', sp.creationDate) = FUNCTION('STR_TO_DATE', ?1, '%Y-%m-%d') "
      + "AND sp.tenant = ?2")
  EntitySaleReportTotal getTotalPerDay(String date, String tenant);

  // Report month
  @Query(value = "SELECT DATE(sales_products.creation_date) AS identifier, "
      + "SUM(sales_products.quantity) as quantity, "
      + "ROUND(SUM(products.purchase_price * sales_products.quantity), 2) as purchase_price, "
      + "ROUND(SUM(products.sale_price * sales_products.quantity), 2) as sale_price, "
      + "ROUND(SUM((products.sale_price * sales_products.quantity) - (products.purchase_price * sales_products.quantity)), 2) AS profit "
      + "FROM sales_products "
      + "INNER JOIN products ON sales_products.id_product = products.id "
      + "WHERE DATE_FORMAT(sales_products.creation_date, '%Y-%m') = ?1 "
      + "AND sales_products.tenant = ?2 "
      + "GROUP BY DATE(sales_products.creation_date)", nativeQuery = true)
  List<EntitySaleReportDetail> getDetailsPerDay(String date, String tenant);

  @Query("SELECT new com.puggysoft.entities.sales.EntitySaleReportTotal("
      + "SUM(sp.quantity), "
      + "ROUND(SUM(p.salePrice * sp.quantity), 2), "
      + "ROUND(SUM((p.salePrice * sp.quantity) - (p.purchasePrice * sp.quantity)), 2)"
      + ") "
      + "FROM EntitySaleProduct sp "
      + "INNER JOIN EntityProduct p ON sp.idProduct = p.id "
      + "WHERE FUNCTION('DATE_FORMAT', sp.creationDate, '%Y-%m') = ?1 "
      + "AND sp.tenant = ?2")
  EntitySaleReportTotal getTotalPerMonth(String date, String tenant);

  // Report year
  @Query(value = "SELECT MONTH(sales_products.creation_date) AS identifier, "
      + "SUM(sales_products.quantity) as quantity, "
      + "ROUND(SUM(products.purchase_price * sales_products.quantity), 2) as purchase_price, "
      + "ROUND(SUM(products.sale_price * sales_products.quantity), 2) as sale_price, "
      + "ROUND(SUM((products.sale_price * sales_products.quantity) - (products.purchase_price * sales_products.quantity)), 2) AS profit "
      + "FROM sales_products "
      + "INNER JOIN products ON sales_products.id_product = products.id "
      + "WHERE YEAR(sales_products.creation_date) = ?1 "
      + "AND sales_products.tenant = ?2 "
      + "GROUP BY MONTH(sales_products.creation_date)", nativeQuery = true)
  List<EntitySaleReportDetail> getDetailsPerMonth(Integer date, String tenant);

  @Query("SELECT new com.puggysoft.entities.sales.EntitySaleReportTotal("
      + "SUM(sp.quantity), "
      + "ROUND(SUM(p.salePrice * sp.quantity), 2), "
      + "ROUND(SUM((p.salePrice * sp.quantity) - (p.purchasePrice * sp.quantity)), 2)"
      + ") "
      + "FROM EntitySaleProduct sp "
      + "INNER JOIN EntityProduct p ON sp.idProduct = p.id "
      + "WHERE FUNCTION('YEAR', sp.creationDate) = ?1 "
      + "AND sp.tenant = ?2")
  EntitySaleReportTotal getTotalPerYear(Integer date, String tenant);
}
