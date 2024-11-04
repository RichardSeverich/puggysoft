import { jsPDF } from "jspdf";
import "jspdf-autotable";
import appUrlConfig from "../appUrlConfig";
import i18n from "../../i18n/i18n";

const fileName = "alcaldia/colcaEscudo.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const GeneratePdf = (bodyResponse, fecha, bodyRequest) => {
  const doc = jsPDF({
    format: "letter",
    unit: "px"
  });

  // Adding the fonts
  doc.setFontSize(12);
  doc.text(180, 30, i18n.alcaldiaRecursosMunicipalesReportePdf.title);
  doc.text(152, 43, `${i18n.alcaldiaRecursosMunicipalesReportePdf.correspondienteAFecha} ${fecha}`);
  doc.text(124, 56, `${i18n.alcaldiaRecursosMunicipalesReportePdf.nombre}: ${bodyRequest.nameRecursoMunicipal}`);
  doc.addImage(imageUrl, "jpg", 25, 15, 40, 40);

  // obtener la fecha y la hora
  const today = new Date();
  const now = today.toLocaleString();
  doc.setFontSize(7);
  doc.text(400, 22, i18n.alcaldiaRecursosMunicipalesReportePdf.emicionDeReporte);
  doc.text(400, 29, `${i18n.alcaldiaRecursosMunicipalesReportePdf.fecha}: ${now.split(",")[0]}`);
  doc.text(400, 36, `${i18n.alcaldiaRecursosMunicipalesReportePdf.hora}: ${now.split(",")[1]}`);

  let cantidadTotal = 0;
  let precioTotal = 0;

  const buildNota = (primeraNota, ultimaNota) => {
    // obteniendo timbre/folder inicio de la primera nota de timbres/folders
    if (primeraNota.includes("_")) {
      bodyRequest.nameRecursoMunicipal.includes("TIMBRES")
        ? primeraNota = primeraNota.split("_")[0]
        : primeraNota = primeraNota.split("_")[1];
      primeraNota = primeraNota.split("-")[1];
    }
    if (primeraNota.includes("-")) {
      primeraNota = primeraNota.split("-")[1];
    }
    primeraNota = primeraNota.split(",")[0];

    // obteniendo timbre/folder final de la ultima nota de timbres/folders
    if (ultimaNota.includes("_")) {
      bodyRequest.nameRecursoMunicipal.includes("TIMBRES")
        ? ultimaNota = ultimaNota.split("_")[0]
        : ultimaNota = ultimaNota.split("_")[1];
      ultimaNota = ultimaNota.split("-")[1];
    }
    if (ultimaNota.includes("-")) {
      ultimaNota = ultimaNota.split("-")[1];
    }
    ultimaNota = ultimaNota.split(",")[1];

    return { inicio: primeraNota, final: ultimaNota };
  };

  const primeraNota = bodyResponse[0].nota;
  const ultimaNota = bodyResponse[bodyResponse.length - 1].nota;

  const objectNota = buildNota(primeraNota, ultimaNota);

  const rows = bodyResponse.map((elemento) => {
    cantidadTotal = cantidadTotal + Number(elemento.aux);
    precioTotal = precioTotal + Number(elemento.ventaPrecioTotal);

    // Obteniendo nota detalle timbres/folders
    (bodyRequest.nameRecursoMunicipal.includes("TIMBRES") && elemento.nota.includes("_"))
      ? elemento.nota = elemento.nota.split("_")[0]
      : (bodyRequest.nameRecursoMunicipal.includes("FOLDERS") && elemento.nota.includes("_"))
        ? elemento.nota = elemento.nota.split("_")[1]
        : elemento.nota = elemento.nota;

    return [elemento.numeroComprobante,
      elemento.nota,
      elemento.aux,
      elemento.clienteCambio,
      elemento.ventaPrecioTotal
    ];
  });

  const detailTable = {
    headValues: [
      i18n.alcaldiaRecursosMunicipalesReportePdf.numeroComprobante,
      i18n.alcaldiaRecursosMunicipalesReportePdf.detalle,
      i18n.alcaldiaRecursosMunicipalesReportePdf.cantidad,
      i18n.alcaldiaRecursosMunicipalesReportePdf.precioUnitario,
      i18n.alcaldiaRecursosMunicipalesReportePdf.subTotal
    ],
    bodyValues: rows,

    footValues: [
      i18n.alcaldiaRecursosMunicipalesReportePdf.total,
      null,
      cantidadTotal,
      null,
      precioTotal
    ]
  };

  const resultTable = {
    headValues: [
      i18n.alcaldiaRecursosMunicipalesReportePdf.numeroInicio,
      i18n.alcaldiaRecursosMunicipalesReportePdf.numeroFinal,
      i18n.alcaldiaRecursosMunicipalesReportePdf.cantidad,
      i18n.alcaldiaRecursosMunicipalesReportePdf.totalBs
    ],
    bodyValues: [
      objectNota.inicio,
      objectNota.final,
      cantidadTotal,
      precioTotal
    ]
  };

  doc.autoTable({
    startY: 80,
    head: [resultTable.headValues],
    body: [resultTable.bodyValues],
    tableWidth: "wrap"
  });

  doc.autoTable({
    startY: 120,
    head: [detailTable.headValues],
    body: detailTable.bodyValues,
    foot: [detailTable.footValues]
  });

  doc.setFontSize(10);
  doc.output("dataurlnewwindow");
  doc.save(`${fecha}-reporte-diario.pdf`);
  alert("Reporte generado exitosamente");
};

export default GeneratePdf;
