"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { div } from "framer-motion/m";
import abt_image from "./assets/aesthetic-anime-character-gaming.jpg";
import { CardHoverEffectDemo } from "./CardHoverEffect";
import { StickyScrollRevealDemo } from "./StickyScrollReveal";
import Projectlist from "@/components/Accordion";
export default function TabsDemo() {
  const [isMounted, setIsMounted] = useState(false);
  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full h-[500px] overflow-hidden relative  rounded-2xl p-10 lg:h-[500px] text-white bg-[#161515]">
          <DummyContent />
          {/* <CardHoverEffectDemo/> */}
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full h-[500px] overflow-hidden relative  rounded-2xl lg:p-10 lg:h-[500px] text-white bg-[#161515] ">
          <EducationContent />
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full h-[500px] overflow-hidden relative rounded-2xl lg:p-10 lg:h-[500px] text-white bg-[#161515]">
          <Projectlist/>
        </div>
      ),
    },
   
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <div  className="lg:grid h-[1100px] lg:h-auto lg:grid-cols-[40%_60%]">
      {/* left side */}
      <div  className="lg:pt-2 lg:pb-8 relative">
        <Image
          className="hidden sm:block md:w-64 md:h-64 rounded-[20px] sticky lg:top-24 mx-auto lg:w-[70%] lg:h-auto object-cover "
          src={abt_image}
          alt="Portfolio image"
          width={1050}
          height={1050}
        />
      </div>
      {/* right side */}
      <div  className="grid grid-rows-auto">
        <h1  className="tracking-wider text-center text-3xl md:text-4xl lg:text-3xl font-semibold pb-6 md:py-8 sm:text-left lg:py-3 lg:px-7 ">
          About Me
        </h1>
        <p className="pb-8 px-7 lg:tracking-wider text-justify sm:text-left">
          Motivated and dedicated fresh graduate with a strong belief in
          the value of practical skills over academic marks. Proficient in
          developing projects using React framework and .NET
          technologies. Have learned Python, Java, C++, and backend
          development with MongoDB. Eager to apply my technical
          knowledge and hands-on project experience to contribute to a
          forward-thinking team in the tech industry. Committed to
          continuous learning and staying updated with the latest industry
          trends to deliver high-quality software solutions.
        </p>
        <div  className="h-[20rem] md:h-[40rem] px-7 [perspective:1000px] relative b flex flex-col w-full  items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>

    </div>
  );
}

const DummyContent = () => {
  return (
    // <div className="flex flex-wrap gap-4">
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">TypeScript</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">JavaScript</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">Python</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">React JS</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">NodeJS</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">C/C++</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">Java</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">MongoDB</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">SQL</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">.Net</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">Html</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">CSS</p>
    //   <p className="border-[1px] border-[#009688] px-2 py-1 rounded-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">Communication skills</p>
    // </div>
 <ul className="list-disc text-[.8rem] lg:text-[1rem] text-white space-y-2 pl-5">
  <li>TypeScript</li>
  <li>JavaScript</li>
  <li>Python</li>
  <li>React JS</li>
  <li>NodeJS</li>
  <li>C/C++</li>
  <li>Java</li>
  <li>MongoDB</li>
  <li>SQL</li>
  <li>.Net</li>
  <li>Html</li>
  <li>CSS</li>
  <li>Communication skills</li>
</ul> 


  );
};

const EducationContent = () => {
  return (
<div className="flex flex-col space-y-4">
  {/* Card 1: Masters */}
  <div className="bg-[#181717] shadow-lg rounded-lg p-6">
    <h2 className="text-xl font-semibold">VTU University</h2>
    <p className="">Bengaluru, IN</p>
    <p className="mt-2 ">Masters in Computer Application</p>
    <p className="">08/2024</p>
    <p className="mt-2 font-bold ">CGPA: 7.4</p>
  </div>

  {/* Card 2: Bachelors */}
  <div className="bg-[#181717]  shadow-lg rounded-lg p-6">
    <h2 className="text-xl font-semibold">Bangalore University</h2>
    <p className="">Bengaluru, IN</p>
    <p className="mt-2 ">Bachelor in Computer Application</p>
    <p className="">09/2020</p>
    <p className="mt-2 font-bold ">CGPA: 6.8</p>
  </div>
</div>

  );
};
