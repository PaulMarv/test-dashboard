"use client";

import Image from "next/image";
import React, { useState } from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useMediaQuery } from "react-responsive";
import DynamicPercentileGraph from "./line-chart";
import { Modal } from "@/components/Modal";

const SkillTest = () => {
  const isSmallDevice = useMediaQuery({ query: "(min-width: 640px)" });
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeDevice = useMediaQuery({ query: "(min-width: 1024px)" });

  const [averagePercentile, setAveragePercentile] = useState(72);
  const [userPercentile, setUserPercentile] = useState(30);

  const [correctAnswer, setCorrectAnswer] = useState(10);
  const [rank, setRank] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartKey, setChartKey] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <section className="w-full">
      <p>Skill Test</p>
      <div className="mt-4 flex flex-col lg:flex-row justify-between gap-5  w-full">
        <section className="flex flex-col gap-4">
          <div className="rounded-lg p-4 border-[1px] border-slate-200 w-full lg:max-w-[600px] flex  justify-between items-center gap-3">
            <span>
              <Image src="/html-5.png" height={50} width={50} alt="" />
            </span>
            <div>
              <p className="font-bold ">Hyper Text Markup Language</p>
              <p className="mt-2 text-slate-400">
                Questions: 08 | Duration: 15 mins | Submitted on June 21 2024{" "}
              </p>
            </div>
            <div>
              <button
                className="bg-blue-900 text-white border-2 border-black px-4 py-2 rounded-md font-bold"
                onClick={openModal}
              >
                Update
              </button>
              {isModalOpen && (
                <Modal
                  closeModal={closeModal}
                  handleOutsideClick={handleOutsideClick}
                  setUserPercentile={setUserPercentile}
                  userPercentile={userPercentile}
                  correctAnswer={correctAnswer}
                  setCorrectAnswer={setCorrectAnswer}
                  setChartKey={setChartKey}
                  rank={rank}
                  setRank={setRank}
                />
              )}
            </div>
          </div>

          <div className="rounded-lg p-4 border-[1px] border-slate-200 w-full lg:max-w-[600px]">
            <p className="font-bold ">Quick Statistics</p>
            <div className="flex flex-col lg:flex-row justify-between">
              <div
                className={`lg:border-r-[1px] pr-4 border-slate-200 flex gap-3 mt-2`}
              >
                <span className="h-[40px] w-[40px] rounded-full bg-slate-200 justify-center items-center flex">
                  <Image
                    src="/trophy-award.png"
                    height={20}
                    width={20}
                    alt=""
                  />
                </span>
                <div>
                  <p className="text-[20px] font-bold">{rank}</p>
                  <p className="mt-2 text-slate-400">YOUR RANK</p>
                </div>
              </div>
              <div className="lg:border-r-[1px] pr-4 border-slate-200 flex gap-3 mt-2">
                <span className="h-[40px] w-[40px] rounded-full bg-slate-200 justify-center items-center flex">
                  <Image src="/clipboard.png" height={20} width={20} alt="" />
                </span>
                <div>
                  <p className="text-[20px] font-bold">{userPercentile}%</p>
                  <p className="mt-2 text-slate-400">PERCENTILE</p>
                </div>
              </div>
              <div className=" pr-4 flex gap-3 mt-2">
                <span className="h-[40px] w-[40px] rounded-full bg-slate-200 justify-center items-center flex">
                  <Image src="/check.png" height={20} width={20} alt="" />
                </span>
                <div>
                  <p className="text-[20px] font-bold">{correctAnswer}/15</p>
                  <p className="mt-2 text-slate-400">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4 border-[1px] border-slate-200 w-full lg:max-w-[600px]">
            <p className="font-bold">Comparison Graphs</p>
            <div className="flex justify-between mt-4 gap-4">
              <p className="text-wrap flex-1">
                <strong> You scored {userPercentile}% percentile</strong>, which
                is {userPercentile < averagePercentile ? "lower" : "higher"}{" "}
                than the average {averagePercentile}% percentile of all
                engineers who took this assessment.
              </p>
              <span className="h-[40px] w-[40px] rounded-full bg-slate-200 justify-center items-center flex">
                <Image src="/downtrend.png" height={20} width={20} alt="" />
              </span>
            </div>
            <div>
              <DynamicPercentileGraph
                averagePercentile={averagePercentile}
                userPercentile={userPercentile}
                setUserPercentile={setUserPercentile}
                chartKey={chartKey}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="rounded-lg p-4 border-[1px] border-slate-200 w-full lg:max-w-[400px] ">
            <p className="font-bold">Syllabus Wise Analysis</p>
            <div className="mt-6 flex flex-col gap-3 w-full">
              <div>
                <p>HTML Tools, Forms, History</p>
                <span className="flex gap-3 items-center">
                  <ProgressBar
                    isLabelVisible={false}
                    height="10px"
                    bgColor="#349beb"
                    completed={80}
                    width={isLargeDevice ? "300px" : "200px"}
                  />
                  <span className="text-[#349beb] font-bold">80%</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 w-full">
              <div>
                <p>Tags & References in HTML</p>
                <span className="flex gap-3  items-center">
                  <ProgressBar
                    isLabelVisible={false}
                    height="10px"
                    bgColor="#ff8f17"
                    completed={60}
                    width={isLargeDevice ? "300px" : "200px"}
                  />
                  <span className="text-[#ff8f17] font-bold">60%</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 w-full">
              <div>
                <p>Tables & References in HTML</p>
                <span className="flex gap-3  items-center">
                  <ProgressBar
                    isLabelVisible={false}
                    height="10px"
                    bgColor="#f52765"
                    completed={24}
                    width={isLargeDevice ? "300px" : "200px"}
                  />
                  <span className="text-[#f52765] font-bold">24%</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 w-full">
              <div>
                <p>Tables & CSS Basics</p>
                <span className="flex gap-3 items-center">
                  <ProgressBar
                    isLabelVisible={false}
                    height="10px"
                    bgColor="#28b55c"
                    completed={96}
                    width={isLargeDevice ? "300px" : "200px"}
                  />
                  <span className="text-[#28b55c] font-bold">96%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4 border-[1px] border-slate-200 w-full lg:max-w-[400px] ">
            <div className="flex justify-between">
              <p className="font-bold ">Question Analysis</p>
              <span className="font-bold text-blue-700">
                {correctAnswer}/15
              </span>
            </div>
            <p className="text-wrap flex-1">
              <span>You scored 12 question correct out of 15</span>. However, it
              still needs some improvements
            </p>

            <div className="mt-4 flex justify-center">
              <div className="h-[150px] w-[150px] relative">
                <CircularProgressbar
                  value={(correctAnswer / 15) * 100}
                  strokeWidth={15}
                  counterClockwise={true}
                  styles={{
                    path: {
                      stroke: `#0384fc`,
                      strokeLinecap: "butt",
                    },
                  }}
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src="/target.png" height={30} width={30} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SkillTest;
