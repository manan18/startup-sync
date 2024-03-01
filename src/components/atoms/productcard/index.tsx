import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";

export type ProductCardProps = {
    icon: React.ReactNode;
    title: string;
    amount: string;
    profit: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({icon,title,amount,profit,description}) =>
{
    return (
        <div className='flex-col rounded-md p-2 bg-white px-px'>
            <div className='flex justify-between'>
                <div className='bg-gray-200 rounded-md p-2 '>
                    {icon}
                </div>
                <div>
                    <BsThreeDots />
                </div>
            </div>

            <div>
                <h3 className='font-light font-sans'>{title}</h3>
            </div>

            <div className='flex'>
                <div>
                    {amount}
                </div>
                <div>
                    {profit}
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
