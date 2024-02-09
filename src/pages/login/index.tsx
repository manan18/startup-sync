import React from 'react';
import Image from 'next/image';
import bg from '../../assets/img/bg3.jpeg';
import LoginForm from '@/components/loginForm';

const LoginPage = () => {
    return (
        <div className="grid grid-cols-2 h-screen overflow-hidden">
            <div className="relative">
                <Image src={bg} alt="bg" className="object-fill h-full" />
                {/* <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex p-10 mt-10 flex-col">
                    <h1 className="text-white text-4xl font-bold mb-5">Empowering Your Startup Journey!</h1>
                    <p className="text-white text-2xl">Seamless Login</p>
                    <p className="text-white text-2xl">Limitless Possibilities</p>
                </div> */}
            </div>
            <div className="flex flex-col p-5 w-[70%] justify-center mx-auto">
                <div className="tracking-wide gap-3">
                    <h1 className="text-2xl font-semibold">Seamless Login. Limitless Possibilities.</h1>

                    <p className="text-lg">Empowering Your Startup Journey!</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
