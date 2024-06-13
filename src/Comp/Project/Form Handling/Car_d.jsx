import React from "react";

const Car_d = ({ user, handleRemove, id }) => {
  return (
      <div
        className="w-44 bg-white rounded-lg flex flex-col items-center p-2"
      >
        <div className="image w-[4vw] h-[4vw] rounded-full bg-zinc-800 overflow-hidden">
          <img className="w-full h-full object-cover" src={user.image} alt="" />
        </div>

        <h1 className="text-lg font-medium mt-1 text-center leading-none">{user.name}</h1>
        <h4 className="text-xs font-medium opacity-60 ">{user.email}</h4>
        <p className="text-xs text-center font-semibold leading-1 tracking-tight mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          eos. Eos, debitis.
        </p>
        <button onClick={()=> handleRemove(id)} className="px-4 py-1 bg-red-500 rounded-md mt-4 text-white font-semibold text-sm">
          Remove
        </button>
      </div>
    
  );
};

export default Car_d;
