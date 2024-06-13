import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {

  return (
    <div className="bg-black w-full h-screen flex flex-col">
      <div className="w-full text-center m-auto mt-10">
        <h1 className="font-semibold text-4xl mb-2 text-white">USERS</h1>

        <div className="flex flex-wrap gap-5 justify-center mt-5 mb-5">
          <Link
            className="p-3 bg-white text-xl mb-3 w-28 hover:bg-slate-200"
            to="/user/rutuja"
          >
            Rutuja
          </Link>
          <Link
            className="p-3 bg-white text-xl mb-3 w-28 hover:bg-slate-200"
            to="/user/jyoti"
          >
            Jyoti
          </Link>
          <Link
            className="p-3 bg-white text-xl mb-3 w-28 hover:bg-slate-200"
            to="/user/mahesh"
          >
            Mahesh
          </Link>
          <Link
            className="p-3 bg-white text-xl mb-3 w-28 hover:bg-slate-200"
            to="/user/aayush"
          >
            Aayush
          </Link>

        </div>
        <hr />
      </div>
      <Outlet />
      {/* this outlet will render the component in the same page instead of redirecting */}
    </div>
  );
};

export default User;
