import React from "react";
import CountUp from "react-countup";

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
}

const Countup: React.FC<CountUpProps> = ({ start, end, duration }) => {
  return <CountUp start={start} end={end} duration={duration} />;
};

export default Countup;
