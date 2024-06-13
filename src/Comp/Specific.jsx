import React, { useState } from "react";

const Specific = () => {
  const [val, setVal] = useState([
    { name: "Joe", age: 32 },
    { name: "Tom", age: 45 },
    { name: "Joey", age: 26 },
    { name: "Ron", age: 20 },
  ]);
  return (
    <div className="p-4">
      <div>
        {val.map((item, index) => (
          <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>Age: {item.age}</h1>
          </div>
        ))}
      </div>
      <button
        className="px-5 py-1 bg-slate-600 text-white rounded"
        onClick={() =>
          setVal(
            val.map((item) =>
              item.name === "Joe" ? { name: "Joe", age: 20 } : item
            )
          )
        }
      >
        Change
      </button>
    </div>
  );
};

export default Specific;
