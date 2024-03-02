import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";

export type BlogCardProps = {
  image: StaticImport | string;
  title: string;
  date: string;
  author: string;
  icon: StaticImport | string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  date,
  author,
  icon,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={image}
          alt="Blog Cover"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-6 text-white flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-300">{date}</p>
          <LuDot className="text-gray-300" />
          <div className="flex gap-2 items-center">
            <Image src={icon} alt="icon" width={20} height={20} className="rounded-full" />
            <p className="text-xs text-gray-300">By {author}</p>
          </div>
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
