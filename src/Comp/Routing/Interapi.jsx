import React, { useEffect, useState } from "react";
import Axios from "../../utils/axios"
// this will help in making the request to get all users data without differing between components

const Interapi = () => {
  // component updating = component deletion + component creation
  const [val, setVal] = useState("This is value of the first data");
  const [item, setItem] = useState("This is value of the second data");

  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  const getProduct = () => {
    // const api = "https://fakestoreapi.com/products";
    // if we have utils Axios then we don't have to use Axios in different components
    // instead just write .get("/products") and cut the api line

    Axios
      .get("/products")
      // `get` fetchs the data from the API and `then` it calls the function
      .then((product) => {
        console.log(product);
        setProduct(product.data);
        // setProduct add the data in useState
      })
      .catch((err) => {
        console.log(err);
      });
    // It is a Promise method used here
  };

  const getUsers = () => {
    // const api = "https://fakestoreapi.com/users";
    // if we have utils Axios then we don't have to use Axios in different components
    // instead just write .get("/users") and cut the api line

    Axios
      .get("/users")
      // `get` fetchs the data from the API and `then` it calls the function
      .then((user) => {
        console.log(user);
        setUser(user.data);
        // setProduct add the data in useState
      })
      .catch((err) => {
        console.log(err);
      });
    // It is a Promise method used here
  };
  // console.log(product);
  // console.log(user);

  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";

    Axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      // `post` method is used to send data and it takes  two parameters
      // first one is the URL of where you want to post your data
      // second parameter is an object which contains all the details about the data that needs to be sent
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // It is a Promise method used here
  };

  useEffect(() => {
    getProduct();
    getUsers();
    console.log("API component mounted");

    return () => {
      console.log("API component unmounted");
    };
  }, [item]);
  // whenever val or item changes, it will show if the whole component (Interapi page) it updating or the component and with help of (dependency) square bracket in useEffect "[]" it will not update the whole component else it will be updating the component
  // However any var or function is written in the square bracket it will re-render the whole component (Interapi page)

  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  //to make the first letter of each word in a string to be uppercase and return it.

  return (
    <div>
      {/* <div className="flex mb-5 p-5">
        <h1>{val}</h1>
        <button
          className="m-4 px-5 py-1 bg-black text-white rounded-full"
          onClick={() => setVal("First")}
        >
          Change the text First
        </button>
        <h1>{item}</h1>
        <button
          className="m-4 px-5 py-1 bg-black text-white rounded-full"
          onClick={() => setItem("Second")}
        >
          Change the text Second
        </button>
      </div> */}
      {/* This is only for a example */}

      {/* <button
        className="m-4 px-5 py-1 bg-black text-white rounded-full"
        onClick={getProduct}
      >
        Get API
      </button> */}
      {/* we don't need this button cuz the useEffect renders the api when the component is mounted */}

      {/* <button
        className="m-4 px-5 py-1 bg-black text-white rounded-full"
        onClick={addProduct}
      >
        Add API
      </button> */}
      {/* We also don't need this button but the button shows us how to add an information in the api */}

      <details>
        <summary className="font-semibold text-2xl px-3">Products:</summary>
        <ul className="mt-5">
          {product.length > 0 ? (
            product.map((p) => (
              <li key={p.id} className="w-full bg-black text-white my-2 p-3">
                Category: {p.category} <br /> Name: {p.title} <br /> Price: {p.price}$
              </li>
            ))
          ) : (
            <h1 className="flex justify-center items-center text-2xl">
              Loading...
            </h1>
          )}
        </ul>
      </details>

      <details>
        <summary className="font-semibold text-2xl px-3">Users:</summary>
        <ul className="mt-5">
          {user.length > 0 ? (
            user.map((p) => (
              <li key={p.id} className="w-full bg-black text-white my-2 p-3">
                Name: {p.name.firstname} {p.name.lastname} <br /> Email: {p.email}
              </li>
            ))
          ) : (
            <h1 className="flex justify-center items-center text-2xl">
              Loading...
            </h1>
          )}
        </ul>
      </details>
    </div>
  );
};

export default Interapi;
