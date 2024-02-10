import React from "react";
import navLinks from "@/data/landing/nav-links";
import Link from "next/link";
import Button from "../atoms/button";

const HomeHero = () => {
  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="w-full absolute -z-20 h-full object-cover"
      >
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute -z-10 w-full h-full bg-black opacity-70"></div>
      <div className="flex justify-between p-6 items-center">
        <h1 className="text-white text-2xl">Startup Sync</h1>
        <div className="flex gap-8 items-center justify-center">
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index} className="text-white">
              {link.title}
            </Link>
          ))}
        </div>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default HomeHero;
