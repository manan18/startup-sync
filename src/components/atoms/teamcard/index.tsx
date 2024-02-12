import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TeamCardProps {
    img: StaticImport | string;
    name: string;
    role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ img, name, role }) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <Image src={img} alt='image' width={150} height={100} className='rounded-full' />
            <p className='text-lg'>{name}</p>
            <p className='text-md'>{role}</p>
        </div>
    )
}

export default TeamCard
