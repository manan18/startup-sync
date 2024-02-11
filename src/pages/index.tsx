import React from "react";
import { Inter } from "next/font/google";
import HomeHero from "../components/sections/hero";
import Stats from "@/components/stats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <><HomeHero /><Stats /></>;
}
