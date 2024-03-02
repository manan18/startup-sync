import React from "react";
import BlogCarousel from "../carousel";
import { useRef } from "react";
import carousel from "@/data/carousel/carousel";

const Blog = () => {
  const sliderRef = useRef(null);
  return (
    <div className="flex flex-col p-12 items-center gap-3 mt-3 border-t-2 border-gray-300">
      <h1 className="tracking-wide text-3xl font-bold">
        Innovate with Insights
      </h1>
      <p className=" tracking-wide font-md w-[50%] text-center mb-7">
        Explore our captivating blogs, designed to spark curiosity and ignite your intellect.
      </p>
      <BlogCarousel
        data={carousel}
      />
    </div>
  );
};

export default Blog;
