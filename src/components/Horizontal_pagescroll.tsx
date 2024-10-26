"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

// Import images
import image1 from './assets/panch.jpg';
import image2 from './assets/doo.jpg';
import image3 from './assets/teen.jpg';
import image4 from './assets/ek.jpg';
import image5 from './assets/cheh.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [image1, image2, image3, image4, image5];

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !panelsRef.current) return;

    const panels = gsap.utils.toArray<HTMLElement>('.panel');

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + panelsRef.current!.offsetWidth
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={panelsRef} className="flex flex-nowrap w-[600vw]">
        <div className="panel w-screen h-screen bg-blue-500 flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Horizontal snapping sections (advanced)</h1>
            <p className="mb-4">
              Scroll vertically to scrub the horizontal animation. It also
              dynamically snaps to the sections in an organic way based on the
              velocity. The snapping occurs based on the natural ending position
              after momentum is applied, not a simplistic "wherever it is when the
              user stops".
            </p>
            <div>Scroll down</div>
          </div>
        </div>
        {['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'].map((text, index) => (
          <div key={index} className="panel w-screen h-screen flex items-center justify-center relative overflow-hidden">
            <Image src={images[index]} alt={`Background ${index + 1}`} layout="fill" objectFit="cover" quality={100} />
            <h2 className="text-6xl font-bold text-white z-10">{text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;