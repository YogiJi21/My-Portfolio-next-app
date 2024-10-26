'use client';

import { useEffect, useState } from 'react';
import HorizontalScroll from "@/components/Horizontal_pagescroll";
import Ghar from "@/components/Ghar";
import Simple_parallax from "@/components/Simple_parallax";
import Image from "next/image";
import Homepage from "@/components/Homepage";
import Tabs from "@/components/Tabs";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect";
import Projectsection from '@/components/Projectsection';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }
  return (
   <>
   <Homepage/>
   <Tabs/>
   <Projectsection/>
   <ContactForm/>
   {/* <Homepage/> */}
   {/* <CardHoverEffectDemo/> */}
   {/* <HorizontalScroll/> */}
   {/* <Ghar/> */}
   {/* <Simple_parallax/> */}
   </>
  );
}
