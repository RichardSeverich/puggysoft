import i18n from "../../i18n/i18n";

export const filterReportDetail = {
  label: "",
  product: false,
  groupProduct: false,
  client: false,
  clientProduct: false,
  clientGroupProduct: false,
}

// state of generate pdf
const NONE = "NONE";
const GET_DATA = "GET_DATA";
const GENERATING = "GENERATING";

export const enumPdfStatus = {
  NONE,
  GET_DATA,
  GENERATING,
};

export const detailTemplate = {
  identifier: "0",
  quantity: 0,
  purchasePrice: 0,
  salePrice: 0,
  profit: 0
}

export const headerTable = [
  { header: 'Cantidad', dataKey: 'quantity' },
  { header: 'Costos', dataKey: 'purchasePrice' },
  { header: 'Ingresos', dataKey: 'salePrice' },
  { header: 'Ganancias', dataKey: 'profit' },
]

export const headerTableDaily = [
  { header: i18n.reportDetailPdf.hora, dataKey: 'identifier' },
  ...headerTable
]

export const headerTableMonthly = [
  { header: i18n.reportDetailPdf.day, dataKey: 'identifier' },
  ...headerTable
]

export const headerTableYear = [
  { header: i18n.reportDetailPdf.mes, dataKey: 'identifier' },
  ...headerTable
]