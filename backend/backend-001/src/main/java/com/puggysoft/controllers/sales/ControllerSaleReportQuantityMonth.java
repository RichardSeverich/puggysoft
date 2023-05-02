package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServicesSaleReportQuantityMonth;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportQuantityMonth {

  @Autowired
  private ServicesSaleReportQuantityMonth servicesSaleReportQuantityMonth;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report/quantity-month")
  public ResponseEntity<ArrayList<Long>> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam String tenant
  ) {
    return servicesSaleReportQuantityMonth.getReport(year, month, tenant);
  }
}