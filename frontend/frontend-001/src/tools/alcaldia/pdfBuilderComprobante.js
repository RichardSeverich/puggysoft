import { jsPDF } from "jspdf";
import NumeroALetras from "./numToText";
import appUrlConfig from "./../../tools/appUrlConfig";

const GeneratePdf = (data, body) => {
  const doc = jsPDF({
    orientation: "p",
    format: [16.5, 21.6],
    unit: "cm"
  });
  const fileName = "alcaldia/comprobanteRubros.jpg";
  // eslint-disable-next-line no-unused-vars
  const imageUrl = `${appUrlConfig.URL}/${fileName}`;
  // doc.addImage(imageUrl, "JPG", 0, 0, 21.6, 16.5);

  doc.setFontSize(15);
  doc.setTextColor(88, 139, 196);
  // const idVenta = body.idVenta.toString().padStart(7, "0");
  // doc.text(15.7, 1.85, ` ${idVenta}`);

  doc.setFontSize(8);
  // obtener la fecha y la hora
  const today = new Date();
  const now = today.toLocaleString();

  const nombre = body.clienteNombre.replace(/([^\s]+)/gm, function (textoEncontrado) {
    return textoEncontrado.charAt(0).toUpperCase() + textoEncontrado.substring(1);
  });
  if (body.clienteCiNit !== "0000000") {
    doc.text(1, 2.6, ` ${body.clienteCiNit}`);
  }
  doc.text(3.7, 2.6, ` ${nombre}`);
  doc.text(2.6, 3.4, ` ${body.direccion}`);
  doc.text(2.6, 3.9, ` ${body.nota}`);

  let y = 6.5;
  data.forEach(element => {
    doc.text(1.4, y, ` ${element.codigo}`);
    doc.text(3.3, y, ` ${element.name}`);
    doc.text(13.2, y, ` ${Number(element.precio).toFixed(2)}`);
    y = y + 0.4;
  });

  const margin = 3.4;
  const pageWidth = doc.internal.pageSize.width - 2 * margin;
  const textLines = doc.splitTextToSize(` ${"GLOSA: " + body.glosa}`, pageWidth);
  textLines.forEach((line) => {
    y = y + 0.4;
    doc.text(3.3, y, line);
  });

  doc.text(13.2, 12.1, ` ${body.ventaPrecioTotal}`);
  doc.text(2, 12.1, NumeroALetras(body.ventaPrecioTotal));
  let fecha = [];
  let creationTime;
  let amPm;
  let dateForName;
  if (body.valueCreationDate === undefined) {
    fecha = dateConvert(now.split(",")[0]).split(" ");
    dateForName = now.split(",")[0];
    creationTime = now.split(",")[1];
    amPm = "";
  } else {
    const dateParts = body.valueCreationDate.split("T");
    dateForName = dateParts[0];
    creationTime = dateParts[1].substring(0, 5);
    fecha = dateConvert(dateParts[0]).split(" ");
    const hora = Number(creationTime.split(":")[0]);
    amPm = hora >= 12 ? "pm" : "am";
  }
  doc.setFontSize(7);
  doc.text(6.4, 14.4, ` ${fecha[0]}`);
  doc.text(8.4, 14.4, ` ${fecha[2]}`);
  doc.text(10.6, 14.4, ` ${fecha[4].split("")[3]}`);
  doc.text(11.6, 14.4, creationTime);
  doc.text(12.3, 14.4, amPm);

  doc.output("dataurlnewwindow");
  doc.save(`${dateForName}-venta-${body.idVenta}.pdf`);
};

const dateConvert = (dateFirst) => {
  const date = new Date(dateFirst.replace("-", "/"));
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateFinal = date
    .toLocaleDateString("es-ES", options)
    .toUpperCase();
  return dateFinal;
};

export default GeneratePdf;
