package com.puggysoft.services.sales;

import com.puggysoft.repositories.sales.IRepositorySaleProduct;

import java.time.YearMonth;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


/** Services for get report. */
@Service
public class ServicesSaleReportQuantityMonthByProduct {

  @Autowired
  private IRepositorySaleProduct repositorySaleProduct;

  /** method for retrive. */
  public ResponseEntity<ArrayList<Long>> getReport(
      Integer year,
      Integer month,
      Long idProduct,
      String tenant
  ) {
    YearMonth yearMonthObject = YearMonth.of(year, month);
    int daysInMonth = yearMonthObject.lengthOfMonth();
    ArrayList<Long> arrayDays = new ArrayList<>();
    for (int day = 1; day <= daysInMonth; day++) {
      String date = year + "-" + month + "-" + day;
      Long sumDay = repositorySaleProduct.getQuantityPerDayByProduct(date, idProduct, tenant);
      sumDay = sumDay == null ? 0 : sumDay;
      arrayDays.add(sumDay);
    }
    return ResponseEntity.status(HttpStatus.OK).body(arrayDays);
  }
}