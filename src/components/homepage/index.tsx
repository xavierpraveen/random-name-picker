"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Confetti from "react-confetti";

export const Home = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [isDisable, setisDisable] = useState(false);
  const [windowSize, setWindowSize] = useState<{
    height: number | undefined;
    width: number | undefined;
  }>({
    height: undefined,
    width: undefined,
  });

  const handleWindowSize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.onresize = () => handleWindowSize();
    showSelect &&
      setTimeout(() => {
        setShowSelect(false);
      }, 8000);
  }, [showSelect]);

  const mockData = {
    id: "1224",
    name: "vishnu",
    sex: "man",
    level: "beginner",
    status: 0,
  };

  return (
    <div className="flex flex-col h-screen">
      {showSelect ? (
        <Confetti width={windowSize.width} height={windowSize.height} />
      ) : (
        <></>
      )}

      {/* header */}
      <header className="bg-orange-500 h-20 flex items-center justify-center">
        <h1 className="text-black font-bold text-2xl">
          Calibraint Sports Team Selection
        </h1>
      </header>

      {/* Body */}
      <div className="flex flex-row flex-grow">
        <div className="flex-1 flex items-center justify-center">
          <div>
            {mockData.sex === "man" ? (
              <Image src={"/men.gif"} width={800} height={800} alt="men" />
            ) : (
              <Image src={"/woman.gif"} width={500} height={500} alt="woman" />
            )}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="text-black font-bold text-8xl my-8">
            {mockData.name}
          </div>
          <div className="text-black font-bold text-8xl my-8">
            {mockData.id}
          </div>
          <div className="text-black font-bold text-8xl my-8">
            {mockData.level}
          </div>
        </div>
      </div>

      <div className="h-52 flex items-center justify-between">
        <div className="flex justify-center flex-1">
          <button
            className={`h-32 w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              isDisable ? "opacity-50" : ""
            }`}
            onClick={() => {
              setShowSelect(true);
              setisDisable(true);
            }}
            disabled={isDisable}
          >
            <span className="text-white font-bold text-6xl ">sold</span>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <button
            className={`h-12 w-32 bg-transparent border border-black hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded mr-8 ${
              isDisable ? "opacity-50" : ""
            }`}
            disabled={isDisable}
          >
            Skip
          </button>

          <button
            className={`h-12 w-32 bg-transparent border border-black hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded mr-8`}
            onClick={() => {
              setisDisable(false);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
