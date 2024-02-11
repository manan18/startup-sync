import React from "react";
import { Inter } from "next/font/google";
import HomeHero from "../components/sections/hero";
import Stats from "@/components/stats";
import Blog from "@/components/blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <><HomeHero /><Stats /><Blog /></>;
}
