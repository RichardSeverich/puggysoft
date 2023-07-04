import { jsPDF } from "jspdf";
import appUrlConfig from "../appUrlConfig";
import i18n from "../../i18n/i18n";

const fileName = "colcaEscudo.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const subs = [i18n.alcaldiaRecursosMunicipalesReportePdf.venta, i18n.alcaldiaRecursosMunicipalesReportePdf.Monto];

const GeneratePdf = (data, fecha, orden) => {
  const doc = jsPDF({
    format: "letter",
    unit: "px"
  });

  // Adding the fonts
  doc.setFontSize(12);
  doc.text(180, 30, i18n.alcaldiaRecursosMunicipalesReportePdf.title);
  doc.text(152, 43, `${i18n.alcaldiaRecursosMunicipalesReportePdf.correspondienteAFecha} ${fecha}`);
  doc.addImage(imageUrl, "jpg", 25, 15, 40, 40);

  let page = 1;
  doc.setFontSize(7);
  doc.text(420, 10, `${i18n.alcaldiaRecursosMunicipalesReportePdf.pag}. ${page}`);

  // obtener la fecha y la hora
  const today = new Date();
  const now = today.toLocaleString();
  doc.text(400, 22, i18n.alcaldiaRecursosMunicipalesReportePdf.emicionDeReporte);
  doc.text(400, 29, `${i18n.alcaldiaRecursosMunicipalesReportePdf.fecha}: ${now.split(",")[0]}`);
  doc.text(400, 36, `${i18n.alcaldiaRecursosMunicipalesReportePdf.hora}: ${now.split(",")[1]}`);

  const yInicial = 70;
  let y1 = 70;
  const y2 = 13;
  let x = 25;
  const resumenVentasPorProducto = data.resumenVentasPorProducto;
  for (let index = 0; index < resumenVentasPorProducto.length; index++) {
    const rubro = resumenVentasPorProducto[index];
    // work
    doc.rect(x, y1, 410, y2);
    doc.setFontSize(7);
    doc.setTextColor(88, 139, 196);
    doc.text(x, y1 + 8.5, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.rubro} ${rubro.codigoRecursoMunicipal}    ${rubro.nombreRecursoMunicipal}`);
    y1 = y1 + y2;

    doc.setTextColor(0, 0, 0);
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(240, 240, 240);
    doc.rect(x, y1, 410, y2, "FD");

    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        doc.text(x, y1 + 8.5, ` ${subs[0]}`);
      } else {
        doc.text(x, y1 + 8.5, ` ${subs[1]}`);
      }
      x = x + 51;
      if (i !== 7) {
        doc.line(x, y1, x, y1 + y2);
      }
    }
    x = 25;
    const resumenVentas = rubro.resumenVentas;
    if (resumenVentas.length !== 0) y1 = y1 + y2;
    // no tocar
    for (let iDay = 0; iDay < resumenVentas.length; iDay++) {
      const totalDay = resumenVentas[iDay];

      doc.text(x, y1 + 8.5, ` ${totalDay.numeroVenta}`);
      x = x + 51;
      doc.line(x, y1, x, y1 + y2);
      doc.text(x, y1 + 8.5, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.bs} ${totalDay.ingresoVenta.toLocaleString("en")}`);
      x = x + 51;
      if (iDay === 0 && resumenVentas.length < 4) {
        doc.rect(25, y1, 410, y2);
        for (let cont = 8; cont > 2; cont--) {
          const aux = 25 + (cont - 1) * 51;
          doc.line(aux, y1, aux, y1 + y2);
        }
      }
      if ((iDay + 1) % 4 === 0) {
        x = 25;
        doc.rect(x, y1, 410, y2);
        y1 = y1 + y2;
        if ((resumenVentas.length - iDay - 1) < 4 && (resumenVentas.length - iDay - 1) !== 0) {
          doc.rect(x, y1, 410, y2);
          for (let cont = 8; cont > (resumenVentas.length - iDay - 1) * 2; cont--) {
            const aux = x + (cont - 1) * 51;
            doc.line(aux, y1, aux, y1 + y2);
          }
        } else if (resumenVentas.length === iDay + 1) {
          y1 = y1 - y2;
        }
      } else {
        doc.line(x, y1, x, y1 + y2);
      }
      if (y1 > 500) {
        x = 25;
        y1 = yInicial;
        doc.addPage();
        doc.setFontSize(7);
        doc.text(420, 10, `${i18n.alcaldiaRecursosMunicipalesReportePdf.pag}. ${++page}`);
      }
    }
    y1 = y1 + y2;
    x = 25;
    if (y1 > 500) {
      y1 = yInicial;
      doc.addPage();
      doc.setFontSize(7);
      doc.text(420, 10, `${i18n.alcaldiaRecursosMunicipalesReportePdf.pag}. ${++page}`);
    }
    doc.setFillColor(184, 217, 255);
    doc.rect(x, y1, 102, y2, "FD");

    doc.text(x, y1 + 8.5, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.subTotal}`);
    x = x + 51;
    doc.line(x, y1, x, y1 + y2);
    doc.text(x, y1 + 8.5, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.bs} ${rubro.ventasTotales.toLocaleString("en")}`);
    y1 = y1 + y2 * 2;
    x = 25;
    if (y1 > 486) {
      y1 = yInicial;
      doc.addPage();
      doc.setFontSize(7);
      doc.text(420, 10, `${i18n.alcaldiaRecursosMunicipalesReportePdf.pag}. ${++page}`);
    }
  }

  doc.setFontSize(10);
  doc.text(x, y1, `${i18n.alcaldiaRecursosMunicipalesReportePdf.pag}: ${i18n.alcaldiaRecursosMunicipalesReportePdf.bs} ${data.granTotal.toLocaleString("en")}`);
  doc.output("dataurlnewwindow");
};

export default GeneratePdf;
