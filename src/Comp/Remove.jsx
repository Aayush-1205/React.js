import React, { useState } from "react";

const Remove = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  const remove = () =>
    setVal(val.filter((elem, index) => index != val.length - 1));
  const anydiv = () => setVal(() => val.filter((elem) => elem % 2 == 0));
  const re2 = () => setVal(() => val.filter((elem, index) => index != 2));
  const re5 = () => setVal(() => val.filter((elem, index) => index != 5));
  const add = () => {
    setVal([...val, val[val.length - 1] + 1]);
  };
  const add2 = () => {
    setVal([...val, val[val.length - 1] + 2]);
  };

  const multiple = () => {
    setVal([...val, val[val.length - 1] * 2]);
  };
  const divide = () => {
    setVal([...val, val[val.length - 1] / 2]);
  };

  return (
    <div className="">
      {/* {val.map((value, index)=><div key={index} className='flex justify-center w-32 px-2 py-1 bg-slate-300'><h1>{value}</h1></div>)} */}
      <div className="gap-3 flex flex-wrap justify-center w-fit px-2 py-1 bg-slate-300 rounded">
        {val.map((value, index) => (
          <h1 key={index} className="font-semibold text-white text-2xl">
            {value}
          </h1>
        ))}
      </div>
      <div className="flex flex-col relative left-[50%] -translate-x-[50%]">
        <button
          onClick={remove}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Remove
        </button>
        <button
          onClick={anydiv}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Only divid by 2
        </button>
        <button
          onClick={re2}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Remove from 2
        </button>
        <button
          onClick={re5}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Remove from 5
        </button>
        <button
          onClick={add}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Add
        </button>
        <button
          onClick={add2}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Add by 2
        </button>
        <button
          onClick={multiple}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Multiple by 2
        </button>
        <button
          onClick={divide}
          className=" ml-2 px-5 py-2 bg-slate-500 text-white rounded-2xl mt-3"
        >
          Divide by 2
        </button>
      </div>
    </div>
  );
};

export default Remove;
