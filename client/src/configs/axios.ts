import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL || "http://localhost:5000",
});
