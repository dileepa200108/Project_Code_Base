import axios from "axios";

//import.meta.env.VITE_API_URL ||

const api = axios.create({
  baseURL:  "http://localhost:3000", // Uses the backend URL from .env
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
