import axios from 'axios';
import { NextResponse } from 'next/server';
import { env } from "process";

const judgeApi = axios.create({
  baseURL: `${env?.NEXT_PUBLIC_JUDGE0_HOST}`,
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
