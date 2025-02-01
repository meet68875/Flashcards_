import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { deleteFlashcard } from "../redux/flashcardReducers";
import { useDispatch } from "react-redux";

const RenderCard = ({ data, index }) => {
	const { groupInfo, termInfo } = data.flashCardsData;
	const dispatch = useDispatch();
	return (
		<div
			key={data.id}
			className="relative w-full h-[45%] flex flex-col justify-between shadow-lg mx-2 lg:mx-10 mt-10 shadow-blue-200 rounded-xl bg-white my-3 px-3 py-2 border-2 md:w-[45%] md:h-[50%] lg:w-1/4 lg:h-2/5">
			{index <= 2 ? (
				<>
					<img
						src={groupInfo.groupImage}
						className="w-20 h-20 rounded-full mx-auto absolute -top-10 left-1/2 transform -translate-x-1/2 shadow-md border-4 border-white"
						alt="Group"
					/>
					<div className="w-full flex flex-col items-center text-center mt-12">
						<h1 className="font-semibold text-lg truncate text-gray-800">{groupInfo.groupName}</h1>
						<p className="text-sm text-gray-600 mt-2 line-clamp-3">{groupInfo.groupDescription}</p>
						<span className="mt-2 text-gray-700 font-medium">{termInfo.length} Cards</span>
						<Link
							to={`/show/${data.id}`}
							className={`mt-4 px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all`}>View Cards</Link>
					</div>
				</>
			) : (
				<>
					<div className="flex items-center gap-4">
						<img src={groupInfo.groupImage} className="w-16 h-16 rounded-full shadow-md" alt="Group" />
						<div>
							<h1 className="font-semibold text-lg truncate text-gray-800">{groupInfo.groupName}</h1>
							<span className="text-gray-700 font-medium">{termInfo.length} Cards</span>
						</div>
					</div>
					<p className="text-sm text-gray-600 mt-2 line-clamp-3">{groupInfo.groupDescription}</p>
					<Link
						to={`/show/${data.id}`}
						className={`mt-3 flex items-center text-blue-500 hover:text-blue-500 transition-all duration-200 ease-linear`}>
						<span className="font-semibold">View More</span>
						<IoIosArrowRoundForward className="w-6 h-6 ml-1" />
					</Link>
				</>
			)}
			<IoMdClose 	
				onClick={() => dispatch(deleteFlashcard(data.id))}
				className="text-blue-500 absolute -right-3 -top-3 w-8 h-8 cursor-pointer"
			/>
		</div>
	);
};

export default RenderCard;
