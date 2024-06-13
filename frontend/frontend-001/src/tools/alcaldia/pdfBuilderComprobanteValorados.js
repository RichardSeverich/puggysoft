import { jsPDF } from "jspdf";
import NumeroALetras from "./numToText";
import appUrlConfig from "./../../tools/appUrlConfig";
import i18n from "../../i18n/i18n";

const GeneratePdf = (data, body) => {
  const doc = jsPDF({
    orientation: "p",
    format: [16.5, 21.6],
    unit: "cm"
  });
  const fileName = "alcaldia/comprobanteValorados.jpg";
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

  const nombre = body[0].clienteNombre.replace(/([^\s]+)/gm, function (textoEncontrado) {
    return textoEncontrado.charAt(0).toUpperCase() + textoEncontrado.substring(1);
  });

  if (body[0].clienteCiNit !== "0000000") {
    doc.text(1, 2.6, ` ${body[0].clienteCiNit}`);
  }
  doc.text(3.7, 2.6, ` ${nombre}`);

  doc.text(2.6, 3.4, ` ${body[0].direccion}`);
  doc.text(2.6, 3.9, ` ${i18n.alcaldiaRecursosMunicipalesReportePdf.venta} de ${data[0].name}`);

  let y = 6.5;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    doc.text(1.4, y, ` ${element.codigo}`);
    doc.text(3.3, y, ` ${body[0].nota} (${body[1].cantidad})`);
    doc.text(13.2, y, ` ${body[0].ventaPrecioTotal}`);
    y = y + 0.4;
  }

  doc.text(13.2, 12.1, ` ${body[0].ventaPrecioTotal}`);
  doc.text(2, 12.1, NumeroALetras(body[0].ventaPrecioTotal));

  let fecha = [];
  let creationTime;
  let amPm;
  let dateForName;
  if (body.valueCreationDate === undefined) {
    // now ---> English browser: 6/13/2024, 2:01:02 AM ---> Month/Day/Year
    // now ---> Spanish browser: 13/6/2024, 1:53:11 a. m. ---> Day/Month/Year
    const userLang = navigator.language || navigator.userLanguage;
    const fullDateParts = now.split(",");
    let date = fullDateParts[0]; // Ejemplo: 6/13/2024
    const time = fullDateParts[1]; // Ejemplo: 2:01:02 AM
    const timeParts = time.split(" ");
    // es --> espanish ---> ejemplo: es-AR
    // en --> english
    if (userLang.includes("es")) {
      const dateParts = date.split("/");
      const day = dateParts[0];
      const month = dateParts[1];
      const year = dateParts[2];
      date = `${month}/${day}/${year}`;
    }
    fecha = dateConvert(date).split(" ");
    dateForName = date;
    creationTime = timeParts[0]; // 2:01:02
    amPm = timeParts[1]; // AM/PM  or a. m./p. m.
    if (timeParts.length === 3) {
      amPm = timeParts[1] + timeParts[2];
    }
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
  doc.text(11.6, 14.4, creationTime || "12:00");
  doc.text(12.3, 14.4, amPm);

  doc.output("dataurlnewwindow");
  doc.save(`${dateForName}-venta-${body.idVenta}.pdf`);
};

// Entrada: 6/13/2024
// Retorna:  13 DE JUNIO DE 2024
const dateConvert = (dateFirst) => {
  const date = new Date(dateFirst.replace("-", "/"));
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateFinal = date
    .toLocaleDateString("es-ES", options)
    .toUpperCase();
  return dateFinal;
};

export default GeneratePdf;
