import axios from "axios";

export const api = axios.create({
  baseURL: "https://skillora-bi8e.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log("REQUEST URL:", config.url);
  console.log("REQUEST HEADERS:", config.headers);

  return config;
});
