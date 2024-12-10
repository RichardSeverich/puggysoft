package com.puggysoft.services.sales;

import com.puggysoft.entities.sales.EntitySaleReportDetail;
import com.puggysoft.entities.sales.EntitySaleReportTotal;
import com.puggysoft.dtos.sales.DtoSaleReportDetail;
import com.puggysoft.dtos.sales.DtoSaleReportTotal;
import com.puggysoft.dtos.sales.DtoSaleReportTotalDetailFilter;
import com.puggysoft.repositories.sales.IRepositoryReportTotalDetail;
import com.puggysoft.tools.sales.SqlReportTotalDetailFilterBuilderNative;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportQuantityDay {

  @Autowired
  private IRepositoryReportTotalDetail repositoryReport;

  @PersistenceContext
  private EntityManager entityManager;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReportTotal> getReport(Integer year, Integer month, Integer day, String tenant, DtoSaleReportTotalDetailFilter filter) {
    String date = year + "-" + month + "-" + day;
    EntitySaleReportTotal entityReportTotalDay;
    List<EntitySaleReportDetail> listEntitiesDetailHours;
    
    if (filter.productCriteria == null && filter.groupProductCriteria == null && filter.clientCriteriar == null ) {
      entityReportTotalDay = repositoryReport.getTotalPerDay(date, tenant);
      listEntitiesDetailHours = repositoryReport.getDetailsPerHour(date, tenant);
    } else {
      // SQL (createNativeQuery)
      SqlReportTotalDetailFilterBuilderNative sqlFilterDetail = new SqlReportTotalDetailFilterBuilderNative();
      sqlFilterDetail.setSelect(
        "SELECT HOUR(sp.creation_date) AS identifier, "
      + "SUM(sp.quantity) as quantity, "
      + "ROUND(SUM(products.purchase_price * sp.quantity), 2) AS purchase_price, "
      + "ROUND(SUM(products.sale_price * sp.quantity), 2) AS sale_price, "
      + "ROUND(SUM((products.sale_price * sp.quantity) - (products.purchase_price * sp.quantity)), 2) AS profit "
      ).setFrom(
        "FROM sales_products AS sp "
      ).setJoin(
        "INNER JOIN products ON sp.id_product = products.id "
      ).setWhere(
        "WHERE DATE(sp.creation_date) = '"
      + date + "' "
      + "AND sp.tenant = '"
      + tenant + "' "
      ).setGroupBy(
        "GROUP BY HOUR(sp.creation_date)"
      );
      String fullQueryDetail = sqlFilterDetail.build(filter);
      Query filterQueryDetail = entityManager.createNativeQuery(fullQueryDetail, EntitySaleReportDetail.class);
      listEntitiesDetailHours = (List<EntitySaleReportDetail>) filterQueryDetail.getResultList();

      // JPQL (createQuery)
      SqlReportTotalDetailFilterBuilderNative sqlFilterTotal = new SqlReportTotalDetailFilterBuilderNative();
      sqlFilterTotal.setSelect(
        "SELECT new com.puggysoft.entities.sales.EntitySaleReportTotal("
      + "SUM(sp.quantity), "
      + "ROUND(SUM(products.salePrice * sp.quantity), 2), "
      + "ROUND(SUM((products.salePrice * sp.quantity) - (products.purchasePrice * sp.quantity)), 2)"
      + ") "
      ).setFrom(
        "FROM EntitySaleProduct sp "
      ).setJoin(
        "INNER JOIN EntityProduct products ON sp.idProduct = products.id "
      ).setWhere(
        "WHERE FUNCTION('DATE', sp.creationDate) = FUNCTION('STR_TO_DATE', '"
        + date + "', '%Y-%m-%d') "
      + "AND sp.tenant = '"
      + tenant + "' "
      );
      String fullQueryTotal = sqlFilterTotal.buildJpql(filter);
      Query filterQueryTotal = entityManager.createQuery(fullQueryTotal, EntitySaleReportTotal.class);
      entityReportTotalDay = (EntitySaleReportTotal) filterQueryTotal.getSingleResult();
    }

    DtoSaleReportTotal dtoReportTotalDay = DtoSaleReportTotal.entityToDto(entityReportTotalDay);
    List<DtoSaleReportDetail> listDtoDetailHours = listEntitiesDetailHours
        .stream()
        .map(DtoSaleReportDetail::entityToDto)
        .collect(Collectors.toList());

    dtoReportTotalDay.details = listDtoDetailHours;

    return ResponseEntity.status(HttpStatus.OK).body(dtoReportTotalDay);
  }
}