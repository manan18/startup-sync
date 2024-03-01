import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BlogCard from "../atoms/blogcard";

interface BlogCarouselProps {
  data: {
    author: string;
    date: string;
    description: string;
    image: StaticImport | string;
    title: string;
  }[];
}

export default function BlogCarousel({ data }: BlogCarouselProps) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-[85%]"
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={3}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              author={item.author}
              date={item.date}
              description={item.description}
              title={item.title}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
