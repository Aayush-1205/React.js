import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Shuffle = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full relative bg-zinc-800 overflow-hidden flex">
        <img
          className={`${
            val ? "-translate-x-[100%]" : val
          } shrink-0 object-cover object-center w-full h-full transition-transform duration-700 ease-in-out`}
          src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Img-1"
        />
        <img
          className={`${
            val ? "-translate-x-[100%]" : val
          } shrink-0 object-cover object-center w-full h-full transition-transform duration-700 ease-in-out`}
          src="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Img-1"
        />

        <span
          onClick={() => setVal(() => !val)}
          className={`w-28 h-28 absolute bg-[#dadada9b] left-[90%] right-0 bottom-3 rounded-full flex justify-center items-center ${
            val ? "rotate-180" : val
          }`}
        >
          <FaArrowRightLong size={"4em"} />
        </span>
      </div>
    </div>
  );
};

export default Shuffle;
