"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import nxjs from "../components/assets/nextjs.webp"


export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") { // Check if window exists
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true); // Set this to true once the component has mounted
  }, []);
  
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-[rgba(0,0,0,.3)]",
        className
      )}
      style={{
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div className="container mx-auto px-4">
        <div style={{}} className="grid grid-cols-[95%_5%] lg:grid-cols-[30%_70%]">
          <h1 style={{alignItems:'center'}} className="text-2xl flex justify-center py-3  font-bold text-white">Portfolio</h1>
          {isMounted &&  isMobile ? (
            <button onClick={toggleMenu} className="text-white text-3xl">
              ☰
            </button>
          ) : ( 
            isMounted && (
            <div style={{}}>

            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="About" />
              <MenuItem setActive={setActive} active={active} item="Projects">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">UI/UX Design</HoveredLink>
                  <HoveredLink href="/seo">.Net</HoveredLink>
                  <HoveredLink href="/branding">Machine Learning</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Extras">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Certifications"
                    href="https://algochurn.com"
                    src="https://images.pexels.com/photos/8112168/pexels-photo-8112168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    description="Prepare for tech interviews like never before."
                    />
                  <ProductItem
                    title="Hobbies & Interests"
                    href="https://tailwindmasterkit.com"
                    src="https://images.pexels.com/photos/346726/pexels-photo-346726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    description="Production ready Tailwind css components for your next project"
                    />
                  <ProductItem
                    title="Learning Journey "
                    href="https://gomoonbeam.com"
                    src="https://images.pexels.com/photos/6549918/pexels-photo-6549918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                  <ProductItem
                    title="Favorite Tech Stack"
                    href="https://userogue.com"
                    src={nxjs}
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Contact" />
            </Menu>
                    </div>
                    )
          )}
        </div>
      </div>
      {isMounted &&  isMobile && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-[rgba(0,0,0,.3)]"
        >
          <div className="container mx-auto px-4 py-4">
            <Link href="/about" className="block text-white py-2 text-lg">About</Link>
            <div className="py-2">
              <button onClick={() => setActive(active === "Projects" ? null : "Projects")} className="text-white text-lg font-semibold w-full text-left flex justify-between items-center">
                Projects
                <span className="text-sm">{active === "Projects" ? "▲" : "▼"}</span>
              </button>
              {active === "Projects" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/web-dev" className="block text-white py-1">Web Development</Link>
                  <Link href="/interface-design" className="block text-white py-1">UI/UX Design</Link>
                  <Link href="/seo" className="block text-white py-1">.Net</Link>
                  <Link href="/branding" className="block text-white py-1">Machine Learning</Link>
                </div>
              )}
            </div>
            <div className="py-2">
              <button onClick={() => setActive(active === "Extras" ? null : "Extras")} className="text-white text-lg font-semibold w-full text-left flex justify-between items-center">
                Extras
                <span className="text-sm">{active === "Extras" ? "▲" : "▼"}</span>
              </button>
              {active === "Extras" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="https://algochurn.com" className="block text-white py-1">Certifications</Link>
                  <Link href="https://tailwindmasterkit.com" className="block text-white py-1">Hobbies & Interests</Link>
                  <Link href="https://gomoonbeam.com" className="block text-white py-1">Learning Journey</Link>
                  <Link href="https://userogue.com" className="block text-white py-1">Favorite Tech Stack</Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="block text-white py-2 text-lg">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}