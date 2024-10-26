"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import port_image from "./assets/my portfolio main pic.jpg";

const PortfolioPage: React.FC = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const textArray = ["Yogi", "Web Developer", "UI/UX Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

 


  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const typeText = async (fullText: string) => {
      setIsTyping(true);
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i));
        await sleep(100);
      }
      setIsTyping(false);
    };

    const eraseText = async (fullText: string) => {
      setIsTyping(true);
      for (let i = fullText.length; i >= 0; i--) {
        setText(fullText.slice(0, i));
        await sleep(50);
      }
      setIsTyping(false);
    };

    const animateText = async () => {
      const currentText = textArray[currentIndex];
      await typeText(currentText);
      await sleep(1500);
      await eraseText(currentText);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    };

    timeout = setTimeout(animateText, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] p-6 py-12 md:p-8 lg:p-24">
      <div className="left_side p-4 md:p-8 lg:p-12 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold py-6 md:py-8 lg:py-12">
          <strong className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Hello, I'm
          </strong>{" "}
          <br />
          <span>{text}</span>
          <span className="cursor"></span>
        </h1>
        <p className="text-white/60 text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit possimus et iste sequi minima, ullam, provident quis labore aliquid ipsam a assumenda. Provident iste blanditiis libero? Nesciunt a id unde.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl" />
            <div className="px-6 md:px-8 py-2 rounded-lg relative group transition duration-200 text-white hover:bg-transparent">
              Hire Me
            </div>
          </button>

          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl" />
            <div className="px-6 md:px-8 py-2 bg-black rounded-[20px] relative group transition duration-200 text-white hover:bg-transparent">
              Download CV
            </div>
          </button>
        </div>
      </div>
      <div className="right_side flex justify-center items-center mt-8 md:mt-0">
        <Image
          className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-[350px] lg:h-[350px]"
          src={port_image}
          alt="Portfolio image"
          width={350}
          height={350}
        />
      </div>
      <style jsx>{`
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: orangered;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;