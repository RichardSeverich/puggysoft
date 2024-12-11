package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleReportTotal;
import com.puggysoft.dtos.sales.DtoSaleReportTotalDetailFilter;
import com.puggysoft.services.sales.ServicesSaleReportQuantityAnnual;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportQuantityAnnual {

  @Autowired
  private ServicesSaleReportQuantityAnnual servicesSaleReport;

  /**
  * Returns report.
  */
  @GetMapping(path = "/api/v1/sales-report-annual")
  public ResponseEntity<DtoSaleReportTotal> getReport(
      @RequestParam Integer year,
      @RequestParam String tenant,
      @ModelAttribute DtoSaleReportTotalDetailFilter filter
  ) {
    return servicesSaleReport.getReport(year, tenant, filter);
  }
}