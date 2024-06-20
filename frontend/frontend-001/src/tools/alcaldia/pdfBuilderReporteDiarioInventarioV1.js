import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import appUrlConfig from "../appUrlConfig";
import i18n from "../../i18n/i18n";

const fileName = "alcaldia/colcaEscudo.jpg";
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

  const headValues = ["Num Comprobante", "Detalle", "Precio total"];

  const values = data.map( elemento => {
    return [
      elemento.numeroComprobante,
      elemento.nota,
      elemento.ventaPrecioTotal
    ];
  });

  doc.autoTable({
    startY: 70,
    head: [headValues],
    body: values
  });
  
  doc.setFontSize(10);
  doc.output("dataurlnewwindow");
  doc.save(`${fecha}-reporte-diario.pdf`);
  alert("Reporte generado exitosamente");
};

export default GeneratePdf;
