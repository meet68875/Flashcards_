import "jspdf-autotable";
import React from "react";
import { LiaShareSolid } from "react-icons/lia";
import { SlCloudDownload, SlPrinter } from "react-icons/sl";
import { useGeneratePdf } from "../hooks/useGeneratePdf";
import toast from "react-hot-toast";

const SharePrintDownloadComponent = ({ singleFlashCardData, setShowModal }) => {
	const flashCardPdf = useGeneratePdf(singleFlashCardData.flashCardsData);

	return (
		<div
			data-testid="test-share-print-download-component"
			className="w-full flex flex-wrap md:flex-col gap-2 p-2 mt-5 md:gap-5 md:mt-0">
			
			<button
				data-testid="test-share-btn"
				onClick={() => setShowModal(true)}
				className="w-[30%] md:w-full h-10 flex items-center justify-center gap-2 
				bg-blue-500 md:bg-white text-white md:text-black cursor-pointer 
				rounded-xl transition-all duration-300 ease-in-out 
				md:hover:bg-blue-500 md:hover:text-white">
				<LiaShareSolid className="hidden lg:block text-2xl font-bold" />
				<span className="text-sm md:text-lg font-bold">Share</span>
			</button>

			<button
				data-testid="test-download-btn"
				onClick={() => {
					toast.promise(
						flashCardPdf.save("flashcard.pdf", { returnPromise: true }),
						{
							error: "Something went wrong!",
							loading: "Downloading...",
							success: "Downloaded successfully!",
						}
					);
				}}
				className="w-[30%] md:w-full h-10 flex items-center justify-center gap-2 
				bg-blue-500 md:bg-white text-white md:text-black cursor-pointer 
				rounded-xl transition-all duration-300 ease-in-out 
				md:hover:bg-blue-500 md:hover:text-white">
				<SlCloudDownload className="hidden lg:block text-2xl font-bold" />
				<span className="text-sm md:text-lg font-bold">Download</span>
			</button>

				<button
				data-testid="test-print-btn"
				onClick={() => {
					window.open(flashCardPdf.output("bloburl"), "_blank");
				}}
				className="w-[30%] md:w-full h-10 flex items-center justify-center gap-2 
				bg-blue-500 md:bg-white text-white md:text-black cursor-pointer 
				rounded-xl transition-all duration-300 ease-in-out 
				md:hover:bg-blue-500 md:hover:text-white">
				<SlPrinter className="hidden lg:block text-2xl font-bold" />
				<span className="text-sm md:text-lg font-bold">Print</span>
			</button>
		</div>
	);
};

export default SharePrintDownloadComponent;
