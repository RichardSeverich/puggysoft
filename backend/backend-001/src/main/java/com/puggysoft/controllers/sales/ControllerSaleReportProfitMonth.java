package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServicesSaleReportProfitMonth;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportProfitMonth {

  @Autowired
  private ServicesSaleReportProfitMonth servicesSaleReportProfitMonth;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report/profit-month")
  public ResponseEntity<ArrayList<Double>> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam String tenant
  ) {
    return servicesSaleReportProfitMonth.getReport(year, month, tenant);
  }
}