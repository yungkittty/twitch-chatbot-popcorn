import axios from "axios";

const configureAxios = () => {
  if (process.env.NODE_ENV !== "development") {
    axios.defaults.baseURL = "https://twitch-chatbot-popcorn-api.herokuapp.com/";
  } else {
    axios.defaults.baseURL = "http://localhost:4000/";
  }
};

export default configureAxios;
