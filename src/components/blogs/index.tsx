import React from "react";
import Card from "../atoms/blogcard";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import BlogCarousel from "../carousel";
import { useRef } from "react";

const Blog = () => {
  const sliderRef = useRef(null);
  return (
    <div className="flex flex-col p-8 items-center gap-5 mt-3 border-t-2 border-gray-300">
      <h1 className="tracking-wide text-3xl font-bold">
        Innovate with Insights
      </h1>
      <p className=" tracking-wide font-md w-[50%] text-center mb-7">
        Explore our captivating blogs, designed to spark curiosity and ignite your intellect.
      </p>
      <BlogCarousel
        data={[
          {
            author: "John Doe",
            date: "12th May 2021",
            description: "The Ultimate Guide to Building a Successful Startup",
            image: logo,
            title: "Building a Startup",
          },
          {
            author: "John Doe",
            date: "12th May 2021",
            description: "The Ultimate Guide to Building a Successful Startup",
            image: logo,
            title: "Building a Startup",
          },
          {
            author: "John Doe",
            date: "12th May 2021",
            description: "The Ultimate Guide to Building a Successful Startup",
            image: logo,
            title: "Building a Startup",
          },
          {
            author: "John Doe",
            date: "12th May 2021",
            description: "The Ultimate Guide to Building a Successful Startup",
            image: logo,
            title: "Building a Startup",
          },
          {
            author: "John Doe",
            date: "12th May 2021",
            description: "The Ultimate Guide to Building a Successful Startup",
            image: logo,
            title: "Building a Startup",
          },
          {
            author: "John Doe",
            date: "12th May 2021",
            description: "The Ultimate Guide to Building a Successful Startup",
            image: logo,
            title: "Building a Startup",
          },
        ]}
      />
    </div>
  );
};

export default Blog;
