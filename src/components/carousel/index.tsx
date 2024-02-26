import React, { Ref } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard, { BlogCardProps } from "@/components/atoms/blogcard";

interface Props {
  data: BlogCardProps[];
  sliderRef: Ref<SwiperRef>;
}

const BlogCarousel = ({ data, sliderRef }: Props) => {

  return (
    <>
      <Swiper
        ref={sliderRef}
        spaceBetween={50}
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogCarousel;