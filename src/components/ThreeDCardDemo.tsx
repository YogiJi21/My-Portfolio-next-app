"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo({ 
  title, 
  brief, 
  imageSrc, 
  detailsLink, 
  githubLink 
}: {
  title: string;
  brief: string;
  imageSrc: string | StaticImageData;
  detailsLink: string;
  githubLink: string;
}) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto h-auto rounded-xl p-6 border">

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-60 text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-[.7rem] max-w-sm mt-2 lg:py-3"
        >
          {brief}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            // layout="responsive"
            height={1000}
            width={1000}
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="project thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={detailsLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
            Check Details →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={githubLink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
