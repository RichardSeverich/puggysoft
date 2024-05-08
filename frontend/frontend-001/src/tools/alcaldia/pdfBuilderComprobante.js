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
    doc.text(1, 5.6, ` ${body.clienteCiNit}`);
  }
  doc.text(3.7, 5.6, ` ${nombre}`);
  doc.text(2.6, 6.4, ` ${body.direccion}`);
  doc.text(2.6, 6.9, ` ${body.nota}`);
  let y = 10;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    doc.text(1.4, y, ` ${element.codigo}`);
    doc.text(3.3, y, ` ${element.name}`);
    doc.text(13.2, y, ` ${element.precio}`);
    y = y + 0.4;
  }

  doc.text(13.2, 16.1, ` ${body.ventaPrecioTotal}`);
  doc.text(2, 16.1, NumeroALetras(body.ventaPrecioTotal));
  let fecha = [];
  if (body.valueCreationDate === undefined) {
    fecha = dateConvert(now.split(",")[0]).split(" ");
  } else {
    fecha = dateConvert(body.valueCreationDate.split("T")[0]).split(" ");
  }
  doc.setFontSize(7);
  doc.text(6.4, 17.4, ` ${fecha[0]}`);
  doc.text(8.4, 17.4, ` ${fecha[2]}`);
  doc.text(11.6, 17.4, ` ${fecha[4].split("")[3]}`);

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
