package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportProfit {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReport> getReport(Integer year) {
    Double january = repositorySaleProduct.getProfitPerMonth(year, 1);
    Double february = repositorySaleProduct.getProfitPerMonth(year, 2);
    Double march = repositorySaleProduct.getProfitPerMonth(year, 3);
    Double april = repositorySaleProduct.getProfitPerMonth(year, 4);
    Double may = repositorySaleProduct.getProfitPerMonth(year, 5);
    Double june = repositorySaleProduct.getProfitPerMonth(year, 6);
    Double july = repositorySaleProduct.getProfitPerMonth(year, 7);
    Double august = repositorySaleProduct.getProfitPerMonth(year, 8);
    Double september = repositorySaleProduct.getProfitPerMonth(year, 9);
    Double october = repositorySaleProduct.getProfitPerMonth(year, 10);
    Double november = repositorySaleProduct.getProfitPerMonth(year, 11);
    Double december = repositorySaleProduct.getProfitPerMonth(year, 12);
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