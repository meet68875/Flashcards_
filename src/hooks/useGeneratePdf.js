import jsPDF from "jspdf";

export const useGeneratePdf = (flashCardData) => {
	const pdf = new jsPDF();

	const imgData = flashCardData.groupInfo.groupImage;

	pdf.addImage(imgData, "JPEG", 15, 50, 40, 40);

	pdf.setTextColor(0, 123, 255);
	pdf.setFontSize(22);
	pdf.text(20, 20, "Flash Cards PDF");

	pdf.setTextColor(0, 0, 0);

	pdf.setFontSize(14);

	pdf.text(20, 30, `Group Name: ${flashCardData.groupInfo.groupName}`);
	pdf.text(20, 40, `Group Description: ${flashCardData.groupInfo.groupDescription}`);

	pdf.autoTable({
		startY: 100,
		head: [["Term Name", "Description"]],
		body: flashCardData.termInfo.map((term) => [
			term.termName,
			term.termDescription,
		]),
		theme: "grid",
		styles: { halign: "center" },
		headStyles: { fillColor: [0, 123, 255] },
		alternateRowStyles: { fillColor: [220, 240, 255] },
		tableLineColor: [0, 123, 255],
		tableLineWidth: 0.3,
	});

	return pdf;
};
