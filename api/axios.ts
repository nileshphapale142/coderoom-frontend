import axios from "axios";

export const backendApi = axios.create({
  baseURL: process.env?.NODE_ENVIRONMENT === 'development' ? 'http://localhost:8080' : 'https://coderoom-backend-45797345156.asia-south1.run.app', 
  withCredentials: true
});