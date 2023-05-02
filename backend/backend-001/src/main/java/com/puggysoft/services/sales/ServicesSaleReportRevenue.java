package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportRevenue {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReport> getReport(Integer year, String tenant) {
    Double january = repositorySaleProduct.getRevenuePerMonth(year, 1, tenant);
    Double february = repositorySaleProduct.getRevenuePerMonth(year, 2, tenant);
    Double march = repositorySaleProduct.getRevenuePerMonth(year, 3, tenant);
    Double april = repositorySaleProduct.getRevenuePerMonth(year, 4, tenant);
    Double may = repositorySaleProduct.getRevenuePerMonth(year, 5, tenant);
    Double june = repositorySaleProduct.getRevenuePerMonth(year, 6, tenant);
    Double july = repositorySaleProduct.getRevenuePerMonth(year, 7, tenant);
    Double august = repositorySaleProduct.getRevenuePerMonth(year, 8, tenant);
    Double september = repositorySaleProduct.getRevenuePerMonth(year, 9, tenant);
    Double october = repositorySaleProduct.getRevenuePerMonth(year, 10, tenant);
    Double november = repositorySaleProduct.getRevenuePerMonth(year, 11, tenant);
    Double december = repositorySaleProduct.getRevenuePerMonth(year, 12, tenant);
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
    dtoSaleReport.setJanuary(january);
    dtoSaleReport.setFebruary(february);
    dtoSaleReport.setMarch(march);
    dtoSaleReport.setApril(april);
    dtoSaleReport.setMay(may);
    dtoSaleReport.setJune(june);
    dtoSaleReport.setJuly(july);
    dtoSaleReport.setAugust(august);
    dtoSaleReport.setSeptember(september);
    dtoSaleReport.setOctober(october);
    dtoSaleReport.setNovember(november);
    dtoSaleReport.setDecember(december);
    return ResponseEntity.status(HttpStatus.OK).body(dtoSaleReport);
  }
}