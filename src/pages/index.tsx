import React from "react";
import { Inter } from "next/font/google";
import HomeHero from "../components/sections/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeHero />;
}
