"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Modal = ({
  closeModal,
  handleOutsideClick,
  setUserPercentile,
  setChartKey,
  setRank,
  setCorrectAnswer,
}) => {
  // Temporary states for input fields
  const [tempUserPercentile, setTempUserPercentile] = useState("30");
  const [tempCorrectAnswer, setTempCorrectAnswer] = useState("10");
  const [tempRank, setTempRank] = useState("1");

  // State for errors
  const [errors, setErrors] = useState({
    userPercentile: "",
    correctAnswer: "",
    rank: "",
  });

  // Load initial values from localStorage
  useEffect(() => {
    const storedUserPercentile = localStorage.getItem("userPercentile");
    const storedCorrectAnswer = localStorage.getItem("correctAnswer");
    const storedRank = localStorage.getItem("rank");

    setUserPercentile(storedUserPercentile ? Number(storedUserPercentile) : 30);
    setCorrectAnswer(storedCorrectAnswer ? Number(storedCorrectAnswer) : 10);
    setRank(storedRank ? Number(storedRank) : 1);

    // Initialize temporary states
    setTempUserPercentile(storedUserPercentile || "30");
    setTempCorrectAnswer(storedCorrectAnswer || "10");
    setTempRank(storedRank || "1");
  }, []);

  // Validation function
  const validateInput = (name, value) => {
    if (value.trim() === "") {
      return "Required, should be a number";
    }

    const numValue = Number(value);

    switch (name) {
      case "userPercentile":
        if (isNaN(numValue) || numValue < 0 || numValue > 100) {
          return "Value must be a number between 0 and 100";
        }
        break;
      case "correctAnswer":
        if (isNaN(numValue) || numValue < 0 || numValue > 15) {
          return "Value must be a number between 0 and 15";
        }
        break;
      case "rank":
        if (isNaN(numValue) || numValue < 1 || numValue > 5) {
          return "Value must be a number between 1 and 5";
        }
        break;
      default:
        break;
    }

    return "";
  };

  // Handle input changes with validation
  const handleInputChange = (name, value, setTempValue) => {
    setTempValue(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const isValid =
      !errors.userPercentile &&
      !errors.correctAnswer &&
      !errors.rank &&
      tempUserPercentile.trim() &&
      tempCorrectAnswer.trim() &&
      tempRank.trim();

    if (isValid) {
      setUserPercentile(Number(tempUserPercentile));
      setCorrectAnswer(Number(tempCorrectAnswer));
      setRank(Number(tempRank));

      localStorage.setItem("userPercentile", tempUserPercentile);
      localStorage.setItem("correctAnswer", tempCorrectAnswer);
      localStorage.setItem("rank", tempRank);
      setChartKey((prevKey) => prevKey + 1);
      closeModal();
    } else {
      alert("Please fix validation errors before submitting.");
    }
  };

  return (
    <div>
      <div
        className="z-[1000000] modal-overlay fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center"
        onClick={handleOutsideClick}
      >
        <div
          className=" modal-content bg-white p-6 rounded  w-full lg:max-w-[650px]"
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
              <div className="flex flex-col  space-y-2">
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={tempRank}
                  onChange={(e) =>
                    handleInputChange("rank", e.target.value, setTempRank)
                  }
                  className={`border p-2 rounded lg:w-52 w-full text-center ${
                    errors.rank ? "border-red-500" : "border-blue-800"
                  }`}
                />
                {errors.rank && (
                  <p className="text-red-500 text-[10px]">{errors.rank}</p>
                )}
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
              <div className="flex flex-col space-y-2">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={tempUserPercentile}
                  onChange={(e) =>
                    handleInputChange(
                      "userPercentile",
                      e.target.value,
                      setTempUserPercentile
                    )
                  }
                  className={`border p-2 rounded lg:w-52 w-full text-center ${
                    errors.userPercentile ? "border-red-500" : "border-blue-800"
                  }`}
                />
                {errors.userPercentile && (
                  <p className="text-red-500 text-[10px]">
                    {errors.userPercentile}
                  </p>
                )}
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
              <div className="flex flex-col  space-y-2">
                <input
                  type="number"
                  min="0"
                  max="15"
                  value={tempCorrectAnswer}
                  onChange={(e) =>
                    handleInputChange(
                      "correctAnswer",
                      e.target.value,
                      setTempCorrectAnswer
                    )
                  }
                  className={`border p-2 rounded lg:w-52 w-full text-center ${
                    errors.correctAnswer ? "border-red-500" : "border-blue-800"
                  }`}
                />
                {errors.correctAnswer && (
                  <p className="text-red-500 text-[10px]">
                    {errors.correctAnswer}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => closeModal()}
                className="bg-white text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-md font-bold flex items-center"
              >
                {" "}
                cancel{" "}
              </button>
              <button
                onClick={handleSubmit}
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
