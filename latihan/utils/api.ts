import axios from "axios";

const headers = {};

export const apiFetch = axios.create({
  baseURL: import.meta.env.API_URL || "http://localhost:3000",
  headers: headers,
});
