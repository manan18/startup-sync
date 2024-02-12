import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface CardProps {
  image: StaticImport;
  title: string;
  description: string;
  date: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, date, author }) => {
  return (
    <div className="flex flex-col bg-white gap-3 p-3 w-max">
      <Image src={image} alt={'image'} width={300} height={200} />
      <h1 className="tracking-wide text-black text-center">{title}</h1>
      <div className="flex justify-between">
        <p className="">{date}</p>
        <p className="">{author}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
