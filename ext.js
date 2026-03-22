const mammoth = require('mammoth');
const fs = require('fs');

const extract = async () => {
    try {
        const result = await mammoth.extractRawText({path: "C:\\Users\\Sebas\\Documents\\blog-responsabilidad-social\\doc\\PRAC1010_A2_Anexo-DANIELA TOBAR MORENO.docx"});
        fs.writeFileSync("C:\\Users\\Sebas\\Documents\\blog-responsabilidad-social\\doc\\content.txt", result.value);
        console.log("Extraction complete!");
    } catch (err) {
        console.error("Error:", err);
    }
};

extract();
