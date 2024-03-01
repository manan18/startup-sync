import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react'
import Image from 'next/image'
import man4 from '@/assets/img/man4.jpg';
import logo from '@/assets/img/logo.png'

interface TestimonialCardProps {
    name: string;
    username: string;
    description: string;
    image: StaticImport | React.ReactNode;
    className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, username, description, image }) => {
    return (
        <div className='flex flex-col border max-w-[500px] rounded-lg gap-4 p-4 shadow-md justify-center'>
            <div className='tracking-wide text-gray-600 text-sm'>{`"${description}"`}</div>
            <div className='flex items-center gap-3 p-2'>
                <div>
                    {React.isValidElement(image) ? image : <Image src={image as StaticImport} alt='profile' width={50} height={50} className='rounded-full' />}
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='font-semibold'>{name}</div>
                    <div className='text-gray-500 text-sm'>{username}</div>
                </div>
            </div>
        </div>
    )
}

const HeroCard = () => {
    return (
        <div className='col-span-2 row-span-2 m-4 border rounded-lg shadow-lg p-6 flex flex-col justify-center'>
            <div className='text-center text-lg font-semibold border-b border-gray-300 p-8 text-gray-700'>&apos;&apos;The event management features exceeded our expectations. Planning and executing events has become a joy, and the analysis tools provided invaluable post-event insights. The seamless coordination and detailed analytics have empowered us to not only host successful events but also continuously refine our strategies for even greater impact in the future.&apos;&apos;</div>
            <div className=' pb-0 pt-4 flex justify-between items-center'>
                <div className='flex items-center gap-4 p-2'>
                    <Image src={man4} alt='ria' width={70} height={70} className='rounded-full' />
                    <div className='flex flex-col'>
                        <p className='font-semibold'>Nathan Patel</p>
                        <p className='text-gray-500 text-sm'>@patelNathan64</p>
                    </div>
                </div>
                <div>
                    <Image src={logo} alt='logo' width={150} height={150} />
                </div>
            </div>
        </div>
    )
}

export { TestimonialCard, HeroCard }
