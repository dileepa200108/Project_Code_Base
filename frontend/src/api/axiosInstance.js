import axios from "axios";

// Determine API URL dynamically
const getBaseURL = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3000"; // Local backend for development
  }
  return import.meta.env.VITE_API_URL || "https://projectcodebase-production.up.railway.app/"; // Use env variable in production
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
