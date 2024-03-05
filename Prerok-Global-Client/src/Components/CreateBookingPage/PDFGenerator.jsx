import jsPDF from 'jspdf';
import 'jspdf-autotable';


const PDFGenerator = ({ bookingInfo }) => {
  const bgColor = [255, 193, 7];
  const handleDownload = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // pdf heading
    pdf.setFontSize(15);
    pdf.text(
      "Thank you for choosing PrerokGlobal",
      pdf.internal.pageSize.width / 2,
      10,
      { align: "center" }
    );
    
    pdf.setFontSize(10);
    pdf.text(
      `TrackingID: ${bookingInfo?.trackingID}`,
      pdf.internal.pageSize.width / 2,
      15,
      { align: "center" }
    );

    // table for from address
    pdf.autoTable({
      startY: 25, // Adjusted startY value
      head: [["From Address", ""]],
      body: [
        ["Name:", bookingInfo?.fromAddress?.from_name],
        ["Email:", bookingInfo?.fromAddress?.from_email],
        ["Phone:", bookingInfo?.fromAddress?.from_phone],
        ["Postal Code:", bookingInfo?.fromAddress?.from_postal_code],
        ["Country:", bookingInfo?.fromAddress?.from_country],
      ],
      headStyles: { fillColor: bgColor },
      styles: { textColor: [0, 0, 0] },
    });

    // table for to address
    pdf.autoTable({
      startY: pdf.autoTable.previous.finalY + 10, // Adjusted startY value
      head: [["To Address", ""]],
      body: [
        ["Name:", bookingInfo?.toAddress?.to_name],
        ["Email:", bookingInfo?.toAddress?.to_email],
        ["Phone:", bookingInfo?.toAddress?.to_phone],
        ["Postal Code:", bookingInfo?.toAddress?.to_postal_code],
        ["Country:", bookingInfo?.toAddress?.to_country],
      ],
      headStyles: { fillColor: bgColor },
      styles: { textColor: [0, 0, 0] },
    });

    // table for parcel info
    pdf.autoTable({
      startY: pdf.autoTable.previous.finalY + 10, // Adjusted startY value
      head: [["Payment Information", ""]],
      body: [
        ["Payment Amount:", `$${bookingInfo?.paymentInfo?.amount}`],
        ["Payment Date:", bookingInfo?.paymentInfo?.date],
        ["Transaction ID:", bookingInfo?.paymentInfo?.transactionId],
        ["Payment Name:", bookingInfo?.paymentInfo?.name],
        ["Payment Email:", bookingInfo?.paymentInfo?.email],
        ["Payment Status:", bookingInfo?.paymentInfo?.status],
      ],
      headStyles: { fillColor: bgColor },
      styles: { textColor: [0, 0, 0] },
    });

    // table for payment info
    pdf.autoTable({
      startY: pdf.autoTable.previous.finalY + 10, // Adjusted startY value
      head: [["Parcel Information", ""]],
      body: [
        ["Packaging Type:", bookingInfo?.parcelInfo?.packaging_type],
        ["Shipping Method:", bookingInfo?.parcelInfo?.shipping_method],
        ["Parcel Weight:", `${bookingInfo?.parcelInfo?.parcel_weight} gram`],
        ["Parcel Height:", `${bookingInfo?.parcelInfo?.parcel_height} cm`],
        ["Shipping Cost:", bookingInfo?.parcelInfo?.shippingCost],
      ],
      headStyles: { fillColor: bgColor },
      styles: { textColor: [0, 0, 0] },
    });

    pdf.save("prerok_global_invoice.pdf");
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="btn bg-amber-500 border-none font-semibold text-white hover:text-black h-10"
      >
        Download Invoice
      </button>
    </div>
  );
};

export default PDFGenerator;
