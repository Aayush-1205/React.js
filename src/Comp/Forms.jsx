import React, { useRef, useState } from "react";

const Forms = () => {
  const [val, setVal] = useState({ name: "", email: "" });

  const change = (event) => setVal(console.log(event.target.value));
  // it shows us word by word in console
  // event shown elements are controlled components 

  const name = useRef(null);
  const email = useRef(null);
  const text = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name.current.value}, Email: ${email.current.value}`);
    // console.log(name);
    console.log(val);
  };

  return (
    <div className="p-4">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          ref={name}
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          className="border-[1px] border-black rounded-md placeholder:p-4 flex gap-2 outline-none px-2 py-1"
          placeholder="Name"
          type="text"
        />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          ref={email}
          onChange={(event)=> setVal({...val, email: event.target.value})}
          className="border-[1px] border-black rounded-md placeholder:p-4 flex gap-2 outline-none px-2 py-1"
          placeholder="Email"
          type="email"
        />
        <label htmlFor="text">Text: </label>
        <input
          id="text"
          ref={text}
          onChange={change}
          className="border-[1px] border-black rounded-md placeholder:p-4 flex gap-2 outline-none px-2 py-1"
          placeholder="Text"
          type="text"
        />
        <input
          className="px-4 py-1 bg-black text-white rounded-full mt-3"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Forms;
