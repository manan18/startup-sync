import React from 'react';
import Image from 'next/image';
import bg from '../../assets/img/login.jpeg';
import LoginForm from '@/components/loginForm';

const LoginPage = () => {
    return (
        <div className="grid grid-cols-2 h-screen overflow-hidden">
            <div className="relative">
                <Image src={bg} alt="bg" className="object-fill h-full" />
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
