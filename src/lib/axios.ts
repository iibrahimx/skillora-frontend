import axios from "axios";

export const api = axios.create({
  baseURL: "https://skillora-bi8e.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
