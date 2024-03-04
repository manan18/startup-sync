import React from "react";
import Button from "../atoms/button";
import { useRouter } from "next/router";

const Cta = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/signup");
  };

  return (
    <div className="bg-[#0353a4]" suppressHydrationWarning>
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ignite Your Journey</span>
          <span className="block">Take the Leap with Startup Sync!</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Seize the moment! Elevate your startup experience and propel towards
          success. Join Startup Sync today for a seamless, all-in-one platform
          that empowers your entrepreneurial journey like never before.
        </p>
        <Button
          className="mt-8 w-full sm:w-auto sm:mx-auto bg-white !text-[#0353a4] hover:bg-slate-300"
          onClick={handleClick}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Cta;
