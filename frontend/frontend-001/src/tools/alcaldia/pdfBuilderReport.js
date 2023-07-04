import { jsPDF } from "jspdf";

const GeneratePdf = (data, fecha) => {
  const doc = jsPDF({
    format: "letter",
    unit: "px"
  });

  // Adding the fonts
  doc.setFontSize(14);
  doc.text(175, 30, "RESUMEN DE CAJA");
  doc.text(122, 43, `CORRESPONDIENTE A FECHA: ${fecha}`);

  let y1 = 70;
  let y2 = 15;

  for (let index = 0; index < data.resumenVentasPorProducto.length; index++) {
    const recursoMunicipal = data.resumenVentasPorProducto[index];
    doc.setFontSize(12);
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(240, 240, 240);
    doc.rect(50, y1, 357, y2, "FD");
    doc.text(54, y1 + 10.5, `RUBRO ${recursoMunicipal.codigoRecursoMunicipal} => ${recursoMunicipal.nombreRecursoMunicipal}`);
    y1 = y1 + y2;
    y2 = 11;
    doc.setFontSize(11);
    if (y1 > 555) {
      doc.addPage();
      y1 = 30;
    }
    for (let i = 0; i < recursoMunicipal.resumenVentas.length; i++) {
      const resumenVentas = recursoMunicipal.resumenVentas[i];
      doc.rect(50, y1, 357, y2);
      doc.text(54, y1 + 8.2, `      Documento: ${resumenVentas.numeroVenta}`);
      doc.text(160, y1 + 8.2, `Bs ${resumenVentas.ingresoVenta}`);
      y1 = y1 + y2;
      if (i + 1 === recursoMunicipal.resumenVentas.length) {
        doc.rect(50, y1, 357, y2);
        doc.text(54, y1 + 8.2, "Subtotal Rubro");
        doc.text(160, y1 + 8.2, `Bs ${recursoMunicipal.ventasTotales.toLocaleString("en")}`);
        y1 = y1 + y2;
      }
      if (y1 > 555) {
        doc.addPage();
        y1 = 30;
      }
    }

    y2 = 15;
  }

  doc.output("dataurlnewwindow");
};

export default GeneratePdf;
