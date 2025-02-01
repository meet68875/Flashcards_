import React, { useState } from "react";
import { useSelector } from "react-redux";
import RenderCard from "./RenderCard";

const ShowAllCards = () => {
	const allFlashCardData = useSelector((state) => state.flashCard);

	const [showAllCards, setShowAllCards] = useState(false);

	const sliceAllFlashCardData = showAllCards
		? allFlashCardData
		: [...allFlashCardData.slice(0, 6)];

	return (
		<div className="w-full h-full flex flex-wrap lg:justify-center">
			{sliceAllFlashCardData.map((data, index) => (
				<RenderCard key={data.id} data={data} index={index}></RenderCard>
			))}

			<button
				onClick={() => setShowAllCards(!showAllCards)}
				className={
					"w-full lg:w-11/12 p-4 text-lg md:text-right text-blue-500 hover:text-blue-700 font-bold " +
					(allFlashCardData.length <= 6 ? "hidden" : "")
				}>
				{showAllCards ? "See Less" : "See All"}
			</button>
		</div>
	);
};

export default ShowAllCards;
