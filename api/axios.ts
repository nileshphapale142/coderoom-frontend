import axios from "axios";

export const backendApi = axios.create({
  baseURL: 'https://coderoom-backend.onrender.com',
  // baseURL: 'http://localhost:5000', 
  withCredentials: true
});
