package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.services.sales.ServicesSaleReportQuantity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportQuantity {

  @Autowired
  private ServicesSaleReportQuantity servicesSaleReportQuantity;

  /**
  * Returns the quantity of all products sold, divided by month of the selected year.
  */
  @GetMapping(path = "/api/v1/sales-report/quantity")
  public ResponseEntity<DtoSaleReport> getReport(
      @RequestParam Integer year,
      @RequestParam String tenant
  ) {
    return servicesSaleReportQuantity.getReport(year, tenant);
  }
}