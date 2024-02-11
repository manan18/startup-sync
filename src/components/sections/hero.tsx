import React from "react";
import navLinks from "@/data/landing/nav-links";
import Link from "next/link";
import Button from "../atoms/button";

const HomeHero = () => {
  return (
    <div className="h-screen relative w-screen overflow-hidden flex flex-col">
      <div>
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
      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="my-auto mx-auto w-max h-full">
          <h1 className="text-white text-4xl flex-col items-center text-center max-w-[60%]">
            &quot; We empower entrepreneurs to transform their ideas into fully
            functioning startups &quot;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
