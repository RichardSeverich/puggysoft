package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.repositories.sales.IRepositorySaleProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportProfitByProduct {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<DtoSaleReport> getReport(Integer year, Long idProduct, String tenant) {
    Double january = repositorySaleProduct.getProfitPerMonthByProduct(year, 1, idProduct, tenant);
    Double february = repositorySaleProduct.getProfitPerMonthByProduct(year, 2, idProduct, tenant);
    Double march = repositorySaleProduct.getProfitPerMonthByProduct(year, 3, idProduct, tenant);
    Double april = repositorySaleProduct.getProfitPerMonthByProduct(year, 4, idProduct, tenant);
    Double may = repositorySaleProduct.getProfitPerMonthByProduct(year, 5, idProduct, tenant);
    Double june = repositorySaleProduct.getProfitPerMonthByProduct(year, 6, idProduct, tenant);
    Double july = repositorySaleProduct.getProfitPerMonthByProduct(year, 7, idProduct, tenant);
    Double august = repositorySaleProduct.getProfitPerMonthByProduct(year, 8, idProduct, tenant);
    Double september = repositorySaleProduct.getProfitPerMonthByProduct(year, 9, idProduct, tenant);
    Double october = repositorySaleProduct.getProfitPerMonthByProduct(year, 10, idProduct, tenant);
    Double november = repositorySaleProduct.getProfitPerMonthByProduct(year, 11, idProduct, tenant);
    Double december = repositorySaleProduct.getProfitPerMonthByProduct(year, 12, idProduct, tenant);
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