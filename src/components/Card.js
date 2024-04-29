import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Card = ({ data, left, right, surprice }) => {
  return (
    <div>
      <div>
        <div className="w-[45vw] min-h-80 bg-slate-300 m-2 relative p-4 rounded-md">
          <img
            className="w-28 h-28 rounded-[50%] absolute top-[-50px] left-3 border-t-8 border-r-8 border-violet-600"
            src={data.image}
            alt="dd"
          ></img>
          <div className="flex justify-center items-center flex-col">
            <p className="text-center font-bold text-2xl mt-[40px]">
              {data.name}
            </p>
            <p className="text-[18px] text-violet-700 font-semibold text-center">
              {data.job}
            </p>
            <div className="p-3 text-violet-900 text-2xl">
              <FaQuoteLeft />
            </div>
            <p className="text-black text-center font-medium ">{data.text}</p>
            <div className="p-3 text-violet-900 text-2xl">
              <FaQuoteRight />
            </div>
            <div className="flex justify-center items-center">
              <span
                className="p-3 text-violet-900 text-2xl mr-10 cursor-pointer"
                onClick={() => left()}
              >
                <FaChevronLeft />
              </span>
              <span
                className="p-3 text-violet-900 text-2xl  cursor-pointer ml-10 "
                onClick={() => right()}
              >
                <FaChevronRight />
              </span>
            </div>
            <button
              className="px-4 py-2 bg-violet-600 rounded-md text-white font-medium hover:bg-violet-900 m-4"
              onClick={() => surprice()}
            >
              SURPRISE ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
