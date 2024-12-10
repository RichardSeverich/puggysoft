package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleReportTotal;
import com.puggysoft.dtos.sales.DtoSaleReportTotalDetailFilter;
import com.puggysoft.services.sales.ServicesSaleReportQuantityMonthly;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportQuantityMonthly {

  @Autowired
  private ServicesSaleReportQuantityMonthly servicesSaleReport;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report-monthly")
  public ResponseEntity<DtoSaleReportTotal> getReport(
      @RequestParam Integer year,
      @RequestParam Integer month,
      @RequestParam String tenant,
      @ModelAttribute DtoSaleReportTotalDetailFilter filter
  ) {
    return servicesSaleReport.getReport(year, month, tenant, filter);
  }
}