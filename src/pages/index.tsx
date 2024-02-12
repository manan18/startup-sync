import React from "react";
import { Inter } from "next/font/google";
import HomeHero from "../components/sections/hero";
import CompanySection from "@/components/atoms/company";
import Stats from "@/components/stats";
import Blog from "@/components/blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <CompanySection />
      <Stats />
      <Blog />
    </div>
  );
}
