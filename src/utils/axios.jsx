import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instance;
