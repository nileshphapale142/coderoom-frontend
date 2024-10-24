import axios from "axios";
import { env } from "process";

export const backendApi = axios.create({
  baseURL: env?.BACKEND_API_URL, 
  withCredentials: true
});


export const judgeApi = axios.create({
  baseURL: '/api/judge'
  // headers: {
  //   Authorization: `Bearer ${env?.NEXT_PUBLIC_SULU_API_KEY}`,
  //   'Access-Control-Allow-Origin': '*',
    
  // }
})