import axios from 'axios';
import { NextResponse } from 'next/server';
import { env } from "process";

const judgeApi = axios.create({
  baseURL: "http://judge0-v1131-server-1:2358",
  headers: {
    Authorization: `Bearer ${env?.NEXT_PUBLIC_SULU_API_KEY || ''}`
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse incoming JSON body
    const response = await judgeApi.post('/submissions', body, {
      params: {
        base64_encoded: true,
        wait: true
      }
    });


    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error in Judge0 API call:', error.response ? error.response.data : error.message);
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 } 
    );
  }
}
