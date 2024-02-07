import {Router} from 'express';
import {buildPDF} from "../libs/pdfkit.js";

const router = Router();

router.get('/invoice',(req,res) =>{
    // podemos pasar datos de a poco si son grandes

    const stream = res.writeHead(200,{
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=invoice.pdf"
    });


    buildPDF((data) => {
        stream.write(data);
    }, () => {
        //Esta parte es la del end,por ahora no pondremos nada solo terminaremos
        stream.end();
    } )

    res.send('invoice');
})

export default router;