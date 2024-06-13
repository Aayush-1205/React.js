import React, { useState } from "react";

const Add = () => {
  const [val, setVal] = useState({});
  const info = () => {
    setVal({ ...val, name: "Rutuja", age: 24, gender: "Female" });
  };

  console.log(val);
  return (
    <div className="p-4">
      <h1>Name: {val.name}</h1>
      <h1>Age: {val.age}</h1>
      <h1>Gender: {val.gender}</h1>
      <button
        onClick={info}
        className="px-5 py-2 bg-black text-white rounded-2xl">
        Add Info
      </button>
    </div>
  );
};

export default Add;
