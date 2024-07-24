'use server'

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchTestData = async (tid: number) => {
  try {
    if (!cookies().get('access_token')) {
      redirect('/auth/sign');
      return {
        data: null,
      };
    }

    const response = await axios.get(`http://localhost:5000/test/${tid}`, {
      headers: {
        Authorization: `Bearer ${cookies().get('access_token')?.value}`,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    const data = response.data;

    return {
      data,
    };
  } catch (err: any) {
    //todo: error handling;
    console.log('error : ', err);

    if (err?.response?.status === 404) redirect('/not-found');
    else if (err?.response?.status === 401) redirect(`/auth/signin`);
    else if (err?.response?.status === 500) redirect(`/`);

    return {
      data: null,
      status: err?.response?.status,
    };
  }
};