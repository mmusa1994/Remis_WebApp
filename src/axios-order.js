import axios from "axios";

const instance = axios.create({
  baseURL: "https://remis-app-6a881.firebaseio.com"
});

export default instance;
