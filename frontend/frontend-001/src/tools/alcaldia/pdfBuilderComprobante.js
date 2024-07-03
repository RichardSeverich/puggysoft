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
    doc.text(2, 5, ` ${body.clienteCiNit}`);
  }
  doc.text(4, 5, ` ${nombre}`);
  doc.text(3, 5.6, ` ${body.direccion}`);
  doc.text(3, 6.1, ` ${body.nota}`);

  let y = 8.5;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    doc.text(2, y, ` ${element.codigo}`);
    doc.text(4, y, ` ${element.name}`);
    doc.text(11.5, y, ` ${Number(element.precio).toFixed(2)}`);
    y = y + 0.4;
  }
   // Función para dividir el texto de la glosa
   const splitTextToLines = (text, maxLineLength) => {
    const lines = [];
    while (text.length > maxLineLength) {
      let lastSpaceIndex = text.lastIndexOf(' ', maxLineLength);
      if (lastSpaceIndex === -1) lastSpaceIndex = maxLineLength;
      lines.push(text.substring(0, lastSpaceIndex));
      text = text.substring(lastSpaceIndex + 1);
    }
    lines.push(text);
    return lines;
  };

  const glosaLines = splitTextToLines(`GLOSA: ${body.glosa}`, 41);
  glosaLines.forEach((line, index) => {
    doc.text(4, y + 0.1 + (index * 0.4), line);
  });

  doc.text(11.5, 13.1, ` ${body.ventaPrecioTotal}`);
  doc.text(3, 13.1, NumeroALetras(body.ventaPrecioTotal));
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
doc.text(6, 14.1, ` ${fecha[0]}`);
  doc.text(7.2, 14.1, ` ${fecha[2]}`);
  doc.text(10.2, 14.1, ` ${fecha[4].split("")[3]}`);
  doc.text(11, 14.1, creationTime);
  doc.text(11.5, 14.1, amPm);

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