package com.puggysoft.controllers.sales;

import com.puggysoft.dtos.sales.DtoSaleReport;
import com.puggysoft.services.sales.ServicesSaleReportProfitByProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ControllerSaleReportProfitByProduct {

  @Autowired
  private ServicesSaleReportProfitByProduct servicesSaleReportProfitByProduct;

  /**
  * Returns the profit of a product sold, divided by month of the selected year.
  */
  @GetMapping(path = "/api/v1/sales-report/profit-by-product")
  public ResponseEntity<DtoSaleReport> getReport(
      @RequestParam Integer year,
      @RequestParam Long idProduct,
      @RequestParam String tenant
  ) {
    return servicesSaleReportProfitByProduct.getReport(year, idProduct, tenant);
  }
}