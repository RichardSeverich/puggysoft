import { jsPDF } from "jspdf";
import appUrlConfig from "../appUrlConfig";
import i18n from "../../i18n/i18n";

const fileName = "colcaEscudo.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const GeneratePdf = (data, fecha) => {
  const doc = jsPDF({
    format: "letter",
    unit: "px"
  });

  // Adding the fonts
  doc.setFontSize(12);
  doc.text(180, 30, i18n.alcaldiaRecursosMunicipalesReportePdf.title);
  doc.text(130, 43, `${i18n.alcaldiaRecursosMunicipalesReportePdf.correspondienteAFecha} ${fecha}`);
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
  const y2 = 5;
  let x = 25;

  doc.rect(x, y1, 410, 12);
  doc.text(x, y1 + y2 + 3, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.rubro}`);
  x = x + 48;

  doc.line(x, y1, x, y1 + 12);
  doc.text(x, y1 + 5.7, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.rubro}`);
  doc.text(x, y1 + 11, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.auxiliar}`);
  x = x + 48;

  doc.line(121, y1, 121, y1 + 12);
  doc.text(x, y1 + y2 + 3, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.descripcion}`);
  x = x + 193;

  doc.line(314, y1, 314, y1 + 12);
  doc.text(x, y1 + y2 + 3, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.parcial}`);
  x = x + 48;

  doc.line(362, y1, 362, y1 + 12);
  doc.text(x, y1 + 5.7, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.total}`);
  doc.text(x, y1 + 11, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.recaudado}`);
  y1 = y1 + 12;
  x = 25;

  const listaPadres = data.listaPadres;
  for (let index = 0; index < listaPadres.length; index++) {
    const rubroPadre = listaPadres[index];
    doc.setFontSize(6);
    doc.setTextColor(0, 66, 175);

    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(239, 239, 239);
    doc.rect(x, y1, 410, y2, "FD");
    doc.text(x, y1 + y2 - 0.8, ` ${rubroPadre.codigoRecursoMunicipal}`);
    x = x + 48;

    doc.line(x, y1, x, y1 + y2);
    doc.text(x, y1 + y2 - 0.8, ` ${rubroPadre.codigoAuxiliarRecursoMunicipal}`);
    x = x + 48;

    doc.line(121, y1, 121, y1 + y2);
    doc.text(x, y1 + y2 - 0.8, ` ${rubroPadre.nombreRecursoMunicipal}`);
    x = x + 193;

    doc.line(314, y1, 314, y1 + y2);
    x = x + 48;

    doc.line(362, y1, 362, y1 + y2);
    doc.text(x, y1 + y2 - 0.8, ` ${rubroPadre.ventasTotales}`);
    y1 = y1 + y2;
    x = 25;

    const listaHijos = rubroPadre.arrayHijos;
    for (let index = 0; index < listaHijos.length; index++) {
      const rubroHijo = listaHijos[index];
      doc.setFontSize(6);
      doc.setTextColor(0, 66, 175);

      doc.rect(x, y1, 410, y2);
      doc.text(x, y1 + y2 - 0.8, ` ${rubroHijo.codigoRecursoMunicipal}`);
      x = x + 48;

      doc.line(x, y1, x, y1 + y2);
      doc.text(x, y1 + y2 - 0.8, ` ${rubroHijo.codigoAuxiliarRecursoMunicipal}`);
      x = x + 48;

      doc.line(121, y1, 121, y1 + y2);
      doc.text(x, y1 + y2 - 0.8, ` ${rubroHijo.nombreRecursoMunicipal}`);
      x = x + 193;

      doc.line(314, y1, 314, y1 + y2);
      doc.text(x, y1 + y2 - 0.8, ` ${rubroHijo.ventasTotales}`);
      x = x + 48;

      doc.line(362, y1, 362, y1 + y2);
      y1 = y1 + y2;
      x = 25;
    }
    if (y1 > 486) {
      y1 = yInicial;
      doc.addPage();
      doc.setFontSize(7);
      doc.text(420, 10, `${i18n.alcaldiaRecursosMunicipalesReportePdf.pag}. ${++page}`);
    }
  }

  doc.text(x, y1 + y2, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.total} ${i18n.alcaldiaRecursosMunicipalesReportePdf.recaudado} ${i18n.alcaldiaRecursosMunicipalesReportePdf.bs}`);
  x = x + 337;
  doc.text(x, y1 + y2, ` ${data.granTotal}`);
  doc.output("dataurlnewwindow");
};

export default GeneratePdf;
