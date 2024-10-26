"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CustomScrollTrigger extends ScrollTrigger {
  wrapping?: boolean;
}

const CardGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !cardsRef.current) return;

    let iteration = 0;
    const spacing = 0.1;
    const snap = gsap.utils.snap(spacing);
    const cards = gsap.utils.toArray<HTMLLIElement>('.cards li');
    const seamlessLoop = buildSeamlessLoop(cards, spacing);

    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "+=3000",
      pin: galleryRef.current,
      scrub: true,
      onUpdate(self: CustomScrollTrigger) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
          wrapForward(self);
        } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
          scrub.invalidate().restart();
          self.wrapping = false;
        }
      }
    }) as CustomScrollTrigger;

    function wrapForward(trigger: CustomScrollTrigger) {
      iteration++;
      trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger: CustomScrollTrigger) {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
        scrub.pause();
      }
      trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime: number) {
      let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
      if (progress > 1) {
        wrapForward(trigger);
      } else if (progress < 0) {
        wrapBackward(trigger);
      } else {
        trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
      }
    }

    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton?.addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
    prevButton?.addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

    return () => {
      trigger.kill();
      seamlessLoop.kill();
      nextButton?.removeEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
      prevButton?.removeEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));
    };
  }, []);

  function buildSeamlessLoop(items: HTMLLIElement[], spacing: number) {
    let overlap = Math.ceil(1 / spacing);
    let startTime = items.length * spacing + 0.5;
    let loopTime = (items.length + overlap) * spacing + 1;
    let rawSequence = gsap.timeline({ paused: true });
    let seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      }
    });

    let l = items.length + overlap * 2;
    let time = 0;
    let i, index, item;

    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    for (i = 0; i < l; i++) {
      index = i % items.length;
      item = items[index];
      time = i * spacing;
      rawSequence.fromTo(item, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }, time)
        .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, time);
      i <= items.length && seamlessLoop.add("label" + i, time);
    }

    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none"
    }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
      time: startTime,
      duration: startTime - (overlap * spacing + 1),
      immediateRender: false,
      ease: "none"
    });
    return seamlessLoop;
  }

  return (
    <div ref={galleryRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <ul ref={cardsRef} className="cards relative flex justify-center items-center">
        {[...Array(31)].map((_, i) => (
          <li key={i} className="list-none p-0 m-0 w-56 h-72 text-center leading-[18rem] text-4xl font-sans bg-purple-500 absolute rounded-lg">
            {i}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button className="prev mx-2 px-6 py-3 bg-gradient-to-b from-gray-600 to-gray-700 text-white rounded uppercase font-semibold text-xl cursor-pointer hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
          Prev
        </button>
        <button className="next mx-2 px-6 py-3 bg-gradient-to-b from-gray-600 to-gray-700 text-white rounded uppercase font-semibold text-xl cursor-pointer hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default CardGallery;
