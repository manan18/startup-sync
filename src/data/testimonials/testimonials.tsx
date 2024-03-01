import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import ria from '@/assets/img/ria2.jpg';

interface TestimonialCardProps {
    name: string;
    username: string;
    description: string;
    image: React.ReactNode | StaticImport | string;
    className?: string;
}

const cards: TestimonialCardProps[] = [
    {
        name: "Emma Thompson",
        username: "@thompson",
        description: "Exceptional service! Startup Sync has revolutionized the way we manage projects. It's intuitive, efficient, and an absolute game- changer for our team.",
        image: ria
    },
    {
        name: "Alex Rodriguez",
        username: "@alexrodriguez",
        description: "I can't recommend Startup Sync enough! The financial tracking feature is a lifesaver, providing clear insights into our budget and helping us make informed decisions.",
        image: <MdVerifiedUser className="" />
    },
    {
        name: "Olivia Chang",
        username: "@olivia_chang",
        description: "Employee management has never been easier. Startup Sync's tools streamlined our HR processes, making team collaboration and communication a breeze.",
        image: <MdVerifiedUser className="" />
    },
    {
        name: "Isabelle Gomez",
        username: "@gomez89",
        description: "The integration capabilities are fantastic! Being able to connect seamlessly with our existing tools has significantly enhanced our workflow efficiency.",
        image: <MdVerifiedUser className="" />
    },
    {
        name: "Lucas Smith",
        username: "@luca_smith",
        description: "Startup Sync has truly elevated our startup experience. The customizable templates allow us to tailor the platform to our specific needs, saving us time and effort.",
        image: <MdVerifiedUser className="" />
    },
    {
        name: "Ava Johnson",
        username: "@avajohnson",
        description: "The support from Startup Sync is top-notch. Quick responses, helpful tutorials, and a team dedicated to ensuring we get the most out of the platform.",
        image: <MdVerifiedUser className="" />
    },
    {
        name: "Elijah Brown",
        username: "@elijah_brown",
        description: "The all-in-one excellence of Startup Sync is unmatched. From project management to financial tracking, it's the comprehensive solution we were searching for.",
        image: <MdVerifiedUser className="" />
    },
    {
        name: "Marcus Lee",
        username: "@marcus7639",
        description: "Product analysis is a standout feature. The insights provided have been instrumental in refining our product strategy and staying ahead in the competitive market.",
        image: <MdVerifiedUser className="" />
    }
]

export default cards;