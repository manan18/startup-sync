import React from 'react'
import Image from 'next/image'
import bg from '../../assets/img/signup.jpg'
import SignUpForm from '@/components/signupForm'

const SignUp = () => {
    return (
        <div className="grid grid-cols-2 h-screen overflow-hidden">
            <div className="flex flex-col p-5 w-[70%] justify-center mx-auto">
                <div className="tracking-wide gap-3">
                    <h1 className="text-2xl font-semibold">Innovate. Activate. Elevate.</h1>

                    <p className="text-lg">Sign Up for Your Startup Revolution!</p>
                    <SignUpForm />
                </div>
            </div>
            <div className="relative">
                <Image src={bg} alt="bg" className="object-fill h-full" />
            </div>
        </div>
    )
}

export default SignUp
