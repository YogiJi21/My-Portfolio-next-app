// components/ParallaxSections.tsx

"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Import images
import image1 from './assets/panch.jpg';
import image2 from './assets/doo.jpg';
import image3 from './assets/teen.jpg';
import image4 from './assets/chaar.jpg';
import image5 from './assets/cheh.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [image1, image2, image3, image4, image5];

const sections = [
  "Simple parallax sections",
  "Hey look, a title",
  "They just keep coming",
  "So smooth though",
  "Nice, right?"
];

const ParallaxSections: React.FC = () => {
  useEffect(() => {
    const getRatio = (el: HTMLElement) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray<HTMLElement>("section").forEach((section, i) => {
      const bg = section.querySelector('.bg') as HTMLElement;

      // Set the background image in order
      const currentImage = images[i % images.length];

      // Set the background image
      bg.style.backgroundImage = `url(${currentImage.src})`;

      // Handle parallax effect
      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i
              ? `50% ${-window.innerHeight * getRatio(section)}px`
              : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      {sections.map((text, index) => (
        <section
          key={index}
          className="relative h-screen flex items-center justify-center"
        >
          <div
            className="bg absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
          />
          <h1 className="text-white text-3xl font-normal z-10" style={{ textShadow: '1px 1px 3px black' }}>
            {text}
          </h1>
        </section>
      ))}
    </div>
  );
};

export default ParallaxSections;
