import React, { useState } from "react";
import "./App.css";
import Card from "./Comp/Card";
import Song from "./Comp/Song";
import Counter from "./Comp/Counter";
import Status from "./Comp/Status";
import Add from "./Comp/Add";
import Remove from "./Comp/Remove";
import Specific from "./Comp/Specific";
import Shuffle from "./Comp/Project/Shuffle";
import Props from "./Comp/Props";
import Pjtnav from "./Comp/Project/Number Update/Pjtnav";
import Pjtcard from "./Comp/Project/Number Update/Pjtcard";
import Forms from "./Comp/Forms";
import Reacthookform from "./Comp/Reacthookform";
import Cards from "./Comp/Project/Form Handling/Cards";
import Form from "./Comp/Project/Form Handling/Form";
import Nav from "./Comp/Routing/Nav";
import { render } from "react-dom";
import axios from "axios";

function App() {
  // const data = [
  //   {
  //     name: "John",
  //     age: 30,
  //     gender: "male",
  //     profession: "Software Developer",
  //     img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Ray",
  //     age: 25,
  //     gender: "male",
  //     profession: "Painter",
  //     img: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Tom",
  //     age: 35,
  //     gender: "male",
  //     profession: "Artist",
  //     img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Jerry",
  //     age: 50,
  //     gender: "male",
  //     profession: "Data Analyst",
  //     img: "https://images.unsplash.com/photo-1579192181049-2aa87e49df2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  // ];

  // const [val, setVal] = useState(data);
  // const onChange = (cardindex) =>
  //   setVal((prev) => {
  //     return prev.map((item, index) => {
  //       if (index === cardindex) {
  //         return { ...item, friends: !item.friends };
  //       }
  //       return item;
  //     });
  //   });

  // const data = [
  //   {
  //     img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Challenger",
  //     artist: "FatRat",
  //     added: false,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Rise Up",
  //     artist: "Neffex",
  //     added: false,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Bloodshot",
  //     artist: "Sam Tinnesz",
  //     added: false,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Hero",
  //     artist: "Skillet",
  //     added: false,
  //   },
  // ];
  // const [songData, setSongData] = useState(data);
  // const handleClick = (buttonindex) => {
  //   setSongData((prev) => {
  //     return prev.map((item, index) => {
  //       if (index === buttonindex) {
  //         return { ...item, added: !item.added };
  //       }
  //       return item;
  //     });
  //   });
  // };

  // const [users, setUsers] = useState([]);

  // const handleFormSubmitData = (data) => {
  //   setUsers([...users, data]);
  // };

  // const handleRemove = (id) => {
  //   setUsers(users.filter((item, index) => index != id));
  // };

  // const remove = () =>
  //   setUsers(users.filter((elem, index) => index != users.length - 1));

  // const add = () => {
  //   setUsers([...users, users[users.length - 1] + 1]);
  // };

  return (
    <>
      <Nav/>

      {/* <div className="w-full h-screen bg-zinc-300">
        <div className="container mx-auto">
          <Cards users={users} handleRemove={handleRemove} />
          <Form handleFormSubmitData={handleFormSubmitData} />

          <div className="flex justify-center items-center gap-5 mt-10">
            <button
              className="px-4 py-1 bg-black text-white rounded-full"
              onClick={add}
            >
              Add User
            </button>
            <button
              className="px-4 py-1 bg-black text-white rounded-full"
              onClick={remove}
            >
              Remove User
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full h-screen bg-slate-300">
        <Pjtnav values={songData} />
        <div className="px-20 flex flex-wrap gap-5 mt-5">
          {songData.map((value, index) => (
            <Pjtcard
              key={index}
              index={index}
              values={value}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div> */}

      {/* <div
        className="w-full h-screen py-4 flex
     flex-wrap items-center justify-center gap-4 bg-slate-300"
      >
        {val.map((value, index) => (
          <Props
            values={value}
            index={index}
            handleClick={onChange}
            key={index}
          />
        ))}
      </div> */}
    </>
  );
}

export default App;
