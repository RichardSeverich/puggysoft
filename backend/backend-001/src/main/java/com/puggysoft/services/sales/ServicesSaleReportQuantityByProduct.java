package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportQuantityByProduct {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReport> getReport(Integer year, Long idProduct, String tenant) {
    Long january = repositorySaleProduct.getQuantityPerMonthByProduct(year, 1, idProduct, tenant);
    Long february = repositorySaleProduct.getQuantityPerMonthByProduct(year, 2, idProduct, tenant);
    Long march = repositorySaleProduct.getQuantityPerMonthByProduct(year, 3, idProduct, tenant);
    Long april = repositorySaleProduct.getQuantityPerMonthByProduct(year, 4, idProduct, tenant);
    Long may = repositorySaleProduct.getQuantityPerMonthByProduct(year, 5, idProduct, tenant);
    Long june = repositorySaleProduct.getQuantityPerMonthByProduct(year, 6, idProduct, tenant);
    Long july = repositorySaleProduct.getQuantityPerMonthByProduct(year, 7, idProduct, tenant);
    Long august = repositorySaleProduct.getQuantityPerMonthByProduct(year, 8, idProduct, tenant);
    Long september = repositorySaleProduct.getQuantityPerMonthByProduct(year, 9, idProduct, tenant);
    Long october = repositorySaleProduct.getQuantityPerMonthByProduct(year, 10, idProduct, tenant);
    Long november = repositorySaleProduct.getQuantityPerMonthByProduct(year, 11, idProduct, tenant);
    Long december = repositorySaleProduct.getQuantityPerMonthByProduct(year, 12, idProduct, tenant);
    january = january == null ? 0 : january;
    february = february == null ? 0 : february;
    march = march == null ? 0 : march;
    april = april == null ? 0 : april;
    may = may == null ? 0 : may;
    june = june == null ? 0 : june;
    july = july == null ? 0 : july;
    august = august == null ? 0 : august;
    september = september == null ? 0 : september;
    october = october == null ? 0 : october;
    november = november == null ? 0 : november;
    december = december == null ? 0 : december;
    DtoSaleReport dtoSaleReport = new DtoSaleReport();
    dtoSaleReport.setJanuary(january.doubleValue());
    dtoSaleReport.setFebruary(february.doubleValue());
    dtoSaleReport.setMarch(march.doubleValue());
    dtoSaleReport.setApril(april.doubleValue());
    dtoSaleReport.setMay(may.doubleValue());
    dtoSaleReport.setJune(june.doubleValue());
    dtoSaleReport.setJuly(july.doubleValue());
    dtoSaleReport.setAugust(august.doubleValue());
    dtoSaleReport.setSeptember(september.doubleValue());
    dtoSaleReport.setOctober(october.doubleValue());
    dtoSaleReport.setNovember(november.doubleValue());
    dtoSaleReport.setDecember(december.doubleValue());
    return ResponseEntity.status(HttpStatus.OK).body(dtoSaleReport);
  }
}