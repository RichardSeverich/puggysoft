package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportQuantity {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReport> getReport(Integer year, String tenant) {
    Long january = repositorySaleProduct.getQuantityPerMonth(year, 1, tenant);
    Long february = repositorySaleProduct.getQuantityPerMonth(year, 2, tenant);
    Long march = repositorySaleProduct.getQuantityPerMonth(year, 3, tenant);
    Long april = repositorySaleProduct.getQuantityPerMonth(year, 4, tenant);
    Long may = repositorySaleProduct.getQuantityPerMonth(year, 5, tenant);
    Long june = repositorySaleProduct.getQuantityPerMonth(year, 6, tenant);
    Long july = repositorySaleProduct.getQuantityPerMonth(year, 7, tenant);
    Long august = repositorySaleProduct.getQuantityPerMonth(year, 8, tenant);
    Long september = repositorySaleProduct.getQuantityPerMonth(year, 9, tenant);
    Long october = repositorySaleProduct.getQuantityPerMonth(year, 10, tenant);
    Long november = repositorySaleProduct.getQuantityPerMonth(year, 11, tenant);
    Long december = repositorySaleProduct.getQuantityPerMonth(year, 12, tenant);
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