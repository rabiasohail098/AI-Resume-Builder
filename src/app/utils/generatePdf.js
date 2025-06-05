// app/utils/generatePdf.js
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// function generatePdf(element, filename) { // Old signature
export async function generatePdf(element, filename = "document.pdf", options = {}) { // New signature with options
    console.log("generatePdf: Starting PDF generation...");
    console.log("generatePdf: Target element:", element);
    console.log("generatePdf: Options received:", options);

    try {
        // Default options for html2canvas to handle some common issues
        const canvas = await html2canvas(element, {
            scale: 2, // Increase scale for better resolution in PDF
            useCORS: true, // Important for external images/fonts
            logging: true, // Enable logging for html2canvas
            allowTaint: true, // Allow images from different origins if CORS is handled
            // windowWidth: document.querySelector('.some-parent-div-that-limits-width')?.scrollWidth || element.scrollWidth,
            // windowHeight: document.querySelector('.some-parent-div-that-limits-height')?.scrollHeight || element.scrollHeight,
        });

        console.log("generatePdf: html2canvas completed.");

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF(options.orientation || 'portrait', 'mm', options.format || 'a4'); // Use options here

        const imgWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(filename);
        console.log(`generatePdf: PDF '${filename}' saved successfully.`);
        return pdf;

    } catch (error) {
        console.error("generatePdf: Error during PDF generation process:", error);
        throw error; // Re-throw to be caught by handleDownload
    }
}