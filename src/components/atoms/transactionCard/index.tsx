import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

interface TransactionCardProps {
    image: StaticImport,
    name: string,
    date: string,
    amount: string
}

const TransactionCard = ({ image, name, date, amount }: TransactionCardProps) => {
    return (
        <div className='bg-white p-2'>
            <div className='flex gap-10 items-center p-2 justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image src={image} alt={name} className='h-10 w-10 rounded-full' />
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-sm'>{name}</h2>
                        <p className='text-xs text-gray-400'>{date}</p>
                    </div>
                </div>
                <p className={clsx('p-2 py-1 rounded-md text-sm', {
                    'bg-green-300': amount.includes('+'),
                    'bg-red-300': amount.includes('-')
                })}>
                    {amount}
                </p>
            </div>
        </div>
    )
}

export default TransactionCard
