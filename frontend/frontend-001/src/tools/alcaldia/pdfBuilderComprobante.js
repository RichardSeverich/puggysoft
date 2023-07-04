import { jsPDF } from "jspdf";
import NumeroALetras from "./numToText";

const GeneratePdf = (data, body) => {
  const doc = jsPDF({
    format: [18, 22],
    unit: "cm"
  });

  doc.setFontSize(8);
  // obtener la fecha y la hora
  const today = new Date();
  const now = today.toLocaleString();

  doc.text(2, 3, ` ${body.clienteCiNit}`);
  doc.text(5, 3, ` ${body.clienteNombre}`);

  const x = 2;
  let y = 6;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    doc.text(x, y, ` ${element.codigo}`);
    doc.text(x + 1.5, y, ` ${element.name}`);
    doc.text(x + 13, y, ` ${element.precio}`);
    y = y + 0.4;
  }
  y = 12;
  doc.text(x + 13, y, ` ${body.ventaPrecioTotal}`);

  ++y;
  doc.text(x + 2, y, NumeroALetras(body.ventaPrecioTotal));

  y = y + 1.5;
  const fecha = dateConvert(now.split(",")[0]).split(" ");
  doc.text(x + 4, y, ` ${fecha[0]}`);
  doc.text(x + 6, y, ` ${fecha[2]}`);
  doc.text(x + 8, y, ` ${fecha[4]}`);

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
