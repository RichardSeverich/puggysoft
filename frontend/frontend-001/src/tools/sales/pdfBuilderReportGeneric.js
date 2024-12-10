import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable"
import appUrlConfig from "../appUrlConfig";
import {
  enumPdfStatus,
  headerTableDaily,
  headerTableMonthly,
  headerTableYear,
} from "../../models/sales/reportDetail";
import DateFormat from "../dateFormat";
import i18n from "../../i18n/i18n";
import completeData from "./completeDataRow";

const fileName = "tenant-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const GeneratePdf = async (data, setStateGenerate, config) => {
  const tenantImage = window.sessionStorage.getItem("tenantImage");
  let image;
  if (tenantImage !== null) {
    image = `data:image/jpeg;base64,${tenantImage}`;
  } else {
    image = `${imageUrl}/${fileName}`;
  }

  const doc = new jsPDF({
    format: "letter",
    unit: "px"
  });

  doc.addImage(image, "JPEG", 400, 20, 30, 30);

  const body = completeData(data.details, config.typeDate, config.date);

  doc.setFontSize(15);
  const widthTitle = doc.getStringUnitWidth(i18n.reportDetailPdf.titleDaily) * doc.internal.getFontSize() / doc.internal.scaleFactor;
  const posXTitle = (doc.internal.pageSize.width - widthTitle) / 2;
  doc.text(i18n.reportDetailPdf.titleDaily, posXTitle, 17);

  doc.setFontSize(10);
  detailsPdf(config.optionGetData)(doc, config);

  doc.text(i18n.reportDetailPdf.fecha, 395, 10);
  doc.text(DateFormat.optionFormDate(config.date, config.typeDate), 418, 10);

  doc.text(i18n.reportDetailPdf.totalAmountOfProductsSold, 34, 32);
  doc.text(data.totalAmountOfProductsSold?.toString() || "0", 161, 32);

  doc.text(i18n.reportDetailPdf.totalRevenue, 34, 42);
  doc.text(data.totalRevenue?.toString() || "0", 92, 42);

  doc.text(i18n.reportDetailPdf.totalProfits, 34, 52);
  doc.text(data.totalProfits?.toString() || "0", 99, 52);

  let headear = [...headerTableDaily]
  if (config.typeDate === "month") {
    headear = [...headerTableMonthly]
  } else if (config.typeDate === "year") {
    headear = [...headerTableYear]
  }

  autoTable(doc, {
    theme: "striped",
    margin: { top: 60 },
    headStyles: { fontSize: 10 },
    bodyStyles: { fontSize: 9 },
    body: body,
    columns: headear,
  })
  setStateGenerate(enumPdfStatus.NONE)
  doc.output("dataurlnewwindow");
};

function detailsPdf(type) {
  const detailsFor = {
    without: () => {},
    product: (doc, config) => {
      doc.text(`${i18n.reportDetailPdf.product}: ${config.product.name}`, 210, 32);
      doc.text(`${i18n.reportDetailPdf.buyIn} Bs.${config.product.purchasePrice}     ${i18n.reportDetailPdf.sellIn} Bs.${config.product.salePrice}`, 210, 42);
    },
    groupProduct: (doc, config) => {
      doc.text(`${i18n.reportDetailPdf.groupProduct}: ${config.groupProduct.name}`, 210, 32);
    },
    client: (doc, config) => {
      doc.text(`${i18n.reportDetailPdf.client}: ${config.client.name}`, 210, 32);
    },
    clientProduct: (doc, config) => {
      doc.text(`${i18n.reportDetailPdf.product}: ${config.product.name}`, 210, 32);
      doc.text(`${i18n.reportDetailPdf.buyIn} Bs.${config.product.purchasePrice}     ${i18n.reportDetailPdf.sellIn} Bs.${config.product.salePrice}`, 210, 42);
      doc.text(`${i18n.reportDetailPdf.client}: ${config.client.name}`, 210, 52);
    },
    clientGroupProduct: (doc, config) => {
      doc.text(`${i18n.reportDetailPdf.client}: ${config.client.name}`, 210, 32);
      doc.text(`${i18n.reportDetailPdf.groupProduct}: ${config.groupProduct.name}`, 210, 42);
    },
  }
  return detailsFor[type]
}

export default GeneratePdf;
