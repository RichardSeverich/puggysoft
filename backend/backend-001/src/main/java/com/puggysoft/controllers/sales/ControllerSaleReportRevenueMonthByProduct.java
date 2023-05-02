package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServicesSaleReportRevenueMonthByProduct;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportRevenueMonthByProduct {

  @Autowired
  private ServicesSaleReportRevenueMonthByProduct servicesSaleReportRevenueMonthByProduct;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report/revenue-month-by-product")
  public ResponseEntity<ArrayList<Double>> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam Long idProduct,
      @RequestParam String tenant
  ) {
    return servicesSaleReportRevenueMonthByProduct.getReport(year, month, idProduct, tenant);
  }
}