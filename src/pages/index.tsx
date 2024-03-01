import React from "react";
import { Inter } from "next/font/google";
import HomeHero from "../components/sections/hero";
import CompanySection from "@/components/atoms/company";
import Stats from "@/components/stats";
import Blog from "@/components/blogs";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Testimonial from "@/components/testimonial";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <CompanySection />
      <Features />
      <Stats />
      <Testimonial />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
}
