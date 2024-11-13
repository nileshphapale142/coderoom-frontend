'use server'

import { backendApi } from "@/api";
import { cookies } from "next/headers";


interface SignUpDto {
  name: string;
  email: string;
  password: string;
  isTeacher: boolean;
  enrollmentId?: string;
}

export async function SignUpAction(data: SignUpDto) {
  try {
    const response = await backendApi.post('/auth/signup', data);
    const resData = response.data;
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    
    if (!resData.access_token && resData?.in_verification_queue) return { status: 406 };
    if (!resData.access_token) return { status: 500 };
    
    cookies().set('access_token', resData.access_token, {
      sameSite: 'lax',             
      httpOnly: true,
      expires: expiryDate
    });
    
    cookies().set('is_teacher', resData.isTeacher, {
      sameSite: 'lax',             
      httpOnly: false,
      expires: expiryDate
    });

    
    return { status: 201 };
  } catch (err: any) {
    console.log(err);
    console.log(err?.message) 
    return {
      status: err?.response?.status || -1 
    };
  }
}  