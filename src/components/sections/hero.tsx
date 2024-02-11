import React from "react";
import navLinks from "@/data/landing/nav-links";
import Link from "next/link";
import Button from "../atoms/button";

const HomeHero = () => {
  return (
    <div className="h-screen flex flex-col relative w-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="w-full absolute -z-20 h-full object-cover"
      >
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute -z-10 w-full h-full bg-black opacity-50"></div>
      <div className="flex justify-between p-6 items-center">
        <h1 className="text-white text-2xl">Startup Sync</h1>
        <div className="flex gap-8 items-center justify-center">
          {navLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-white hover:scale-110 transition-all duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="flex flex-col p-4 absolute top-[27%] w-full items-center">
          <h1 className="text-white md:text-5xl text-3xl font-bold mb-4 text-center">
            Syncing Innovation, Igniting Entrepreneurship!
          </h1>
          <p className="text-white text-xl mb-4 text-center">
            Navigate Your Startup Adventure with Startup Sync
          </p>
          <div className="flex gap-4">
            <Button>Register</Button>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
