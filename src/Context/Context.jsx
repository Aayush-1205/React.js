import React, { createContext, useState } from "react";

export const userContext = createContext();

const Context = (props) => {

  const [user, setUser] = useState([
    { id: 1, name: "John", email: "john@gmail.com", username: "johnd", password: "m38rmF$" },
    {
      id: 2, name: "Morrison",
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
    },
    {
      id: 3, name: "Kevin",
      email: "kevin@gmail.com",
      username: "kevinryan",
      password: "kev02937@",
    },
    { id: 4, name: "Donero", email: "don@gmail.com", username: "donero", password: "ewedon" },
  ]);
  
  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
