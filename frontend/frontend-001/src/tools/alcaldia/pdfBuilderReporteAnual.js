import { jsPDF } from "jspdf";
import appUrlConfig from "../appUrlConfig";
import i18n from "../../i18n/i18n";

const fileName = "colcaEscudo.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const MONTHS = {
  ENERO: "january",
  FEBRERO: "february",
  MARZO: "march",
  ABRIL: "april",
  MAYO: "may",
  JUNIO: "june",
  JULIO: "july",
  AGOSTO: "august",
  SEPTIEMBRE: "september",
  OCTUBRE: "october",
  NOVIEMBRE: "november",
  DICIEMBRE: "december"
};

const GeneratePdf = (data, fecha) => {
  const doc = jsPDF({
    format: "letter",
    unit: "px"
  });

  // Adding the fonts
  doc.setFontSize(12);
  doc.text(180, 30, i18n.alcaldiaRecursosMunicipalesReportePdf.title);
  doc.text(152, 43, `${i18n.alcaldiaRecursosMunicipalesReportePdf.year} ${fecha}`);
  doc.addImage(imageUrl, "jpg", 25, 15, 40, 40);

  let page = 1;
  doc.setFontSize(7);
  doc.text(420, 10, `Pag. ${page}`);
  const today = new Date();

  // obtener la fecha y la hora
  const now = today.toLocaleString();
  doc.text(400, 22, "Emicion de reporte");
  doc.text(400, 29, `Fecha: ${now.split(",")[0]}`);
  doc.text(400, 36, `Hora: ${now.split(",")[1]}`);

  let rep = true;
  const yInicial = 70;
  let y1 = 70;
  const y2 = 13;
  let x = 25;
  const resumenAnual = data.resumenAnualProducto;
  for (let index = 0; index < resumenAnual.length; index++) {
    const rubro = resumenAnual[index];
    doc.rect(x, y1, 200, y2);
    doc.setFontSize(7);
    doc.setTextColor(88, 139, 196);
    doc.text(x, y1 + 8.5, ` RUBRO ${rubro.codigoRecursoMunicipal}    ${rubro.nombreRecursoMunicipal}`);

    y1 = y1 + y2;

    doc.setTextColor(0, 0, 0);
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(240, 240, 240);
    doc.rect(x, y1, 200, y2, "FD");
    doc.setFontSize(7);
    doc.text(x, y1 + 8, " MES");
    x = x + 100;
    doc.line(x, y1, x, y1 + y2);
    doc.text(x, y1 + 8, " MONTO");
    y1 = y1 + y2;
    x = x - 100;

    // doc.setFontSize(6);
    for (const month in MONTHS) {
      doc.rect(x, y1, 200, y2);
      doc.text(x, y1 + 8, ` ${month}`);
      x = x + 100;

      doc.line(x, y1, x, y1 + y2);
      doc.text(x, y1 + 8, ` Bs ${rubro[MONTHS[month]].toLocaleString("en")}`);
      x = x - 100;
      y1 = y1 + y2;
    }
    doc.setFillColor(184, 217, 255);
    doc.rect(x, y1, 200, y2, "FD");
    doc.text(x, y1 + 8, " Sub total");
    x = x + 100;

    doc.line(x, y1, x, y1 + y2);
    doc.text(x, y1 + 8, ` Bs ${rubro.ventasTotales.toLocaleString("en")}`);

    if (rep) {
      rep = false;
      x = 232;
      y1 = yInicial;
    } else if (x > 200) {
      x = 25;
      y1 = 270;
    } else {
      x = 232;
      y1 = 270;
    }

    if ((index + 1) % 4 === 0 && (index + 1) !== resumenAnual.length) {
      rep = true;
      x = 25;
      y1 = yInicial;
      doc.addPage();
      doc.setFontSize(7);
      doc.text(420, 10, `Pag. ${++page}`);
    }
  }
  doc.setFontSize(10);
  doc.text(25, y1 + y2 * 16, `Gran total: Bs ${data.granTotal.toLocaleString("en")}`);

  doc.output("dataurlnewwindow");
};

export default GeneratePdf;
