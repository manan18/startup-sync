import React from 'react'
import { TestimonialCard, HeroCard } from '../atoms/testimonialCard'
import cards from '../../data/testimonials/testimonials'

const Testimonial = () => {
    return (
        <div className='flex flex-col gap-5 p-10 border-t-2 border-gray-300'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold tracking-wide text-[#023e8a] p-2'>Voices of Triumph</h1>
                <p className='tracking-wide text-gray-700 text-xl p-1'>Unveiling Stories of Success and Satisfaction Shared by Our Valued Partners and Clients!</p>
            </div>
            <div className='grid grid-cols-4 gap-6 mx-auto grid-flow-row p-10'>
                {
                    cards.map((card, idx) => {
                        if (idx === 1) {
                            return <>
                                <HeroCard key={idx} />
                                <TestimonialCard key={idx} {...card} />
                            </>
                        } else {
                            return <TestimonialCard {...card} key={idx} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Testimonial
