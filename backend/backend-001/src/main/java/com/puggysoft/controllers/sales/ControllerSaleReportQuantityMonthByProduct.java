package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServicesSaleReportQuantityMonthByProduct;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportQuantityMonthByProduct {

  @Autowired
  private ServicesSaleReportQuantityMonthByProduct servicesSaleReportQuantityMonthByProduct;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report/quantity-month-by-product")
  public ResponseEntity<ArrayList<Long>> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam Long idProduct,
      @RequestParam String tenant
  ) {
    return servicesSaleReportQuantityMonthByProduct.getReport(year, month, idProduct, tenant);
  }
}