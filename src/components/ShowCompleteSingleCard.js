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
    <div id="printpdf" className="w-full h-full md:overflow-hidden bg-gray-50">
      {showModal && <Model setShowModal={setShowModal} />}

      <div className="flex flex-col h-[32%] w-full md:h-[18%] items-center md:gap-3">
        <h1 className="text-lg w-full h-1/2 flex items-center gap-3 md:text-2xl font-bold">
          <IoIosArrowRoundBack
            onClick={() => navigate("/show")}
            className="w-10 h-10 text-gray-400 cursor-pointer hover:text-blue-500"
          />
          <span className="text-gray-800">Group Name:</span>{" "}
          <span>{groupInfo.groupName}</span>
        </h1>
        <p className="w-[92%] h-3/4 mx-auto overflow-hidden md:h-4/5 text-sm md:text-base">
          <span className="text-gray-800 font-semibold">Description:</span>{" "}
          {groupInfo.groupDescription}
        </p>
      </div>

      <div className="w-full h-[85%] flex flex-wrap py-4 md:gap-5">
        <div className="w-4/12 h-1/2 mx-auto p-2 flex flex-col gap-2 bg-white rounded-xl text-gray-500 md:w-2/12 md:h-3/4 md:py-2 md:px-4">
          <div className="flex flex-col gap-2 w-full h-[10%]">
            <h1 className="text-sm w-full h-fit font-bold md:text-base">
              Flashcards
            </h1>
            <hr className="shadow-2xl shadow-gray-500 rounded-full bg-transparent" />
          </div>

          <div className="w-full h-[90%] flex flex-col gap-4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-thumb-rounded-full">
            {termInfo.map((term, index) => (
              <p
                onClick={() => setActiveTermInfoIndex(index)}
                className={
                  "cursor-pointer w-full text-[12px] truncate hover:text-blue-500 my-1 lg:text-base " +
                  (activeTermInfoIndex === index
                    ? " text-blue-500 font-bold"
                    : " text-black")
                }
                key={index}
              >
                {term.termName}
              </p>
            ))}
          </div>
        </div>

        <ShowActiveTermInfo
          activeTermInfoIndex={activeTermInfoIndex}
          setActiveTermInfoIndex={setActiveTermInfoIndex}
          termInfo={termInfo}
        />

        <SharePrintDownloadComponent
          singleFlashCardData={singleFlashCardData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default ShowCompleteSingleCard;
