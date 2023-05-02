package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportRevenueByProduct {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReport> getReport(Integer year, Long idProduct, String tenant) {
    Double january = repositorySaleProduct.getRevenuePerMonthByProduct(year, 1, idProduct, tenant);
    Double february = repositorySaleProduct.getRevenuePerMonthByProduct(year, 2, idProduct, tenant);
    Double march = repositorySaleProduct.getRevenuePerMonthByProduct(year, 3, idProduct, tenant);
    Double april = repositorySaleProduct.getRevenuePerMonthByProduct(year, 4, idProduct, tenant);
    Double may = repositorySaleProduct.getRevenuePerMonthByProduct(year, 5, idProduct, tenant);
    Double june = repositorySaleProduct.getRevenuePerMonthByProduct(year, 6, idProduct, tenant);
    Double july = repositorySaleProduct.getRevenuePerMonthByProduct(year, 7, idProduct, tenant);
    Double august = repositorySaleProduct.getRevenuePerMonthByProduct(year, 8, idProduct, tenant);
    Double september = repositorySaleProduct.getRevenuePerMonthByProduct(year, 9, idProduct, tenant);
    Double october = repositorySaleProduct.getRevenuePerMonthByProduct(year, 10, idProduct, tenant);
    Double november = repositorySaleProduct.getRevenuePerMonthByProduct(year, 11, idProduct, tenant);
    Double december = repositorySaleProduct.getRevenuePerMonthByProduct(year, 12, idProduct, tenant);
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