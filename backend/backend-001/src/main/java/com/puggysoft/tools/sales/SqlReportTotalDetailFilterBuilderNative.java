package com.puggysoft.tools.sales;

import com.puggysoft.dtos.sales.DtoSaleReportTotalDetailFilter;

/** Tool class. */
public final class SqlReportTotalDetailFilterBuilderNative {

  private String select;
  private String from;
  private String join;
  private String where;
  private String groupBy;

  /** Constructor. */
  public SqlReportTotalDetailFilterBuilderNative() {
    this.select = "";
    this.from = "";
    this.join = "";
    this.where = "";
    this.groupBy = "";
  }

  public SqlReportTotalDetailFilterBuilderNative setSelect(String select) {
    this.select = select;
    return this;
  }

  public SqlReportTotalDetailFilterBuilderNative setFrom(String from) {
    this.from = from;
    return this;
  }

  public SqlReportTotalDetailFilterBuilderNative setJoin(String join) {
    this.join = join;
    return this;
  }

  public SqlReportTotalDetailFilterBuilderNative setWhere(String where) {
    this.where = where;
    return this;
  }

  public SqlReportTotalDetailFilterBuilderNative setGroupBy(String groupBy) {
    this.groupBy = groupBy;
    return this;
  }

  /** build filter query method. */
  public String build(DtoSaleReportTotalDetailFilter filter) {
    if (filter.productCriteria != null) {
      this.where = this.where + "AND products.id = '" + filter.productCriteria + "' ";
    } else if (filter.groupProductCriteria != null) {
      this.join = this.join + "INNER JOIN product_groups_products AS pgp ON	products.id = pgp.id_product ";
      this.where = this.where + "AND pgp.id_product_group = '" + filter.groupProductCriteria + "' ";
    } else if (filter.clientCriteriar != null) {
      this.join = this.join + "INNER JOIN sales ON sales.id = sp.id_sale ";
      this.where = this.where + "AND sales.client = '" + filter.clientCriteriar + "' ";
    }
    String fullQuery = this.select + this.from + this.join + this.where + this.groupBy;
    return fullQuery;
  }

  /** build filter query method. */
  public String buildJpql(DtoSaleReportTotalDetailFilter filter) {
    if (filter.productCriteria != null) {
      this.where = this.where + "AND products.id = '" + filter.productCriteria + "' ";
    }
    if (filter.groupProductCriteria != null) {
      this.join = this.join + "INNER JOIN EntityProductGroupsProducts AS pgp ON	products.id = pgp.idProduct ";
      this.where = this.where + "AND pgp.idProductGroup = '" + filter.groupProductCriteria + "' ";
    }
    if (filter.clientCriteriar != null) {
      this.join = this.join + "INNER JOIN EntitySale AS sales ON sales.id = sp.idSale ";
      this.where = this.where + "AND sales.client = '" + filter.clientCriteriar + "' ";
    }
    String fullQuery = this.select + this.from + this.join + this.where + this.groupBy;
    return fullQuery;
  }
}
