import axios from "axios";

export const backendApi = axios.create({
  baseURL: process.env?.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://coderoom-backend.onrender.com', 
  withCredentials: true
});