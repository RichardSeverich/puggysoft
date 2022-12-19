import { jsPDF } from "jspdf";
import i18n from "./../i18n/i18n";

function pdfBuilderTicket (saleData, totalToPay, arrayOfProducts) {
  /* eslint-disable new-cap */
  let pdfHigh = 60;
  if (arrayOfProducts.length > 3) {
    pdfHigh = pdfHigh + (arrayOfProducts.length - 3) * 11;
  }
  const doc = new jsPDF("p", "mm", [58, pdfHigh]); // Document of 58mm wide and 60mm high
  doc.setFontSize(12);
  doc.text(`${i18n.saleTicket.ticketNumber} : ${saleData.id}`, 5, 7);
  doc.line(5, 8, 53, 8);
  doc.setFontSize(8);
  doc.text(`${i18n.saleTicket.client} : ${saleData.client}`, 5, 13);
  doc.text(`${i18n.saleTicket.orderedBy} : ${saleData.createdBy}`, 5, 16);
  doc.line(5, 17, 53, 17);
  doc.text(`${i18n.saleTicket.totalToPay} : ${totalToPay}`, 5, 21);
  doc.line(5, 23, 53, 23);
  doc.setFontSize(7);
  arrayOfProducts.forEach((product, index) => {
    doc.text(`${i18n.saleTicket.product} : ${product.name}`, 5, 27 + 10 * index);
    doc.text(`${i18n.saleTicket.queantity} : ${product.stock}`, 5, 30 + 10 * index);
    doc.text(`${i18n.saleTicket.price} : ${product.salePrice}`, 5, 33 + 10 * index);
    doc.text("------ ------- ------- ------ ------- ------- ------", 5, 35 + 10 * index);
  });
  const docString = doc.output("datauristring");
  const embed = "<embed width='100%' height='100%' src='" + docString + "'/>";
  // doc.save("a4.pdf");
  const myWindows = window.open(
    "pdfwindows",
    "pdfwindows",
    "width=1280,height=1280");
  myWindows.document.open();
  myWindows.document.write(embed);
  myWindows.document.close();
}

export default pdfBuilderTicket;
