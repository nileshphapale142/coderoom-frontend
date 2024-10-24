'use server';

import { backendApi } from '@/api';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const fetchTestData = async (tid: number) => {
  const cookies_ = await cookies()

  try {
    if (!cookies_.get('access_token')) {
      redirect('/auth/sign');
      return {
        data: null,
      };
    }

    const response = await backendApi.get(`/test/${tid}`, {
    withCredentials: true,
      headers: {
        Authorization: `Bearer ${cookies_.get('access_token')?.value}`,
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
