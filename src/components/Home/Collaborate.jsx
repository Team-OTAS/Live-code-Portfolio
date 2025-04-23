// Collaborate.js

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const [ref, inView] = useInView();
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span ref={ref}>{number.to((n) => n.toFixed(0))}</animated.span>
  );
}

const Collaborate = () => {
  return (
    <div className="bg-[#303F9F] py-20 text-white p-5 text-center">
      <blockquote className="mb-20 text-[36px] italic">
        &quot; Live Easily, Sales Better without worries &quot;
      </blockquote>
      <div className="flex justify-around italic">
        <div className="flex flex-col items-center">
          <span className="text-[64px] font-bold">1.1 M</span>
          <span className="mt-2 text-[32px]">
            Customer <br /> Interaction
          </span>
        </div>
        <div className="border-r border-dashed"></div>
        <div className="flex flex-col items-center">
          <span className="text-[64px] font-bold">5,651</span>
          <span className="mt-2 text-[32px]">
            Successful <br /> Orders
          </span>
        </div>
        <div className="border-r border-dashed"></div>
        <div className="flex flex-col items-center">
          <span className="text-[64px] font-bold">13</span>
          <span className="mt-2 text-[32px]">
            Successful <br /> Business
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
