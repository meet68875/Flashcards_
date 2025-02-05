import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Model from "./Model";
import SharePrintDownloadComponent from "./SharePrintDownloadComponent";
import ShowActiveTermInfo from "./ShowActiveTermInfo";

const ShowCompleteSingleCard = () => {
  const [activeTermInfoIndex, setActiveTermInfoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const allFlashCardData = useSelector((state) => state.flashCard);
  const [singleFlashCardData] = allFlashCardData.filter(
    (card) => card.id === Number(id)
  );

  const { groupInfo, termInfo } = singleFlashCardData.flashCardsData;

  return (
    <div id="printpdf" className="w-full h-full p-4 md:p-6 lg:p-8">
      {showModal && <Model setShowModal={setShowModal} />}

      <div className="flex flex-col w-full items-center space-y-1 md:space-y-2">
  <h1 className="text-lg w-full flex items-center gap-3 md:text-2xl font-bold">
    <IoIosArrowRoundBack
      onClick={() => navigate("/show")}
      className="w-10 h-10 text-gray-400 cursor-pointer hover:text-blue-500"
    />
    <span className="text-gray-800">Group Name:</span>{" "}
    <span>{groupInfo.groupName}</span>
  </h1>
  <p className="w-[92%] mx-auto text-sm md:text-base p-2 break-words whitespace-normal leading-tight">
    <span className="text-gray-800 font-semibold">Description:</span>{" "}
    {groupInfo.groupDescription}
  </p>
</div>


      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
        <div className="w-full md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-sm md:text-base font-bold">Flashcards</h1>
            <hr className="border-t-2 border-gray-200" />
          </div>

          <div className="mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full">
            {termInfo.map((term, index) => (
              <p
                onClick={() => setActiveTermInfoIndex(index)}
                className={`cursor-pointer text-sm md:text-base truncate my-1 hover:text-blue-500 ${
                  activeTermInfoIndex === index
                    ? "text-blue-500 font-bold"
                    : "text-black"
                }`}
                key={index}
              >
                {term.termName}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full md:w-4/5 lg:w-4/5">
          <ShowActiveTermInfo
            activeTermInfoIndex={activeTermInfoIndex}
            setActiveTermInfoIndex={setActiveTermInfoIndex}
            termInfo={termInfo}
          />
        </div>

        <div className="w-full  md:w-1/5 lg:w-1/5">
          <SharePrintDownloadComponent
            singleFlashCardData={singleFlashCardData}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCompleteSingleCard;
