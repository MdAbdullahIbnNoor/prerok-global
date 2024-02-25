/* eslint-disable react/prop-types */
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../../assets/Prerok_Global_Logo.png'

const PDFGenerator = ({ bookingInfo }) => {
    // const bgColor = [255, 193, 7];
    const handleDownload = () => {
        const pdf = new jsPDF({
            orientation: 'portrait', 
            unit: 'mm',
            format: 'a4',
        });

        const imgWidth = 50;
        const imgHeight = 50;
        const marginTop = 10;
        const marginRight = 10;
        pdf.addImage(logo, 'PNG', pdf.internal.pageSize.width - imgWidth - marginRight, marginTop, imgWidth, imgHeight);

        pdf.setFontSize(20);
        pdf.text("Invoice", 105, 15, { align: 'center' });

        
        // Add customer details
        pdf.setFontSize(12);
        pdf.text(`Customer Name: ${bookingInfo?.toAddress?.to_name}`, 15, 30);
        pdf.text(`Customer Email: ${bookingInfo?.toAddress?.to_email}`, 15, 40);
        pdf.text(`Customer Phone: ${bookingInfo?.toAddress?.to_phone}`, 15, 50);

        // Add invoice details
        pdf.setFontSize(14);
        pdf.text("Invoice Details", 15, 70);
        pdf.autoTable({
            startY: 80,
            head: [['Description', 'Amount']],
            body: [
                ['Payment Amount', `$${bookingInfo?.paymentInfo?.amount}`],
                ['Transaction ID', bookingInfo?.paymentInfo?.transactionId],
                ['Payment Date', bookingInfo?.paymentInfo?.date],
            ],
        });

        // Add parcel information
        pdf.setFontSize(14);
        pdf.text("Parcel Information", 15, pdf.autoTable.previous.finalY + 10);
        pdf.autoTable({
            startY: pdf.autoTable.previous.finalY + 20,
            head: [['Description', 'Value']],
            body: [
                ['Packaging Type', bookingInfo?.parcelInfo?.packaging_type],
                ['Shipping Method', bookingInfo?.parcelInfo?.shipping_method],
                ['Parcel Weight (g)', bookingInfo?.parcelInfo?.parcel_weight],
                ['Parcel Height (cm)', bookingInfo?.parcelInfo?.parcel_height],
                ['Shipping Cost', bookingInfo?.parcelInfo?.shippingCost],
            ],
        });

        // Add thank you note
        pdf.setFontSize(12);
        pdf.text("Thank you for choosing PrerokGlobal!", 105, pdf.internal.pageSize.height - 20, { align: 'center' });

        // Save the PDF
        pdf.save('invoice.pdf');
    };

    return (
        <div>
            <button onClick={handleDownload} className="btn bg-amber-500 border-none font-semibold text-white hover:text-black h-10">
                Download Invoice
            </button>
        </div>
    );
};

export default PDFGenerator;
