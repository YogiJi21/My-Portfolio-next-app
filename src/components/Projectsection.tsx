"use client";

import React from 'react'
import  ThreeDCardDemo  from './ThreeDCardDemo';
import ecotracImage from './assets/Ecotrac.png';
import tourifyImage from './assets/tourify.png';
import zammyImage from './assets/zammy.png';
import multiplexImage from './assets/multiplex.png';
export default function ProjectSection() {

  const projectsData = [
    {
      id: 1,
      title: "Eco - Tracker React App",
      brief: "Eco Tracker Web Application based on MERN stack: It basically calculates carbon emission of your daily activities and also provide suggestions to Reduce CO2 footprint.",
      imageSrc: ecotracImage,
      detailsLink: "https://twitter.com/mannupaaji",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Tourify",
      brief: "Developed a comprehensive tourism website offering features like hotel search, bookings, virtual tours, flight bookings and   user-submitted local stories with the help Google API.",
      imageSrc: tourifyImage,
      detailsLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Zammy News",
      brief: "Designed a website using React Framework and Google's news API displaying current news on sub-topics listed in nav-bar.",
      imageSrc: zammyImage,
      detailsLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Multiplex Management System",
      brief: "Developed a Project using .NET utilizing MySQL for data management. Specializes in developing efficient and user-friendly solutions with a focus on security and performance optimization.",
      imageSrc: multiplexImage,
      detailsLink: "#",
      githubLink: "#"
    },
  ];

  return (
    <div className="min-h-screen">
      <h1 className="tracking-wider text-center text-3xl md:text-4xl lg:text-3xl font-semibold md:py-8 lg:py-5">
        My Projects
      </h1>
      <div className="grid lg:w-[90%] lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projectsData.map((project) => (
          <ThreeDCardDemo
            key={project.id}
            title={project.title}
            brief={project.brief}
            imageSrc={project.imageSrc}
            detailsLink={project.detailsLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

 