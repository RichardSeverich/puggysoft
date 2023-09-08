import { jsPDF } from "jspdf";
import NumeroALetras from "./numToText";
import appUrlConfig from "./../../tools/appUrlConfig";

const GeneratePdf = (data, body) => {
  const doc = jsPDF({
    orientation: "l",
    format: [16.5, 21.6],
    unit: "cm"
  });
  const fileName = "alcaldia/comprobanteRubros.jpg";
  const imageUrl = `${appUrlConfig.URL}/${fileName}`;
  doc.addImage(imageUrl, "JPG", 0, 0, 21.6, 16.5);

  doc.setFontSize(15);
  doc.setTextColor(88, 139, 196);
  const idVenta = body.idVenta.toString().padStart(7, "0");
  doc.text(15.7, 1.85, ` ${idVenta}`);

  doc.setFontSize(8);
  // obtener la fecha y la hora
  const today = new Date();
  const now = today.toLocaleString();

  const nombre = body.clienteNombre.replace(/([^\s]+)/gm, function (textoEncontrado) {
    return textoEncontrado.charAt(0).toUpperCase() + textoEncontrado.substring(1);
  });

  doc.text(2, 4.4, ` ${body.clienteCiNit}`);
  doc.text(7, 4.4, ` ${nombre}`);

  doc.text(2.7, 5.05, ` ${body.direccion}`);
  doc.text(2.7, 5.5, ` ${body.nota}`);
  const x = 2.5;
  let y = 7.7;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    doc.text(x, y, ` ${element.codigo}`);
    doc.text(x + 2.7, y, ` ${element.name}`);
    doc.text(x + 13.4, y, ` ${element.precio}`);
    y = y + 0.4;
  }
  y = 12.3;
  doc.text(x + 13.4, y, ` ${body.ventaPrecioTotal}`);
  doc.text(x, y, NumeroALetras(body.ventaPrecioTotal));

  y = y + 0.8;
  doc.setFontSize(6);
  let fecha = [];
  if (body.valueCreationDate === undefined) {
    fecha = dateConvert(now.split(",")[0]).split(" ");
  } else {
    fecha = dateConvert(body.valueCreationDate.split("T")[0]).split(" ");
  }
  doc.text(8.9, y, ` ${fecha[0]}`);
  doc.text(10, y, ` ${fecha[2]}`);
  doc.text(12.1, y, ` ${fecha[4]}`);

  doc.output("dataurlnewwindow");
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
