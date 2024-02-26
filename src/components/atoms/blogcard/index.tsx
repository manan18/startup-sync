import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export type BlogCardProps = {
  image: StaticImport | string;
  title: string;
  description: string;
  date: string;
  author: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
  author,
}) => {
  return (
    <div className="flex flex-col bg-white gap-3 p-3 w-full">
      <Image src={image} alt={"image"} width={300} height={200} />
      <h1 className="tracking-wide text-black text-center">{title}</h1>
      <div className="flex justify-between">
        <p className="flex items-center gap-2 text-sm">
          <MdOutlineDateRange />
          {date}
        </p>
        <p className="flex items-center gap-2 text-sm">
          <FaRegUser />
          {author}
        </p>
      </div>
      <p className="">{description}</p>
    </div>
  );
};

export default BlogCard;
