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
        <div className='flex-col rounded-lg bg-white p-2 border-1 shadow-md'>
            <div className='flex justify-between p-1'>
                <div className='bg-purple-100 rounded-md p-2 '>
                    {icon}
                </div>
                <div>
                    <BsThreeDots />
                </div>
            </div>

            <div className='p-1'>
                <h3 className='text-slate-500 font-sans text-lg'>{title}</h3>
            </div>

            <div className='flex p-1 gap-2 items-center'>
                <div className='text-xl font-semibold'>
                    {amount}
                </div>
                <div className=' text-sm bg-green-200 rounded-md p-1'>
                    {profit}
                </div>
                <div className='text-sm font-sans text-slate-600 antialiased'>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
