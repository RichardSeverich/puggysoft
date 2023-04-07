package com.puggysoft.tools;


/** Tool class.*/
public final class TotalPagesCalculator {

  /** Constructor.*/
  private TotalPagesCalculator() {
  }

  /** calculate total pages. */
  public static Long getTotalPages(Long totalRows, Long pageSize) {
    Long totalPages = totalRows / pageSize;
    if (totalRows % pageSize != 0) {
      totalPages = totalPages + 1L;
    }
    return totalPages;
  }
}
