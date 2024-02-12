import React from "react";
import { Inter } from "next/font/google";
import HomeHero from "../components/sections/hero";
import Stats from "@/components/stats";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <><HomeHero /><Stats /><Footer /></>;
}
