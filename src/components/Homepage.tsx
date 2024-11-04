"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import port_image from "./assets/my portfolio main pic.jpg";

const PortfolioPage: React.FC = () => {
  const [text, setText] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        Passionate software developer with expertise in React and .NET, and hands-on experience in Python, Java, and MongoDB. Dedicated to practical skills and continuous learning, eager to make impactful contributions in tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          {/* <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl" />
            <div className="px-6 md:px-8 py-2 rounded-lg relative group transition duration-200 text-white hover:bg-transparent">
              Hire Me
            </div>
          </button> */}
          <HireMeButton/>

          <a className="" href="cv.pdf" download>
          <button className="p-[3px] relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl" />
            <div className="px-6 md:px-8 py-2 bg-black rounded-[20px] relative group transition duration-200 text-white hover:bg-transparent">
              Download CV
            </div>
          </button>
          </a>
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


const HireMeButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex justify-center">
      <div className="w-full">
      <button
          onClick={openModal}
       className="p-[3px] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl" />
            <div className="px-6 md:px-8 py-2 rounded-lg relative group transition duration-200 text-white hover:bg-transparent">
              Hire Me
            </div>
          </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Connect with Me</h2>
                <button
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-2">Check out my LinkedIn profile:</p>
                  <a
                    href="https://www.linkedin.com/in/yogesh-hingorani-b19307243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 underline inline-block"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Or contact me directly:</p>
                  <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=yogi.hingorani21@gmail.com"
                        target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 underline inline-block"
                  >
                    Email Me
                  </a>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-300"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default PortfolioPage;