import React from 'react'
import { RiSpamLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import Button from '../atoms/button';
import Input from '../atoms/input';

const NewsLetter = () => {
    return (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-20 mt-10 border-t-2 bg-[#0353a4]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <p className='text-2xl font-semibold tracking-wide text-slate-200 mb-2'>Beyond Boundaries</p>
                        <h2 className="text-3xl font-bold tracking-wide sm:text-4xl text-white">Unleash Possibilities with Our Newsletter</h2>
                        <p className="mt-4 text-lg leading-8 text-slate-300">
                            Unlock innovation and success with our newsletter - A curated blend of insights, trends, and exclusive content propelling your startup journey forward!
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <Input type="text" placeholder="Enter your email" className='border-gray-200 border  rounded-md' />
                            <Button className=" bg-white !text-[#0353a4] hover:bg-slate-300 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-gray-200 p-2">
                                <IoCalendarOutline className="h-6 w-6 text-gray-700" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white text-lg tracking-wide">Weekly articles</dt>
                            <dd className="mt-2 leading-7 text-slate-300">
                                Elevate your week with our curated insights and knowledge, delivered straight to your inbox.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-gray-200 p-2">
                                <RiSpamLine className="h-6 w-6 text-gray-700" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-white text-lg tracking-wide">No spam</dt>
                            <dd className="mt-2 leading-7 text-slate-300">
                                Rest assured, we prioritize valuable updates - no unnecessary inbox clutter, just the information that matters.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
