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

  @Query(value = "SELECT "
      + "sales_products.id, "
      + "sales_products.quantity as stock, "
      + "products.code, "
      + "products.name, "
      + "products.purchase_price, "
      + "products.sale_price, "
      + "products.minimum_stock, "
      + "products.image, "
      + "products.description, "
      + "products.image, "
      + "products.bar_code, "
      + "products.location, "
      + "products.created_by, "
      + "products.creation_date, "
      + "products.updated_by, "
      + "products.update_date "
      + "FROM products "
      + "INNER JOIN sales_products ON products.id=sales_products.id_product "
      + "INNER JOIN sales ON sales.id=sales_products.id_sale "
      + "WHERE sales.id = ?3 LIMIT ?1, ?2", nativeQuery = true)
  List<EntityProduct> findProductsBelongToSaleByPagination(int off, int size, Long saleId);

  @Query(value = "SELECT COUNT(*) FROM products "
      + "INNER JOIN sales_products ON products.id=sales_products.id_product "
      + "INNER JOIN sales ON sales.id=sales_products.id_sale "
      + "WHERE sales.id = ?1", nativeQuery = true)
  Long findSizeProductsBelongToSale(Long saleId);

}