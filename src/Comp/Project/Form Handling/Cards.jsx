import React from "react";
import Car_d from "./Car_d";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex flex-wrap gap-4 justify-center">
      {users.map((item, index) => {
        return <Car_d user={item} key={index} id={index} handleRemove={handleRemove} />;
      })} 
    </div>
  );
};

export default Cards;
