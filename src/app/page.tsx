'use client';

import { useEffect, useState } from 'react';
import Homepage from "@/components/Homepage";
import Tabs from "@/components/Tabs";
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
   
   </>
  );
}
