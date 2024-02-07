// import PDFDocument  from "pdfkit"; es la misma que la siguiente pero esta no soporta tablas
import PDFDocument  from "pdfkit-table";

export function buildPDF(dataCallback, endCallback){
    const doc = new PDFDocument();

    //Creamos el objeto y llamamos a eventos

    doc.on('data',dataCallback); //cuando recibe datos

    doc.on('end',endCallback); //cuando termina de recibirlos

    doc.fontSize(30).text('Hola Mundo',100,100);
    doc.moveTo(0, 20)                               // set the current point
   .lineTo(100, 160)                            // draw a line
   .quadraticCurveTo(130, 200, 150, 120)        // draw a quadratic curve
   .bezierCurveTo(190, -40, 200, 200, 300, 150) // draw a bezier curve
   .lineTo(400, 90)                             // draw another line
   .stroke();                                   // stroke the path

    //Ejemplo de la documentacion
    const tableArray = {
        headers: ["Country", "Conversion rate", "Trend"],
        rows: [
          ["Switzerland", "12%", "+1.12%"],
          ["France", "67%", "-0.98%"],
          ["England", "33%", "+4.44%"],
        ],
      };
      doc.table( tableArray, { width: 300 });

    doc.end(); //finaliza creacion del pdf


}