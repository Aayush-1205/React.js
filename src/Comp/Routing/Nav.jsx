import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import UserDetails from "./UserDetails";
import Remove from "../Remove";
import Counter from "../Counter";
import Card from "../Card";
import Interapi from "./Interapi";
import Userid from "./Userid";

const Nav = () => {
  return (
    <div>
      <nav className="flex px-5 py-2 gap-10 items-center">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#B91C1C" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => {
            return [e.isActive ? "text-red-700 drop-shadow-lg" : ""].join(" ");
          }}
          to="/user"
        >
          Users
        </NavLink>
        <NavLink to="/about">
          {(e) => {
            return (
              <span
                className={[
                  e.isActive ? "text-red-700 drop-shadow-lg" : "",
                ].join(" ")}
              >
                About
              </span>
            );
          }}
        </NavLink>
        <NavLink
          className={(e) => {
            return [e.isActive ? "text-red-700 drop-shadow-lg" : ""].join(" ");
          }}
          to="/Interapi"
        >
          API
        </NavLink>
        <NavLink
          className={(e) => {
            return [e.isActive ? "text-red-700 drop-shadow-lg" : ""].join(" ");
          }}
          to="/userid"
        >
          Accounts
        </NavLink>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetails />} />
        </Route>
        {/* This will help to route the component in the same page */}
        <Route path="/about" element={<About />} />
        <Route path="/interapi" element={<Interapi />} />
        <Route path="/userid" element={<Userid />} />
        {/* <Route
          path="/card"
          element={<Card text={"OFFER!!!"} color={"bg-yellow-400"} />}
        /> */}
      </Routes>
    </div>
  );
};

export default Nav;
