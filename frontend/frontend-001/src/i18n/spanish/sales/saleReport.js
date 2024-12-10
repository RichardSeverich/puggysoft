
const infoInit = "Este reporte muestra";
const infoCompareAnnual = "estos estan dividios por meses, tambien tiene la opcion de comparar 2 años.";
const infoCompareMonthly = "estos estan dividios por dias, tambien tiene la opcion de comparar 2 meses.";
const infoDetail = "la cantidad de articulos vendidos, ingresos, ganancias y el costo de compra y venta "
    + "del producto dependiendo el filtro que seleccione, ";
const saleReport = {
  productName: "Nombre Producto",
  infoReportDailyDetail: infoInit + infoDetail + "de un dia",
  infoReportMonthlyDetail: infoInit + infoDetail + "de un mes",
  infoReportAnnualDetail: infoInit + infoDetail + "de un año",
  infoReportQuantityAnnual: infoInit + " la cantidad total de todos los productos vendidos en un año, " + infoCompareAnnual,
  infoReportQuantityMonth: infoInit + " la cantidad total de todos los productos vendidos en un mes, " + infoCompareMonthly,
  infoReportRevenueAnnual: infoInit + " los ingresos totales de todos los productos vendidos en un año, " + infoCompareAnnual,
  infoReportRevenueMonth: infoInit + " los ingresos totales de todos los productos vendidos en un mes, " + infoCompareMonthly,
  infoReportProfitAnnual: infoInit + " las ganancias totales de todos los productos vendidos en un año, " + infoCompareAnnual,
  infoReportProfitMonth: infoInit + " las ganancias totales de todos los productos vendidos en un mes, " + infoCompareMonthly,
  infoReportQuantityPerProduct: infoInit + " la cantidad total vendida de un solo producto en un año, " + infoCompareAnnual,
  infoReportQuantityMonthPerProduct: infoInit + " la cantidad total vendida de un solo producto en un mes, " + infoCompareMonthly,
  infoReportRevenuePerProduct: infoInit + " los ingresos totales de un solo producto vendido en un año, " + infoCompareAnnual,
  infoReportRevenueMonthPerProduct: infoInit + " los ingresos totales de un solo producto vendido en un mes, " + infoCompareMonthly,
  infoReportProfitPerProduct: infoInit + " las ganancias totales de un solo producto vendido en un año, " + infoCompareAnnual,
  infoReportProfitMonthPerProduct: infoInit + " las ganancias totales de un solo producto vendido en un mes, " + infoCompareMonthly,
  without: "Sin filtro",
  product: "Producto",
  groupProduct: "Categoria",
  client: "Cliente",
  clientProduct: "Cliente y producto",
  clientGroupProduct: "Cliente y categoria",
  buttonGetData: "Obteniendo datos...",
  buttonGenerating: "Generando",
  buttonGenerate: "Generar",
};

export default saleReport;
