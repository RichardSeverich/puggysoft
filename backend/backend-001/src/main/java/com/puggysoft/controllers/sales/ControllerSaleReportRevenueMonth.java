package com.puggysoft.controllers.sales;

import com.puggysoft.services.sales.ServicesSaleReportRevenueMonth;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportRevenueMonth {

  @Autowired
  private ServicesSaleReportRevenueMonth servicesSaleReportRevenueMonth;

  /**
  * Returns report.
  */
  // api/v1/sales-report/revenue-month?roleName=doctor
  @GetMapping(path = "/api/v1/sales-report/revenue-month")
  public ResponseEntity<ArrayList<Double>> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam String tenant
  ) {
    return servicesSaleReportRevenueMonth.getReport(year, month, tenant);
  }
}