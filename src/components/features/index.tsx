import React from 'react'
import features from '@/data/features/features'
import { IoCheckmark } from "react-icons/io5";

const Features = () => {
    return (
        <div className="bg-white w-full px-10">
            <div className="mx-auto sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:pb-20  lg:px-8 ms-10">
                <div>
                    <h2 className="text-lg font-semibold text-[#e85d04]">Seamless Startup Management</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black">All-In-One Platform</p>
                    <p className="mt-4 text-lg text-gray-600">
                        Elevate your entrepreneurial journey with our exclusive features, carefully curated to enhance every facet of your startup experience.
                    </p>
                </div>
                <div className="mt-12 lg:col-span-2 lg:mt-0">
                    <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt className='flex gap-4 items-center'>
                                    {/* < className="absolute h-6 w-6 text-green-500" aria-hidden="true" /> */}
                                    <div className='text-lg text-[#023e8a]'>{feature.icon}</div>
                                    <p className="text-lg font-medium leading-6 text-[#023e8a]">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Features
