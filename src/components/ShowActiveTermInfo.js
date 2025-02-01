import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ShowActiveTermInfo = ({
	activeTermInfoIndex,
	setActiveTermInfoIndex,
	termInfo,
}) => {
	return (
		<div className="w-7/12 h-auto mx-auto flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl md:w-7/12 md:h-auto">
			<div className="w-full flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl ">
				<img
					src={termInfo[activeTermInfoIndex].termImage}
					className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
					alt="Term Illustration"
				/>
				<div className="w-full md:w-1/2">
					<h2 className="text-lg font-bold text-gray-800">Description:</h2>
					<p className="text-sm text-gray-700 text-justify">{termInfo[activeTermInfoIndex].termDescription}</p>
				</div>
			</div>

			<div className="w-full flex justify-center items-center gap-6 mt-4">
				<button
					disabled={activeTermInfoIndex === 0}
					onClick={() => setActiveTermInfoIndex(activeTermInfoIndex - 1)}
					className="text-blue-500 cursor-pointer hover:text-blue-700 disabled:text-gray-400">
					<IoIosArrowBack className="w-7 h-7" />
				</button>
				<p className="text-gray-800 font-semibold">
					{activeTermInfoIndex + 1} / {termInfo.length}
				</p>
				<button
					disabled={activeTermInfoIndex === termInfo.length - 1}
					onClick={() => setActiveTermInfoIndex(activeTermInfoIndex + 1)}
					className="text-blue-500 cursor-pointer hover:text-blue-700 disabled:text-gray-400">
					<IoIosArrowForward className="w-7 h-7" />
				</button>
			</div>
		</div>
	);
};

export default ShowActiveTermInfo;
