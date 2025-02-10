import axios from "axios";

// Determine API URL dynamically
const getBaseURL = () => {
  if (window.location.origin === "http://localhost:3000") {
    return "http://localhost:5000"; // Use local backend when on localhost
  }
  return import.meta.env.VITE_API_URL || "https://projectcodebase-production.up.railway.app/";
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
