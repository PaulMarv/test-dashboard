"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Modal = ({
  closeModal,
  handleOutsideClick,
  setUserPercentile,
  userPercentile,
  setChartKey,
  setRank,
  rank,
  correctAnswer,
  setCorrectAnswer,
}) => {
  const handleUserChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 100) {
      setUserPercentile(value);
      setChartKey((prevKey) => prevKey + 1); // Trigger chart re-render
    }
  };
  const handleRankChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setRank(value);
  };
  const handleAnswerChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 15) {
      setCorrectAnswer(value);
    }
  };
  return (
    <div>
      <div
        className="z-[1000000] modal-overlay fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center"
        onClick={handleOutsideClick}
      >
        <div
          className=" modal-content bg-white p-6 rounded  w-full lg:max-w-[600px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between">
              <p className="font-bold text-2xl">Update Scores</p>
              <span>
                <Image src="/html-5.png" height={40} width={40} alt="" />
              </span>
            </div>
            <div className="flex justify-between flex-col lg:flex-row mt-6">
              <div className="flex gap-3 items-center">
                <span className="rounded-full h-[30px] w-[30px] bg-blue-800 text-white font-bold text-center flex items-center justify-center">
                  1
                </span>
                <span>
                  Update your <strong>Rank</strong>
                </span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={rank}
                  onChange={handleRankChange}
                  className="border border-blue-800 p-2 rounded lg:w-36 w-full text-center"
                />
              </div>
            </div>

            <div className="flex justify-between flex-col lg:flex-row mt-6">
              <div className="flex gap-3 items-center">
                <span className="rounded-full h-[30px] w-[30px] bg-blue-800 text-white font-bold text-center flex items-center justify-center">
                  2
                </span>
                <span>
                  Update your <strong> Percentile</strong>
                </span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={userPercentile}
                  onChange={handleUserChange}
                  className="border border-blue-800 p-2 rounded lg:w-36 w-full text-center"
                />
              </div>
            </div>

            <div className="flex justify-between flex-col lg:flex-row mt-6">
              <div className="flex gap-3 items-center">
                <span className="rounded-full h-[30px] w-[30px] bg-blue-800 text-white font-bold text-center flex items-center justify-center">
                  3
                </span>
                <span>
                  Update your <strong>Current Score (out of 15)</strong>
                </span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={correctAnswer}
                  onChange={handleAnswerChange}
                  className="border border-blue-800 p-2 rounded lg:w-36 w-full text-center"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button className="bg-white text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-md font-bold flex items-center">
                {" "}
                cancel{" "}
              </button>
              <button
                onClick={() => closeModal()}
                className="bg-blue-900 text-white px-4 py-2 rounded-md font-bold flex items-center"
              >
                Save{" "}
                <span className="ml-2">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
