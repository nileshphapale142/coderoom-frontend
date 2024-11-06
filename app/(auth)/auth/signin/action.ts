'use server'

import { backendApi } from "@/api";
import { cookies } from "next/headers";

export async function SignInAction(data: {
  email: string;
  password: string;
}) {
  try {
    const response = await backendApi.post('/auth/signin', data);
    const resData = response.data;
    
    //todo: add conrfig files to store configuration information including domain
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    cookies().set('access_token', resData.access_token, {
      sameSite: 'lax',            
      httpOnly: true,
      expires: expiryDate
    });
    
    // Teacher role cookie
    cookies().set('is_teacher', resData.isTeacher, {
      sameSite: 'lax',           
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