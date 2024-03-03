import React from "react";
import navLinks from "@/data/landing/nav-links";
import Link from "next/link";
import Button from "../atoms/button";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/assets/img/newlogo.svg";

const HomeHero = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push('/signup')
  }

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
        <Image src={logo} alt="logo" width={170} height={170} className="" />
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
            <Button onClick={handleRegister}>Register</Button>
            <Button><Link href="#company">Learn More</Link></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;