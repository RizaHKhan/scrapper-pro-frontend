import Axios from "axios";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.defaults.headers["Authorization"] = localStorage.getItem(
  "scrapper-pro-token"
);

export default instance;
