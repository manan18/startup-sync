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
    icon: StaticImport | string;
    author: string;
    date: string;
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
        className="w-[80%]"
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={3}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              icon={item.icon}
              author={item.author}
              date={item.date}
              title={item.title}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
