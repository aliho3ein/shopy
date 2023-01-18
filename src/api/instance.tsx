import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://online-shop-87fb7-default-rtdb.europe-west1.firebasedatabase.app",
  timeout: 7000,
});

export default instance;
