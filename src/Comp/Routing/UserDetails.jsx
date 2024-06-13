import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();
  // this is used for colon name :name in the routes

  const navigate = useNavigate();

  const capitalize = name.charAt(0).toUpperCase() + name.slice(1);
  //to make the first letter of each word in a string to be uppercase and return it.

  return (
    <div className="w-full h-screen bg-black text-white m-auto p-5 flex justify-center items-center flex-col">
      <h1 className="text-2xl font-semibold">User Details</h1>

      <h1 className="text-lg mt-5">{`Hi, ${capitalize}`}</h1>
      <p className="mt-3 w-3/4 text-center">
        This is your details lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugit molestiae recusandae nisi magnam ullam labore temporibus
        commodi eius eligendi inventore nobis, accusamus nihil aspernatur
        minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
        ab.
      </p>

      <button
        onClick={() => navigate("/user") /*navigate(-1)*/}
        // in navigation we can directly command it or can also pass numbers
        className="px-5 py-2 mt-5 bg-white text-black rounded-full"
      >
        Go Back
      </button>

      {/* Link can also be used instead of button for navigation*/}
      {/* <Link
        className="px-5 py-2 mt-5 bg-white text-black rounded-full"
        to="/user"
      >
        Go Back
      </Link> */}
    </div>
  );
};

export default UserDetails;
