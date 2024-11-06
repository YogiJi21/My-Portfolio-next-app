"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import abt_image from "./assets/aesthetic-anime-character-gaming.jpg";

import Projectlist from "@/components/Accordion";
export default function TabsDemo() {
  const [isMounted, setIsMounted] = useState(false);
  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full h-[500px] overflow-hidden relative  rounded-2xl p-5 lg:h-[500px] text-white bg-[#161515]">
          <SkillsRating/>
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

const SkillsRating = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const skills = [
    { name: 'TypeScript', rating: 8 },
    { name: 'JavaScript', rating: 9 },
    { name: 'Python', rating: 9 },
    { name: 'React JS', rating: 9 },
    { name: 'NodeJS', rating: 8 },
    { name: 'C/C++', rating: 8 },
    { name: 'Java', rating: 9 },
    { name: 'MongoDB', rating: 8 },
    { name: 'SQL', rating: 8 },
    { name: '.Net', rating: 8 },
    { name: 'HTML', rating: 9 },
    { name: 'CSS', rating: 9 },
    { name: 'Communication skills', rating: 10 }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
<div className="w-full max-w-xl p-2 lg:px-6 lg:py-1 space-y-4 h-[470px] overflow-y-auto lg:scrollbar-hide">

    {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm font-medium">{skill.rating}/10</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? `${(skill.rating / 10) * 100}%` : '0%',
                transitionDelay: `${index * 100}ms`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
