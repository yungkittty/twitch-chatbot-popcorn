import axios from "axios";

const configureAxios = () => {
  axios.defaults.baseURL = "https://twitch-chatbot-popcorn-api.herokuapp.com/";
};

export default configureAxios;
