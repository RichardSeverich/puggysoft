import { jsPDF } from "jspdf";
import appUrlConfig from "../appUrlConfig";
import i18n from "../../i18n/i18n";

const fileName = "tenant-default.jpg";
const imageUrl = `${appUrlConfig.URL}/${fileName}`;

const GeneratePdf = async (data) => {
  const tenantImage = window.sessionStorage.getItem("tenantImage");
  let image;
  if (tenantImage !== null) {
    image = `data:image/jpeg;base64, ${tenantImage}`;
  } else {
    image = `${imageUrl}/${fileName}`;
  }

  const doc = new jsPDF({
    format: "letter",
    unit: "px"
  });

  const pageSize = doc.internal.pageSize;
  const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

  doc.setLineWidth(0.5);
  doc.line(30, 35, pageWidth - 35, 35);

  doc.addImage(image, "JPEG", 30, 14, 20, 20);

  doc.setFontSize(15);
  doc.text(i18n.escuela.calificaciones, 50, 29);

  doc.setFontSize(8);
  doc.text(i18n.HistoryPorEstudianteCursoTable.fecha, pageWidth - 83, 29);
  doc.text(timeNow(), pageWidth - 65, 29);

  const lineVerticalX = (pageWidth - 35);

  doc.setFontSize(10);
  doc.text(
    `${i18n.escuela.curso}: ${data.curso.name}`,
    (lineVerticalX / 2) + 15,
    59,
    {
      align: "center",
      maxWidth: lineVerticalX - 30,
    },
  );

  doc.setFontSize(12);
  const textCurso = doc.splitTextToSize(data.curso.name, (lineVerticalX * 2) - 45);
  let alturaTextoCurso = textCurso.length > 1? 50 : 56;
  doc.text(textCurso, (lineVerticalX * 2), alturaTextoCurso,
    {
      align: "center",
      maxWidth: (lineVerticalX * 2) - 45,
    },
  );

  doc.autoTable({
    startY: 74,
    headStyles: {
      fillColor: [13, 110, 253],
      fontSize: 7,
    },
    bodyStyles: {
      fontSize: 7,
    },
    styles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 }
    },
    html: '.table',
    theme: 'grid',
    willDrawCell: function (data) {
      if (data.section === 'head' && data.column.dataKey > 1) {
        console.log('entro');
        console.log(data.cell.text);
        const text = data.cell.text.join('');
        data.cell.text = text.length >=3? text.slice(0, 3) : text;
      }
      if (data.section === 'body' && data.column.dataKey === 5) {
        const raw = data.cell.raw;
        if (raw instanceof HTMLElement) {
          const strongEl = raw.querySelector('strong');
          if (strongEl) {
            const color = window.getComputedStyle(strongEl).color; // Esto te da el color CSS
            const rgb = parseColorToRGB(color);
            doc.setTextColor(rgb.r, rgb.g, rgb.b);
          }
        }
      }
      // Alternancia de colores en las filas del body
      if (data.section === 'body') {
        if (data.row.index % 2 === 0) {
            doc.setFillColor(255, 255, 255);  // Color de fondo claro
        } else {
            doc.setFillColor(225, 225, 225);  // Color de fondo oscuro
        }

        // Aplica el fondo de la celda
        doc.rect(data.cell.x, data.cell.y, data.cell.width, data.cell.height, 'F');
    }
    },
  })

  doc.output("dataurlnewwindow");
};

function parseColorToRGB(color) {
  const match = color.match(/\d+/g);
  return {
    r: parseInt(match[0]),
    g: parseInt(match[1]),
    b: parseInt(match[2])
  };
}

function timeNow() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`
}

export default GeneratePdf;
