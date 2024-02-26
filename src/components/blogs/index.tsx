import React from "react";
import Card from "../atoms/blogcard";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import BlogCarousel from "../carousel";
import { useRef } from "react";

const Blog = () => {
  const sliderRef = useRef(null);
  return (
    <div className="bg-[#023e8a] flex flex-col p-8 items-center gap-5">
      <h1 className="tracking-wide text-white text-3xl font-semibold">
        Exploring Startup Wisdom and Market Trends
      </h1>
      <p className="text-white tracking-wide font-md w-[50%] text-center">
        Dive into the realms of knowledge and inspiration with our
        thought-provoking blogs, crafted to spark curiosity and ignite your
        intellect.
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
