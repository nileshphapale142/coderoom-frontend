import axios from 'axios';
import { NextResponse } from 'next/server';
import { env } from "process";

const judgeApi = axios.create({
  baseURL: "https://judge0-ce.p.sulu.sh",
  headers: {
    Authorization: `Bearer ${env?.NEXT_PUBLIC_SULU_API_KEY || ''}`
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await judgeApi.post('/submissions', body, {
      params: {
        base64_encoded: true,
        wait: true
      }
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}