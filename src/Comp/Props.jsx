import React from "react";

const Props = ({ values, handleClick, index }) => {
  // https://randomuser.me/api
  const { name, img, profession, friends } = values;
  return (
    <div className="w-52 bg-slate-50 rounded-md overflow-hidden drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="w-full h-40 bg-sky-100">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="w-full p-3 bg-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={()=> handleClick(index)}
          className={`px-3 py-1 mt-2 text-xs text-white ${
            friends ? "bg-red-400" : "bg-blue-400"
          } font-semibold rounded-md`}
        >
          {friends ? "Remove Friend" : "Add as a friend"}
        </button>
      </div>
    </div>
  );
};

export default Props;
