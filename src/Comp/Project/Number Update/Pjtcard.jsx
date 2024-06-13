import React from "react";


const Pjtcard = ({values, handleClick, index}) => {

  const {img, name, artist, added} = values;

  return (
    <div className="w-64 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10">
      <div className="w-32 h-24 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover object-center" src={img} alt="" />
      </div>
        <div className="">
          <h3 className="text-base font-semibold">{name}</h3>
          <h6 className="text-sm">{artist}</h6>
        </div>

      <button onClick={() => handleClick(index)} className={`px-4 py-3 ${added ? "bg-amber-500" : "bg-orange-600"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full whitespace-wrap`}>{added ? "Added!" : "Add to favourite"}</button>
    </div>
  );
};

export default Pjtcard;
