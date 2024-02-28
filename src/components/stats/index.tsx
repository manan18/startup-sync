import React from "react";
import Countup from "../atoms/countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [show, setShow] = React.useState(false);
  return (
    //@ts-ignore
    <ScrollTrigger onEnter={() => setShow(true)} onExit={() => setShow(false)}>
      <section className="grid grid-cols-3 gap-4 flex-col section1 border-t-2 border-gray-300 p-5 text-center">
        {/* Users */}
        <div className="p-4 ">
          <h2 className="text-3xl font-semibold mb-2 text-[#ff6b35]">
            {show ? <Countup end={1000} /> : 0}
          </h2>
          <p className="text-[#004e89] font-medium">Users</p>
        </div>
        {/* Monthly Visitors */}
        <div className="p-4 ">
          <h2 className="text-3xl font-semibold mb-2 text-[#ff6b35]">
            {show ? <Countup end={5000} /> : 0}
          </h2>
          <p className="text-[#004e89] font-medium">Monthly Visitors</p>
        </div>

        {/* Satisfaction Rating */}
        <div className="p-4 ">
          <h2 className="text-3xl font-semibold mb-2 text-[#ff6b35]">
            {show ? <Countup end={4} /> : 0}
          </h2>
          <p className="text-[#004e89] font-medium">User Satisfaction</p>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Stats;
