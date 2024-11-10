"use client";

import React from 'react'
import  ThreeDCardDemo  from './ThreeDCardDemo';
import ecotracImage from './assets/Ecotrac.png';
import tourifyImage from './assets/tourify.png';
import portfolioImage from './assets/portfolio.png';
import zammyImage from './assets/zammy.png';
import multiplexImage from './assets/multiplex.png';
export default function ProjectSection() {

  const projectsData = [
    {
      id: 1,
      title: "My Portfolio Next App",
      brief: "Engineered a portfolio app deployed on Vercel, leveraging Next.js 15 for dynamic content, Next UI for design, and Acertainty UI for an engaging user experience. This app highlights personal projects and enables easy access to a downloadable resume, contact nfo, and social links.",
      imageSrc: portfolioImage,
      detailsLink: "https://github.com/YogiJi21/My-Portfolio-next-app/blob/da9a2587c849662b5d2115952f637697a1609fdb/README.md",
      githubLink: "https://github.com/YogiJi21/My-Portfolio-next-app.git"
    },
    {
      id: 2,
      title: "Tourify",
      brief: "Led the development of a comprehensive tourism platform using the Google API, incorporating features such as hotel search, virtual tours, and flight bookings, enhancing user engagement through interactive travel stories.",
      imageSrc: tourifyImage,
      detailsLink: "https://github.com/YogiJi21/Tourify-React-App/blob/70194211844e420aeccb0bd3d2789877d12b0de1/README.md",
      githubLink: "https://github.com/YogiJi21/Tourify-React-App.git"
    },
    {
      id: 3,
      title: "Eco - Tracker React App",
      brief: "Developed a MERN-based Eco Tracker app that calculates carbon emissions from daily activities and recommends actionable steps to reduce the carbon footprint. ",
      imageSrc: ecotracImage,
      detailsLink: "https://github.com/YogiJi21/Eco-Tracker-React-App/blob/8f31d3fddca75dd64cc94c6435ae836c5a6d3f20/README.md",
      githubLink: "https://github.com/YogiJi21/Eco-Tracker-React-App.git"
    },
    {
      id: 4,
      title: "Zammy News",
      brief: "Developed a news website using React and Google News API, displaying real-time news updates by category, improving user engagement with topical news content.",
      imageSrc: zammyImage,
      detailsLink: "https://github.com/YogiJi21/Zammy-News-React-App/blob/920f5d2f5df5d12a10a110e8614480eb9c24edee/README.md",
      githubLink: "https://github.com/YogiJi21/Zammy-News-React-App.git"
    },
    {
      id: 5,
      title: "Multiplex Management System",
      brief: "Engineered a multiplex management system in .NET, utilizing MySQL for optimized data management with enhanced security and performance.",
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

 