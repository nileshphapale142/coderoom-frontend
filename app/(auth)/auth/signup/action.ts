'use server'

import { backendApi } from "@/api";
import { cookies } from "next/headers";


interface SignUpDto {
  name: string;
  email: string;
  password: string;
  isTeacher: boolean;
  enrollementId?: string;
}

export async function SignUpAction(data: SignUpDto) {
  try {
    const response = await backendApi.post('/auth/signup', data);
    const resData = response.data;
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    cookies().set('access_token', resData.access_token, {
      sameSite: 'lax',             // Or omit `sameSite`
      httpOnly: true,
      expires: expiryDate
    });
    
    // Teacher role cookie
    cookies().set('is_teacher', resData.isTeacher, {
      sameSite: 'lax',             // Or omit `sameSite`
      httpOnly: false,
      expires: expiryDate
    });

    
    return { status: 201 };
  } catch (err: any) {
    console.log(err);
    return {
      status: err?.response?.status || -1 
    };
  }
}  