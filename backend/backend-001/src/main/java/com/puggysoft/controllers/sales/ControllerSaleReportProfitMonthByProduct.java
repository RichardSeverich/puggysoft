package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServicesSaleReportProfitMonthByProduct;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportProfitMonthByProduct {

  @Autowired
  private ServicesSaleReportProfitMonthByProduct servicesSaleReportProfitMonthByProduct;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report/profit-month-by-product")
  public ResponseEntity<ArrayList<Double>> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam Long idProduct,
      @RequestParam String tenant
  ) {
    return servicesSaleReportProfitMonthByProduct.getReport(year, month, idProduct, tenant);
  }
}